import{n as i}from"./index.e32116ac.js";const u=async(r,a,o,t,e,n=null)=>{let s=null;const l=await fetch(`${i}/documents/create`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${r}`},body:JSON.stringify({collection_name:a,filename:o,name:t,title:e,...n?{content:JSON.stringify(n)}:{}})}).then(async c=>{if(!c.ok)throw await c.json();return c.json()}).catch(c=>(s=c.detail,console.log(c),null));if(s)throw s;return l},p=async(r="")=>{let a=null;const o=await fetch(`${i}/documents/`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${r}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).then(t=>t).catch(t=>(a=t.detail,console.log(t),null));if(a)throw a;return o},d=async(r,a,o)=>{let t=null;const e=await fetch(`${i}/documents/name/${a}/update`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${r}`},body:JSON.stringify({name:o.name,title:o.title})}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).then(n=>n).catch(n=>(t=n.detail,console.log(n),null));if(t)throw t;return e},y=async(r,a,o)=>{let t=null;const e=await fetch(`${i}/documents/name/${a}/tags`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${r}`},body:JSON.stringify({name:o.name,tags:o.tags})}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).then(n=>n).catch(n=>(t=n.detail,console.log(n),null));if(t)throw t;return e},w=async(r,a)=>{let o=null;const t=await fetch(`${i}/documents/name/${a}/delete`,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${r}`}}).then(async e=>{if(!e.ok)throw await e.json();return e.json()}).then(e=>e).catch(e=>(o=e.detail,console.log(e),null));if(o)throw o;return t};export{u as c,w as d,p as g,y as t,d as u};
