import { dev } from '$app/environment';
// import { version } from '../../package.json';

export const APP_NAME = 'AI智慧学习教室';
//export const WEBUI_BASE_URL = dev ? `http://${location.hostname}:8080` : ``;
//export const WEBUI_BASE_URL = dev ? `https://frp-now.top:62711` : ``;		//frp-now.top:62711
export const WEBUI_BASE_URL = dev ? `http://${location.hostname}:8082` : ``;		//frp-now.top:62711 // http://0.0.0.0:8082

// [c#]两次开发验证接口
export const WEBUI_BASEAPI_URL = 'https://edu.toolai.io';	//http://127.0.0.1:5008	//https://edu.toolai.io
export const WEBUI_BASEAPI_BASE_URL = `${WEBUI_BASEAPI_URL}/api/v1`;

export const WEBUI_API_BASE_URL = `${WEBUI_BASE_URL}/api/v1`;

export const LITELLM_API_BASE_URL = `${WEBUI_BASE_URL}/litellm/api`;
export const OLLAMA_API_BASE_URL = `${WEBUI_BASE_URL}/ollama`;
export const OPENAI_API_BASE_URL = `${WEBUI_BASE_URL}/openai/api`;
export const AUDIO_API_BASE_URL = `${WEBUI_BASE_URL}/audio/api/v1`;
export const IMAGES_API_BASE_URL = `${WEBUI_BASE_URL}/images/api/v1`;
export const RAG_API_BASE_URL = `${WEBUI_BASE_URL}/rag/api/v1`;

export const WEBUI_VERSION = APP_VERSION;
export const REQUIRED_OLLAMA_VERSION = '0.1.16';

export const SUPPORTED_FILE_TYPE = [
	'application/epub+zip',
	'application/pdf',
	'text/plain',
	'text/csv',
	'text/xml',
	'text/html',
	'text/x-python',
	'text/css',
	'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
	'application/octet-stream',
	'application/x-javascript',
	'text/markdown',
	'audio/mpeg',
	'audio/wav'
];

export const SUPPORTED_FILE_EXTENSIONS = [
	'md',
	'rst',
	'go',
	'py',
	'java',
	'sh',
	'bat',
	'ps1',
	'cmd',
	'js',
	'ts',
	'css',
	'cpp',
	'hpp',
	'h',
	'c',
	'cs',
	'htm',
	'html',
	'sql',
	'log',
	'ini',
	'pl',
	'pm',
	'r',
	'dart',
	'dockerfile',
	'env',
	'php',
	'hs',
	'hsc',
	'lua',
	'nginxconf',
	'conf',
	'm',
	'mm',
	'plsql',
	'perl',
	'rb',
	'rs',
	'db2',
	'scala',
	'bash',
	'swift',
	'vue',
	'svelte',
	'doc',
	'docx',
	'pdf',
	'csv',
	'txt',
	'xls',
	'xlsx'
];

// Source: https://kit.svelte.dev/docs/modules#$env-static-public
// This feature, akin to $env/static/private, exclusively incorporates environment variables
// that are prefixed with config.kit.env.publicPrefix (usually set to PUBLIC_).
// Consequently, these variables can be securely exposed to client-side code.
