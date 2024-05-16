import{n as s}from"./index.d5e8a435.js";const h=async(a,n)=>{let o=null;const t=await fetch(`${s}/auths/signin`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,password:n})}).then(async e=>{if(!e.ok)throw await e.json();return e.json()}).catch(e=>(console.log(e),o=e.detail,null));if(o)throw o;return t},u=async(a,n,o,t)=>{let e=null;const r=await fetch(`${s}/auths/signup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,email:n,password:o,profile_image_url:t})}).then(async i=>{if(!i.ok)throw await i.json();return i.json()}).catch(i=>(console.log(i),e=i.detail,null));if(e)throw e;return r},p=async(a,n,o,t,e="pending")=>{let r=null;const i=await fetch(`${s}/auths/add`,{method:"POST",headers:{"Content-Type":"application/json",...a&&{authorization:`Bearer ${a}`}},body:JSON.stringify({name:n,email:o,password:t,role:e})}).then(async l=>{if(!l.ok)throw await l.json();return l.json()}).catch(l=>(console.log(l),r=l.detail,null));if(r)throw r;return i},d=async(a,n,o)=>{let t=null;const e=await fetch(`${s}/auths/update/profile`,{method:"POST",headers:{"Content-Type":"application/json",...a&&{authorization:`Bearer ${a}`}},body:JSON.stringify({name:n,profile_image_url:o})}).then(async r=>{if(!r.ok)throw await r.json();return r.json()}).catch(r=>(console.log(r),t=r.detail,null));if(t)throw t;return e},y=async(a,n,o)=>{let t=null;const e=await fetch(`${s}/auths/update/password`,{method:"POST",headers:{"Content-Type":"application/json",...a&&{authorization:`Bearer ${a}`}},body:JSON.stringify({password:n,new_password:o})}).then(async r=>{if(!r.ok)throw await r.json();return r.json()}).catch(r=>(console.log(r),t=r.detail,null));if(t)throw t;return e},w=async a=>{let n=null;const o=await fetch(`${s}/auths/signup/enabled`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),n=t.detail,null));if(n)throw n;return o},f=async a=>{let n=null;const o=await fetch(`${s}/auths/signup/user/role`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),n=t.detail,null));if(n)throw n;return o},g=async(a,n)=>{let o=null;const t=await fetch(`${s}/auths/signup/user/role`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({role:n})}).then(async e=>{if(!e.ok)throw await e.json();return e.json()}).catch(e=>(console.log(e),o=e.detail,null));if(o)throw o;return t},j=async a=>{let n=null;const o=await fetch(`${s}/auths/signup/enabled/toggle`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),n=t.detail,null));if(n)throw n;return o},T=async a=>{let n=null;const o=await fetch(`${s}/auths/token/expires`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),n=t.detail,null));if(n)throw n;return o},$=async(a,n)=>{let o=null;const t=await fetch(`${s}/auths/token/expires/update`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({duration:n})}).then(async e=>{if(!e.ok)throw await e.json();return e.json()}).catch(e=>(console.log(e),o=e.detail,null));if(o)throw o;return t},S=async a=>{let n=null;const o=await fetch(`${s}/auths/api_key`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),n=t.detail,null));if(n)throw n;return o.api_key},k=async a=>{let n=null;const o=await fetch(`${s}/auths/api_key`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),n=t.detail,null));if(n)throw n;return o.api_key};export{d as a,w as b,S as c,f as d,T as e,g as f,k as g,$ as h,p as i,h as j,u as k,j as t,y as u};