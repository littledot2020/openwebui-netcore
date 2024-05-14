import json
import requests
import logging

from config import SRC_LOG_LEVELS, VERSION, WEBUI_FAVICON_URL, WEBUI_NAME

log = logging.getLogger(__name__)
log.setLevel(SRC_LOG_LEVELS["WEBHOOK"])



def post_webhook(url: str, message: str, event_data: dict) -> bool:
    try:
        payload = {}  # 初始化 payload 字典

        # 根据 webhook URL 的类型设置不同的 payload 数据
        if "https://hooks.slack.com" in url or "https://chat.googleapis.com" in url:
            # 如果是 Slack 或 Google Chat Webhooks，则设置 text 字段为消息内容
            payload["text"] = message
        elif "https://discord.com/api/webhooks" in url:
            # 如果是 Discord Webhooks，则设置 content 字段为消息内容
            payload["content"] = message
        elif "webhook.office.com" in url:
            # 如果是 Microsoft Teams Webhooks，则构建特定格式的 payload 数据
            action = event_data.get("action", "undefined")
            facts = [
                {"name": name, "value": value}
                for name, value in json.loads(event_data.get("user", {})).items()
            ]
            payload = {
                "@type": "MessageCard",
                "@context": "http://schema.org/extensions",
                "themeColor": "0076D7",
                "summary": message,
                "sections": [
                    {
                        "activityTitle": message,
                        "activitySubtitle": f"{WEBUI_NAME} ({VERSION}) - {action}",
                        "activityImage": WEBUI_FAVICON_URL,
                        "facts": facts,
                        "markdown": True,
                    }
                ],
            }
        else:
            # 默认情况下，将 event_data 直接赋值给 payload
            payload = {**event_data}

        log.debug(f"payload: {payload}")  # 记录 payload 日志
        r = requests.post(url, json=payload)  # 发送 POST 请求
        r.raise_for_status()  # 检查请求是否成功
        log.debug(f"r.text: {r.text}")  # 记录请求返回的文本日志
        return True  # 返回 True 表示发送成功
    except Exception as e:
        log.exception(e)  # 记录异常日志
        return False  # 返回 False 表示发送失败

# def post_webhook(url: str, message: str, event_data: dict) -> bool:
#     try:
#         payload = {}

#         # Slack and Google Chat Webhooks
#         if "https://hooks.slack.com" in url or "https://chat.googleapis.com" in url:
#             payload["text"] = message
#         # Discord Webhooks
#         elif "https://discord.com/api/webhooks" in url:
#             payload["content"] = message
#         # Microsoft Teams Webhooks
#         elif "webhook.office.com" in url:
#             action = event_data.get("action", "undefined")
#             facts = [
#                 {"name": name, "value": value}
#                 for name, value in json.loads(event_data.get("user", {})).items()
#             ]
#             payload = {
#                 "@type": "MessageCard",
#                 "@context": "http://schema.org/extensions",
#                 "themeColor": "0076D7",
#                 "summary": message,
#                 "sections": [
#                     {
#                         "activityTitle": message,
#                         "activitySubtitle": f"{WEBUI_NAME} ({VERSION}) - {action}",
#                         "activityImage": WEBUI_FAVICON_URL,
#                         "facts": facts,
#                         "markdown": True,
#                     }
#                 ],
#             }
#         # Default Payload
#         else:
#             payload = {**event_data}

#         log.debug(f"payload: {payload}")
#         r = requests.post(url, json=payload)
#         r.raise_for_status()
#         log.debug(f"r.text: {r.text}")
#         return True
#     except Exception as e:
#         log.exception(e)
#         return False
