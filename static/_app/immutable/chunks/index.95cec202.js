import{a as r}from"./index.e32116ac.js";const s=async()=>{let o=null;const e=await fetch(`${r}/api/config`,{method:"GET",headers:{"Content-Type":"application/json"}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),o=t,null));if(o)throw o;return e},c=async()=>{let o=null;const e=await fetch(`${r}/api/changelog`,{method:"GET",headers:{"Content-Type":"application/json"}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),o=t,null));if(o)throw o;return e},h=async()=>{let o=null;const e=await fetch(`${r}/api/version/updates`,{method:"GET",headers:{"Content-Type":"application/json"}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),o=t,null));if(o)throw o;return e},u=async o=>{let e=null;const t=await fetch(`${r}/api/config/model/filter`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${o}`}}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).catch(n=>(console.log(n),e=n,null));if(e)throw e;return t},p=async(o,e,t)=>{let n=null;const a=await fetch(`${r}/api/config/model/filter`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${o}`},body:JSON.stringify({enabled:e,models:t})}).then(async i=>{if(!i.ok)throw await i.json();return i.json()}).catch(i=>(console.log(i),n=i,null));if(n)throw n;return a},f=async o=>{let e=null;const t=await fetch(`${r}/api/webhook`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${o}`}}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).catch(n=>(console.log(n),e=n,null));if(e)throw e;return t.url},w=async(o,e)=>{let t=null;const n=await fetch(`${r}/api/webhook`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${o}`},body:JSON.stringify({url:e})}).then(async a=>{if(!a.ok)throw await a.json();return a.json()}).catch(a=>(console.log(a),t=a,null));if(t)throw t;return n.url};export{h as a,c as b,f as c,u as d,p as e,s as g,w as u};