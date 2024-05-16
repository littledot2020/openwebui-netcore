import{A as l,I as c}from"./index.78134b2e.js";const h=async a=>{let n=null;const o=await fetch(`${l}/config`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),n=t.detail,null));if(n)throw n;return o},u=async(a,n)=>{let o=null;const t=await fetch(`${l}/config/update`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({...n})}).then(async e=>{if(!e.ok)throw await e.json();return e.json()}).catch(e=>(console.log(e),o=e.detail,null));if(o)throw o;return t},p=async(a,n)=>{const o=new FormData;o.append("file",n);let t=null;const e=await fetch(`${l}/transcriptions`,{method:"POST",headers:{Accept:"application/json",authorization:`Bearer ${a}`},body:o}).then(async i=>{if(!i.ok)throw await i.json();return i.json()}).catch(i=>(t=i.detail,console.log(i),null));if(t)throw t;return e},d=async(a="",n="alloy",o="",t="tts-1")=>{let e=null;const i=await fetch(`${l}/speech`,{method:"POST",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"},body:JSON.stringify({model:t,input:o,voice:n})}).then(async r=>{if(!r.ok)throw await r.json();return r}).catch(r=>(e=r.detail,console.log(r),null));if(e)throw e;return i},f=async(a="")=>{let n=null;const o=await fetch(`${c}/config`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...a&&{authorization:`Bearer ${a}`}}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),"detail"in t?n=t.detail:n="Server connection failed",null));if(n)throw n;return o},y=async(a="",n,o)=>{let t=null;const e=await fetch(`${c}/config/update`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...a&&{authorization:`Bearer ${a}`}},body:JSON.stringify({engine:n,enabled:o})}).then(async i=>{if(!i.ok)throw await i.json();return i.json()}).catch(i=>(console.log(i),"detail"in i?t=i.detail:t="Server connection failed",null));if(t)throw t;return e},w=async(a="")=>{let n=null;const o=await fetch(`${c}/openai/config`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...a&&{authorization:`Bearer ${a}`}}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),"detail"in t?n=t.detail:n="Server connection failed",null));if(n)throw n;return o},j=async(a="",n,o)=>{let t=null;const e=await fetch(`${c}/openai/config/update`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...a&&{authorization:`Bearer ${a}`}},body:JSON.stringify({url:n,key:o})}).then(async i=>{if(!i.ok)throw await i.json();return i.json()}).catch(i=>(console.log(i),"detail"in i?t=i.detail:t="Server connection failed",null));if(t)throw t;return e},g=async(a="")=>{let n=null;const o=await fetch(`${c}/url`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...a&&{authorization:`Bearer ${a}`}}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),"detail"in t?n=t.detail:n="Server connection failed",null));if(n)throw n;return o},S=async(a="",n={})=>{let o=null;const t=await fetch(`${c}/url/update`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...a&&{authorization:`Bearer ${a}`}},body:JSON.stringify({...n})}).then(async e=>{if(!e.ok)throw await e.json();return e.json()}).catch(e=>(console.log(e),"detail"in e?o=e.detail:o="Server connection failed",null));if(o)throw o;return t},m=async(a="")=>{let n=null;const o=await fetch(`${c}/size`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...a&&{authorization:`Bearer ${a}`}}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),"detail"in t?n=t.detail:n="Server connection failed",null));if(n)throw n;return o.IMAGE_SIZE},T=async(a="",n)=>{let o=null;const t=await fetch(`${c}/size/update`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...a&&{authorization:`Bearer ${a}`}},body:JSON.stringify({size:n})}).then(async e=>{if(!e.ok)throw await e.json();return e.json()}).catch(e=>(console.log(e),"detail"in e?o=e.detail:o="Server connection failed",null));if(o)throw o;return t.IMAGE_SIZE},$=async(a="")=>{let n=null;const o=await fetch(`${c}/steps`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...a&&{authorization:`Bearer ${a}`}}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),"detail"in t?n=t.detail:n="Server connection failed",null));if(n)throw n;return o.IMAGE_STEPS},A=async(a="",n)=>{let o=null;const t=await fetch(`${c}/steps/update`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...a&&{authorization:`Bearer ${a}`}},body:JSON.stringify({steps:n})}).then(async e=>{if(!e.ok)throw await e.json();return e.json()}).catch(e=>(console.log(e),"detail"in e?o=e.detail:o="Server connection failed",null));if(o)throw o;return t.IMAGE_STEPS},I=async(a="")=>{let n=null;const o=await fetch(`${c}/models`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...a&&{authorization:`Bearer ${a}`}}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),"detail"in t?n=t.detail:n="Server connection failed",null));if(n)throw n;return o},z=async(a="")=>{let n=null;const o=await fetch(`${c}/models/default`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...a&&{authorization:`Bearer ${a}`}}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),"detail"in t?n=t.detail:n="Server connection failed",null));if(n)throw n;return o.model},C=async(a="",n)=>{let o=null;const t=await fetch(`${c}/models/default/update`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...a&&{authorization:`Bearer ${a}`}},body:JSON.stringify({model:n})}).then(async e=>{if(!e.ok)throw await e.json();return e.json()}).catch(e=>(console.log(e),"detail"in e?o=e.detail:o="Server connection failed",null));if(o)throw o;return t.model},O=async(a="",n)=>{let o=null;const t=await fetch(`${c}/generations`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...a&&{authorization:`Bearer ${a}`}},body:JSON.stringify({prompt:n})}).then(async e=>{if(!e.ok)throw await e.json();return e.json()}).catch(e=>(console.log(e),"detail"in e?o=e.detail:o="Server connection failed",null));if(o)throw o;return t};export{f as a,g as b,w as c,m as d,$ as e,I as f,h as g,z as h,S as i,y as j,j as k,C as l,T as m,A as n,O as o,d as s,p as t,u};
