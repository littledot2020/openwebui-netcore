from bs4 import BeautifulSoup
import json
import markdown
import time
import os
import sys
import logging
import aiohttp
import requests

import uvicorn

from fastapi import FastAPI, Request, Depends, status
from fastapi.staticfiles import StaticFiles
from fastapi import HTTPException
from fastapi.middleware.wsgi import WSGIMiddleware
from fastapi.middleware.cors import CORSMiddleware
from starlette.exceptions import HTTPException as StarletteHTTPException
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import StreamingResponse, Response

from apps.ollama.main import app as ollama_app
from apps.openai.main import app as openai_app

from apps.litellm.main import (
    app as litellm_app,
    start_litellm_background,
    shutdown_litellm_background,
)


from apps.audio.main import app as audio_app
from apps.images.main import app as images_app
from apps.rag.main import app as rag_app
from apps.web.main import app as webui_app

import asyncio
from pydantic import BaseModel
from typing import List


from utils.utils import get_admin_user
from apps.rag.utils import rag_messages

from config import (
    CONFIG_DATA,
    WEBUI_NAME,
    WEBUI_URL,
    WEBUI_AUTH,
    ENV,
    VERSION,
    CHANGELOG,
    FRONTEND_BUILD_DIR,
    CACHE_DIR,
    STATIC_DIR,
    ENABLE_LITELLM,
    ENABLE_MODEL_FILTER,
    MODEL_FILTER_LIST,
    GLOBAL_LOG_LEVEL,
    SRC_LOG_LEVELS,
    WEBHOOK_URL,
    ENABLE_ADMIN_EXPORT,
    OPENAI_API_KEY,
)
from constants import ERROR_MESSAGES

logging.basicConfig(stream=sys.stdout, level=GLOBAL_LOG_LEVEL)
log = logging.getLogger(__name__)
log.setLevel(SRC_LOG_LEVELS["MAIN"])


class SPAStaticFiles(StaticFiles):
    async def get_response(self, path: str, scope):
        try:
            return await super().get_response(path, scope)
        except (HTTPException, StarletteHTTPException) as ex:
            if ex.status_code == 404:
                return await super().get_response("index.html", scope)
            else:
                raise ex


print(
    rf"""
#   ___                    __        __   _     _   _ ___ 
#  / _ \ _ __   ___ _ __   \ \      / /__| |__ | | | |_ _|
# | | | | '_ \ / _ \ '_ \   \ \ /\ / / _ \ '_ \| | | || | 
# | |_| | |_) |  __/ | | |   \ V  V /  __/ |_) | |_| || | 
#  \___/| .__/ \___|_| |_|    \_/\_/ \___|_.__/ \___/|___|
#       |_|                                               

 _____   _____   _____   _           ___   _        _   _____  
|_   _| /  _  \ /  _  \ | |         /   | | |      | | /  _  \ 
  | |   | | | | | | | | | |        / /| | | |      | | | | | | 
  | |   | | | | | | | | | |       / / | | | |      | | | | | | 
  | |   | |_| | | |_| | | |___   / /  | | | |      | | | |_| | 
  |_|   \_____/ \_____/ |_____| /_/   |_| |_|      |_| \_____/ 
      
v{VERSION} - building the best open-source AI user interface.      
https://github.com/littledot2020/openwebui-netcore
"""
)

app = FastAPI(docs_url="/docs" if ENV == "dev" else None, redoc_url=None)

app.state.ENABLE_MODEL_FILTER = ENABLE_MODEL_FILTER
app.state.MODEL_FILTER_LIST = MODEL_FILTER_LIST

app.state.WEBHOOK_URL = WEBHOOK_URL

origins = ["*"]


class RAGMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        return_citations = False

        if request.method == "POST" and (
            "/api/chat" in request.url.path or "/chat/completions" in request.url.path
        ):
            log.debug(f"request.url.path: {request.url.path}")

            # Read the original request body
            body = await request.body()
            # Decode body to string
            body_str = body.decode("utf-8")
            # Parse string to JSON
            data = json.loads(body_str) if body_str else {}

            return_citations = data.get("citations", False)
            if "citations" in data:
                del data["citations"]

            # Example: Add a new key-value pair or modify existing ones
            # data["modified"] = True  # Example modification
            if "docs" in data:
                data = {**data}
                data["messages"], citations = rag_messages(
                    docs=data["docs"],
                    messages=data["messages"],
                    template=rag_app.state.RAG_TEMPLATE,
                    embedding_function=rag_app.state.EMBEDDING_FUNCTION,
                    k=rag_app.state.TOP_K,
                    reranking_function=rag_app.state.sentence_transformer_rf,
                    r=rag_app.state.RELEVANCE_THRESHOLD,
                    hybrid_search=rag_app.state.ENABLE_RAG_HYBRID_SEARCH,
                )
                del data["docs"]

                log.debug(
                    f"data['messages']: {data['messages']}, citations: {citations}"
                )

            modified_body_bytes = json.dumps(data).encode("utf-8")

            # Replace the request body with the modified one
            request._body = modified_body_bytes

            # Set custom header to ensure content-length matches new body length
            request.headers.__dict__["_list"] = [
                (b"content-length", str(len(modified_body_bytes)).encode("utf-8")),
                *[
                    (k, v)
                    for k, v in request.headers.raw
                    if k.lower() != b"content-length"
                ],
            ]

        response = await call_next(request)

        if return_citations:
            # Inject the citations into the response
            if isinstance(response, StreamingResponse):
                # If it's a streaming response, inject it as SSE event or NDJSON line
                content_type = response.headers.get("Content-Type")
                if "text/event-stream" in content_type:
                    return StreamingResponse(
                        self.openai_stream_wrapper(response.body_iterator, citations),
                    )
                if "application/x-ndjson" in content_type:
                    return StreamingResponse(
                        self.ollama_stream_wrapper(response.body_iterator, citations),
                    )

        return response

    async def _receive(self, body: bytes):
        return {"type": "http.request", "body": body, "more_body": False}

    async def openai_stream_wrapper(self, original_generator, citations):
        yield f"data: {json.dumps({'citations': citations})}\n\n"
        async for data in original_generator:
            yield data

    async def ollama_stream_wrapper(self, original_generator, citations):
        yield f"{json.dumps({'citations': citations})}\n"
        async for data in original_generator:
            yield data


app.add_middleware(RAGMiddleware)


app.add_middleware(
    CORSMiddleware,
    # allow_origins=origins,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.middleware("http")
async def check_url(request: Request, call_next):
    start_time = int(time.time())
    response = await call_next(request)
    process_time = int(time.time()) - start_time
    response.headers["X-Process-Time"] = str(process_time)

    return response


@app.on_event("startup")
async def on_startup():
    if ENABLE_LITELLM:
        asyncio.create_task(start_litellm_background())


app.mount("/api/v1", webui_app)
app.mount("/litellm/api", litellm_app)

app.mount("/ollama", ollama_app)
app.mount("/openai/api", openai_app)

app.mount("/images/api/v1", images_app)
app.mount("/audio/api/v1", audio_app)
app.mount("/rag/api/v1", rag_app)


@app.get("/api/config")
async def get_app_config():
    # Checking and Handling the Absence of 'ui' in CONFIG_DATA

    default_locale = "zh-CN" # en-US
    if "ui" in CONFIG_DATA:
        log.info(f"ui in CONFIG_DATA===========")
        default_locale = CONFIG_DATA["ui"].get("default_locale", "zh-CN")   # en-US

    # The Rest of the Function Now Uses the Variables Defined Above
    return {
        "status": True,
        "name": WEBUI_NAME,
        "version": VERSION,
        "auth": WEBUI_AUTH,
        "default_locale": default_locale,
        "images": images_app.state.ENABLED,
        "default_models": webui_app.state.DEFAULT_MODELS,
        "default_prompt_suggestions": webui_app.state.DEFAULT_PROMPT_SUGGESTIONS,
        "trusted_header_auth": bool(webui_app.state.AUTH_TRUSTED_EMAIL_HEADER),
        "admin_export_enabled": ENABLE_ADMIN_EXPORT,
    }


@app.get("/api/config/model/filter")
async def get_model_filter_config(user=Depends(get_admin_user)):
    return {
        "enabled": app.state.ENABLE_MODEL_FILTER,
        "models": app.state.MODEL_FILTER_LIST,
    }


class ModelFilterConfigForm(BaseModel):
    enabled: bool
    models: List[str]


@app.post("/api/config/model/filter")
async def update_model_filter_config(
    form_data: ModelFilterConfigForm, user=Depends(get_admin_user)
):
    app.state.ENABLE_MODEL_FILTER = form_data.enabled
    app.state.MODEL_FILTER_LIST = form_data.models

    ollama_app.state.ENABLE_MODEL_FILTER = app.state.ENABLE_MODEL_FILTER
    ollama_app.state.MODEL_FILTER_LIST = app.state.MODEL_FILTER_LIST

    openai_app.state.ENABLE_MODEL_FILTER = app.state.ENABLE_MODEL_FILTER
    openai_app.state.MODEL_FILTER_LIST = app.state.MODEL_FILTER_LIST

    litellm_app.state.ENABLE_MODEL_FILTER = app.state.ENABLE_MODEL_FILTER
    litellm_app.state.MODEL_FILTER_LIST = app.state.MODEL_FILTER_LIST

    return {
        "enabled": app.state.ENABLE_MODEL_FILTER,
        "models": app.state.MODEL_FILTER_LIST,
    }


@app.get("/api/webhook")
async def get_webhook_url(user=Depends(get_admin_user)):
    return {
        "url": app.state.WEBHOOK_URL,
    }


class UrlForm(BaseModel):
    url: str


@app.post("/api/webhook")
async def update_webhook_url(form_data: UrlForm, user=Depends(get_admin_user)):
    app.state.WEBHOOK_URL = form_data.url

    webui_app.state.WEBHOOK_URL = app.state.WEBHOOK_URL

    return {
        "url": app.state.WEBHOOK_URL,
    }


@app.get("/api/version")
async def get_app_config():
    return {
        "version": VERSION,
    }


@app.get("/api/changelog")
async def get_app_changelog():
    return {key: CHANGELOG[key] for idx, key in enumerate(CHANGELOG) if idx < 5}


@app.get("/api/version/updates")
async def get_app_latest_release_version():
    try:
        async with aiohttp.ClientSession() as session:
            async with session.get(
                "https://api.github.com/repos/open-webui/open-webui/releases/latest"
            ) as response:
                response.raise_for_status()
                data = await response.json()
                latest_version = data["tag_name"]

                return {"current": VERSION, "latest": latest_version[1:]}
    except aiohttp.ClientError as e:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail=ERROR_MESSAGES.RATE_LIMIT_EXCEEDED,
        )


@app.get("/manifest.json")
async def get_manifest_json():
    return {
        "name": WEBUI_NAME,
        "short_name": WEBUI_NAME,
        "start_url": "/",
        "display": "standalone",
        "background_color": "#343541",
        "theme_color": "#343541",
        "orientation": "portrait-primary",
        "icons": [{"src": "/static/logo.png", "type": "image/png", "sizes": "500x500"}],
    }


@app.get("/opensearch.xml")
async def get_opensearch_xml():
    xml_content = rf"""
    <OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/" xmlns:moz="http://www.mozilla.org/2006/browser/search/">
    <ShortName>{WEBUI_NAME}</ShortName>
    <Description>Search {WEBUI_NAME}</Description>
    <InputEncoding>UTF-8</InputEncoding>
    <Image width="16" height="16" type="image/x-icon">{WEBUI_URL}/favicon.png</Image>
    <Url type="text/html" method="get" template="{WEBUI_URL}/?q={"{searchTerms}"}"/>
    <moz:SearchForm>{WEBUI_URL}</moz:SearchForm>
    </OpenSearchDescription>
    """
    return Response(content=xml_content, media_type="application/xml")


app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")
app.mount("/cache", StaticFiles(directory=CACHE_DIR), name="cache")

if os.path.exists(FRONTEND_BUILD_DIR):
    app.mount(
        "/",
        SPAStaticFiles(directory=FRONTEND_BUILD_DIR, html=True),
        name="spa-static-files",
    )
else:
    log.warning(
        f"Frontend build directory not found at '{FRONTEND_BUILD_DIR}'. Serving API only."
    )


@app.on_event("shutdown")
async def shutdown_event():
    if ENABLE_LITELLM:
        await shutdown_litellm_background()
