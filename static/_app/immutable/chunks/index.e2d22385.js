import{q as r}from"./index.78134b2e.js";const l=async s=>{let o=null;const a=await fetch(`${r}/auths/auth`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),o=t.detail,null));if(o)throw o;return a},h=async(s,o)=>{let a=null;const t=await fetch(`${r}/auths/signin`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phone:s,password:o})}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).catch(n=>(console.log(n),a=n.detail,null));if(a)throw a;return t},u=async(s,o,a,t)=>{let n=null;const i=await fetch(`${r}/auths/signup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,phone:o,password:a,profile_image_url:t})}).then(async e=>{if(!e.ok)throw await e.json();return e.json()}).catch(e=>(console.log(e),n=e.detail,null));if(n)throw n;return i};export{u as a,l as g,h as u};
