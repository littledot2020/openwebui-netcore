import{s as st,a as Be,e as He,M as nt,d as K,c as Le,i as Ee,w as G,P as at,o as lt,p as F,f as Se,g as Me,h as Ie,j as re,r as ke,u as rt,Y,t as P}from"../chunks/scheduler.7238b518.js";import{S as it,i as ct,a as ie,t as he,c as ut,f as z,b as Ne,d as Pe,m as Ae,e as Te,g as ft}from"../chunks/index.5768aeba.js";import{g as pt}from"../chunks/globals.7f7f1b26.js";import{a as B}from"../chunks/Toaster.svelte_svelte_type_style_lang.93775e0f.js";import{g as ve}from"../chunks/navigation.571c398a.js";import{p as dt}from"../chunks/stores.54350edb.js";import{s as De,e as Ce,m as mt,j as gt,W as ht,f as _t,c as wt,b as me,a as Je,L as qe,O as je,l as yt}from"../chunks/index.e32116ac.js";import{v as We,s as bt,a as Fe,n as St,o as Mt,p as It}from"../chunks/index.fe6b9b61.js";import{h as kt,c as Ve}from"../chunks/index.d9cb14a2.js";import{c as vt,b as ge,u as Ue,i as Ct,m as Et}from"../chunks/index.cdf12964.js";import{N as Ot,M as Nt,c as Pt}from"../chunks/index.1b77b317.js";import{M as At}from"../chunks/Messages.56e8619b.js";const{document:Re}=pt;function Ge(o){var we;let b,t,s,h,u,p,_,A,k,te,oe,se,$,T,g,v,L,ee,S,H,U,ce;function D(a){o[28](a)}function ue(a){o[29](a)}let Q={title:o[11],chat:o[10],shareEnabled:o[14].length>0,initNewChat:o[27]};o[0]!==void 0&&(Q.selectedModels=o[0]),o[6]!==void 0&&(Q.showModelSelector=o[6]),t=new Ot({props:Q}),F.push(()=>z(t,"selectedModels",D)),F.push(()=>z(t,"showModelSelector",ue));function q(a){o[30](a)}function i(a){o[31](a)}function r(a){o[32](a)}let ne={chatId:o[15],selectedModels:o[0],selectedModelfiles:o[9],processing:Ut,bottomPadding:o[13].length>0,sendPrompt:o[21],continueGeneration:o[24],regenerateResponse:o[23]};o[1]!==void 0&&(ne.history=o[1]),o[14]!==void 0&&(ne.messages=o[14]),o[3]!==void 0&&(ne.autoScroll=o[3]),k=new At({props:ne}),F.push(()=>z(k,"history",q)),F.push(()=>z(k,"messages",i)),F.push(()=>z(k,"autoScroll",r));function j(a){o[35](a)}function Oe(a){o[36](a)}function fe(a){o[37](a)}function _e(a){o[38](a)}let X={suggestionPrompts:((we=o[8])==null?void 0:we.suggestionPrompts)??o[18].default_prompt_suggestions,messages:o[14],submitPrompt:o[20],stopResponse:o[22]};return o[13]!==void 0&&(X.files=o[13]),o[12]!==void 0&&(X.prompt=o[12]),o[3]!==void 0&&(X.autoScroll=o[3]),o[7]!==void 0&&(X.selectedModel=o[7]),g=new Nt({props:X}),F.push(()=>z(g,"files",j)),F.push(()=>z(g,"prompt",Oe)),F.push(()=>z(g,"autoScroll",fe)),F.push(()=>z(g,"selectedModel",_e)),{c(){b=Se("div"),Ne(t.$$.fragment),u=Be(),p=Se("div"),_=Se("div"),A=Se("div"),Ne(k.$$.fragment),T=Be(),Ne(g.$$.fragment),this.h()},l(a){b=Me(a,"DIV",{class:!0});var d=Ie(b);Pe(t.$$.fragment,d),u=Le(d),p=Me(d,"DIV",{class:!0});var E=Ie(p);_=Me(E,"DIV",{class:!0,id:!0});var C=Ie(_);A=Me(C,"DIV",{class:!0});var R=Ie(A);Pe(k.$$.fragment,R),R.forEach(K),C.forEach(K),E.forEach(K),d.forEach(K),T=Le(a),Pe(g.$$.fragment,a),this.h()},h(){re(A,"class","h-full w-full flex flex-col py-4"),re(_,"class","pb-2.5 flex flex-col justify-between w-full flex-auto overflow-auto h-0 max-w-full"),re(_,"id","messages-container"),re(p,"class","flex flex-col flex-auto"),re(b,"class",$="min-h-screen max-h-screen "+(o[17]?"lg:max-w-[calc(100%-260px)]":"")+" w-full max-w-full flex flex-col")},m(a,d){Ee(a,b,d),Ae(t,b,null),ke(b,u),ke(b,p),ke(p,_),ke(_,A),Ae(k,A,null),o[33](_),Ee(a,T,d),Ae(g,a,d),H=!0,U||(ce=rt(_,"scroll",o[34]),U=!0)},p(a,d){var ye;const E={};d[0]&2048&&(E.title=a[11]),d[0]&1024&&(E.chat=a[10]),d[0]&16384&&(E.shareEnabled=a[14].length>0),d[0]&32&&(E.initNewChat=a[27]),!s&&d[0]&1&&(s=!0,E.selectedModels=a[0],Y(()=>s=!1)),!h&&d[0]&64&&(h=!0,E.showModelSelector=a[6],Y(()=>h=!1)),t.$set(E);const C={};d[0]&32768&&(C.chatId=a[15]),d[0]&1&&(C.selectedModels=a[0]),d[0]&512&&(C.selectedModelfiles=a[9]),d[0]&8192&&(C.bottomPadding=a[13].length>0),!te&&d[0]&2&&(te=!0,C.history=a[1],Y(()=>te=!1)),!oe&&d[0]&16384&&(oe=!0,C.messages=a[14],Y(()=>oe=!1)),!se&&d[0]&8&&(se=!0,C.autoScroll=a[3],Y(()=>se=!1)),k.$set(C),(!H||d[0]&131072&&$!==($="min-h-screen max-h-screen "+(a[17]?"lg:max-w-[calc(100%-260px)]":"")+" w-full max-w-full flex flex-col"))&&re(b,"class",$);const R={};d[0]&262400&&(R.suggestionPrompts=((ye=a[8])==null?void 0:ye.suggestionPrompts)??a[18].default_prompt_suggestions),d[0]&16384&&(R.messages=a[14]),!v&&d[0]&8192&&(v=!0,R.files=a[13],Y(()=>v=!1)),!L&&d[0]&4096&&(L=!0,R.prompt=a[12],Y(()=>L=!1)),!ee&&d[0]&8&&(ee=!0,R.autoScroll=a[3],Y(()=>ee=!1)),!S&&d[0]&128&&(S=!0,R.selectedModel=a[7],Y(()=>S=!1)),g.$set(R)},i(a){H||(ie(t.$$.fragment,a),ie(k.$$.fragment,a),ie(g.$$.fragment,a),H=!0)},o(a){he(t.$$.fragment,a),he(k.$$.fragment,a),he(g.$$.fragment,a),H=!1},d(a){a&&(K(b),K(T)),Te(t),Te(k),o[33](null),Te(g,a),U=!1,ce()}}}function Tt(o){let b,t,s,h;Re.title=b=`\r
		`+(o[11]?`${o[11].length>30?`${o[11].slice(0,30)}...`:o[11]} | ${o[16]}`:`${o[16]}`)+`\r
	`;let u=o[2]&&Ge(o);return{c(){t=Be(),u&&u.c(),s=He()},l(p){nt("svelte-1123lr8",Re.head).forEach(K),t=Le(p),u&&u.l(p),s=He()},m(p,_){Ee(p,t,_),u&&u.m(p,_),Ee(p,s,_),h=!0},p(p,_){(!h||_[0]&67584)&&b!==(b=`\r
		`+(p[11]?`${p[11].length>30?`${p[11].slice(0,30)}...`:p[11]} | ${p[16]}`:`${p[16]}`)+`\r
	`)&&(Re.title=b),p[2]?u?(u.p(p,_),_[0]&4&&ie(u,1)):(u=Ge(p),u.c(),ie(u,1),u.m(s.parentNode,s)):u&&(ft(),he(u,1,1,()=>{u=null}),ut())},i(p){h||(ie(u),h=!0)},o(p){he(u),h=!1},d(p){p&&(K(t),K(s)),u&&u.d(p)}}}let Ut="";function Rt(o,b,t){let s,h,u,p,_,A,k,te,oe;G(o,De,e=>t(41,s=e)),G(o,Ce,e=>t(15,h=e)),G(o,mt,e=>t(43,p=e)),G(o,dt,e=>t(25,_=e)),G(o,gt,e=>t(26,A=e)),G(o,ht,e=>t(16,k=e)),G(o,_t,e=>t(17,te=e)),G(o,wt,e=>t(18,oe=e));const se=at("i18n");G(o,se,e=>t(42,u=e));let $=!1,T=!1,g=!0,v,L=null,ee=!0,S=[""],H="",U=null,ce={},D=null,ue="",Q="",q=[],i=[],r={messages:{},currentId:null};const ne=async()=>{if(await Ce.set(_.params.id),t(10,D=await Ct(localStorage.token,h).catch(async e=>(await ve("/"),null))),D){await R();const e=D.chat;if(e){console.log(e),t(0,S=((e==null?void 0:e.models)??void 0)!==void 0?e.models:[e.models??""]),t(1,r=((e==null?void 0:e.history)??void 0)!==void 0?e.history:It(e.messages)),t(11,ue=e.title);let c=JSON.parse(localStorage.getItem("settings")??"{}");return await De.set({...c,system:e.system??c.system,options:e.options??c.options}),t(3,g=!0),await P(),i.length>0&&t(1,r.messages[i.at(-1).id].done=!0,r),await P(),!0}else return null}},j=async()=>{await P(),v&&t(4,v.scrollTop=v.scrollHeight,v)},Oe=async(e,c=null)=>{if(console.log("submitPrompt",h),S.includes(""))B.error(u.t("Model not selected"));else if(i.length!=0&&i.at(-1).done!=!0)console.log("wait");else if(q.length>0&&q.filter(m=>m.upload_status===!1).length>0)B.error("Oops! Hold tight! Your files are still in the processing oven. We're cooking them up to perfection. Please be patient and we'll let you know once they're ready.");else{document.getElementById("chat-textarea").style.height="";let m=We(),y={id:m,parentId:i.length!==0?i.at(-1).id:null,childrenIds:[],role:"user",user:c??void 0,content:e,files:q.length>0?q:void 0,timestamp:Math.floor(Date.now()/1e3)};t(1,r.messages[m]=y,r),t(1,r.currentId=m,r),i.length!==0&&r.messages[i.at(-1).id].childrenIds.push(m),await P(),i.length==1&&(s.saveChatHistory??!0?(t(10,D=await vt(localStorage.token,{id:h,title:u.t("New Chat"),models:S,system:s.system??void 0,options:{...s.options??{}},messages:i,history:r,timestamp:Date.now()})),await me.set(await ge(localStorage.token)),await Ce.set(D.id)):await Ce.set("local"),await P()),t(12,Q=""),t(13,q=[]),await fe(e,m)}},fe=async(e,c)=>{const m=JSON.parse(JSON.stringify(h));await Promise.all((H!==""?[H.id]:S).map(async y=>{const l=p.filter(w=>w.id===y).at(0);if(l){let w=We(),M={parentId:c,id:w,childrenIds:[],role:"assistant",content:"",model:l.id,timestamp:Math.floor(Date.now()/1e3)};t(1,r.messages[w]=M,r),t(1,r.currentId=w,r),c!==null&&t(1,r.messages[c].childrenIds=[...r.messages[c].childrenIds,w],r),l!=null&&l.external?await X(l,e,w,m):l&&await _e(l,e,w,m)}else B.error(u.t("Model {{modelId}} not found",{modelId:y}))})),await me.set(await ge(localStorage.token))},_e=async(e,c,m,y)=>{var V,pe;e=e.id;const l=r.messages[m];await P(),j();const w=[s.system?{role:"system",content:s.system}:void 0,...i].filter(f=>f).map((f,O,le)=>{var n;const J={role:f.role,content:le.length-2!==O?f.content:(f==null?void 0:f.raContent)??f.content},W=(n=f.files)==null?void 0:n.filter(N=>N.type==="image").map(N=>N.url.slice(N.url.indexOf(",")+1));return W&&W.length>0&&f.role==="user"&&(J.images=W),J});let M=-1;w.forEach((f,O)=>{f.images&&(M=O)}),w.forEach((f,O)=>{O!==M&&delete f.images});const Z=i.filter(f=>(f==null?void 0:f.files)??null).map(f=>f.files.filter(O=>O.type==="doc"||O.type==="collection")).flat(1),[I,ae]=await kt(localStorage.token,{model:e,messages:w,options:{...s.options??{},stop:((V=s==null?void 0:s.options)==null?void 0:V.stop)??void 0?s.options.stop.map(f=>decodeURIComponent(JSON.parse('"'+f.replace(/\"/g,'\\"')+'"'))):void 0},format:s.requestFormat??void 0,keep_alive:s.keepAlive??void 0,docs:Z.length>0?Z:void 0,citations:Z.length>0});if(I&&I.ok){console.log("controller",ae);const f=I.body.pipeThrough(new TextDecoderStream).pipeThrough(bt(`
`)).getReader();for(;;){const{value:O,done:le}=await f.read();if(le||T||y!==h){l.done=!0,t(14,i),t(1,r),T&&(ae.abort("User: Stop Response"),await Ve(localStorage.token,L)),t(5,L=null);break}try{let J=O.split(`
`);for(const W of J)if(W!==""){console.log(W);let n=JSON.parse(W);if("citations"in n){l.citations=n.citations;continue}if("detail"in n)throw n;if("id"in n)console.log(n),t(5,L=n.id);else if(n.done==!1){if(l.content==""&&n.message.content==`
`)continue;l.content+=n.message.content,t(14,i),t(1,r)}else{if(l.done=!0,l.content==""&&(l.error=!0,l.content="Oops! No text generated from Ollama, Please try again."),l.context=n.context??null,l.info={total_duration:n.total_duration,load_duration:n.load_duration,sample_count:n.sample_count,sample_duration:n.sample_duration,prompt_eval_count:n.prompt_eval_count,prompt_eval_duration:n.prompt_eval_duration,eval_count:n.eval_count,eval_duration:n.eval_duration},t(14,i),t(1,r),s.notificationEnabled&&!document.hasFocus()){const N=new Notification(U?`${U.title.charAt(0).toUpperCase()+U.title.slice(1)}`:`${e}`,{body:l.content,icon:(U==null?void 0:U.imageUrl)??`${Je}/static/favicon.png`})}s.responseAutoCopy&&Fe(l.content),s.responseAutoPlayback&&(await P(),(pe=document.getElementById(`speak-button-${l.id}`))==null||pe.click())}}}catch(J){console.log(J),"detail"in J&&B.error(J.detail);break}g&&j()}h==y&&(s.saveChatHistory??!0)&&(t(10,D=await Ue(localStorage.token,y,{messages:i,history:r})),await me.set(await ge(localStorage.token)))}else{if(I!==null){const f=await I.json();console.log(f),"detail"in f?(B.error(f.detail),l.content=f.detail):(B.error(f.error),l.content=f.error)}else B.error(u.t("Uh-oh! There was an issue connecting to {{provider}}.",{provider:"Ollama"})),l.content=u.t("Uh-oh! There was an issue connecting to {{provider}}.",{provider:"Ollama"});l.error=!0,l.content=u.t("Uh-oh! There was an issue connecting to {{provider}}.",{provider:"Ollama"}),l.done=!0,t(14,i),t(1,r)}if(T=!1,await P(),g&&j(),i.length==2&&i.at(1).content!==""){window.history.replaceState(r.state,"",`/c/${y}`);const f=await E(c);await C(y,f)}},X=async(e,c,m,y)=>{var I,ae,V,pe,f,O,le,J,W;const l=r.messages[m],w=i.filter(n=>(n==null?void 0:n.files)??null).map(n=>n.files.filter(N=>N.type==="doc"||N.type==="collection")).flat(1);console.log(w),j();const[M,Z]=await St(localStorage.token,{model:e.id,stream:!0,messages:[s.system?{role:"system",content:s.system}:void 0,...i].filter(n=>n).map((n,N,de)=>{var be;return{role:n.role,...((be=n.files)==null?void 0:be.filter(x=>x.type==="image").length)>0&&n.role==="user"?{content:[{type:"text",text:de.length-1!==N?n.content:(n==null?void 0:n.raContent)??n.content},...n.files.filter(x=>x.type==="image").map(x=>({type:"image_url",image_url:{url:x.url}}))]}:{content:de.length-1!==N?n.content:(n==null?void 0:n.raContent)??n.content}}}),seed:((I=s==null?void 0:s.options)==null?void 0:I.seed)??void 0,stop:((ae=s==null?void 0:s.options)==null?void 0:ae.stop)??void 0?s.options.stop.map(n=>decodeURIComponent(JSON.parse('"'+n.replace(/\"/g,'\\"')+'"'))):void 0,temperature:((V=s==null?void 0:s.options)==null?void 0:V.temperature)??void 0,top_p:((pe=s==null?void 0:s.options)==null?void 0:pe.top_p)??void 0,num_ctx:((f=s==null?void 0:s.options)==null?void 0:f.num_ctx)??void 0,frequency_penalty:((O=s==null?void 0:s.options)==null?void 0:O.repeat_penalty)??void 0,max_tokens:((le=s==null?void 0:s.options)==null?void 0:le.num_predict)??void 0,docs:w.length>0?w:void 0,citations:w.length>0},((J=e==null?void 0:e.source)==null?void 0:J.toLowerCase())==="litellm"?`${qe}/v1`:`${je}`);if(await P(),j(),M&&M.ok&&M.body){const n=await Pt(M.body,s.splitLargeChunks);for await(const N of n){const{value:de,done:be,citations:x}=N;if(be||T||y!==h){l.done=!0,t(14,i),t(1,r),T&&Z.abort("User: Stop Response");break}if(x){l.citations=x;continue}l.content==""&&de==`
`||(l.content+=de,t(14,i),t(1,r),s.notificationEnabled&&!document.hasFocus()&&new Notification(`OpenAI ${e}`,{body:l.content,icon:`${Je}/static/favicon.png`}),s.responseAutoCopy&&Fe(l.content),s.responseAutoPlayback&&(await P(),(W=document.getElementById(`speak-button-${l.id}`))==null||W.click()),g&&j())}h==y&&(s.saveChatHistory??!0)&&(t(10,D=await Ue(localStorage.token,y,{messages:i,history:r})),await me.set(await ge(localStorage.token)))}else{if(M!==null){const n=await M.json();console.log(n),"detail"in n?(B.error(n.detail),l.content=n.detail):"message"in n.error?(B.error(n.error.message),l.content=n.error.message):(B.error(n.error),l.content=n.error)}else B.error(u.t("Uh-oh! There was an issue connecting to {{provider}}.",{provider:e.name??e.id})),l.content=u.t("Uh-oh! There was an issue connecting to {{provider}}.",{provider:e.name??e.id});l.error=!0,l.content=u.t("Uh-oh! There was an issue connecting to {{provider}}.",{provider:e.name??e.id}),l.done=!0,t(14,i),t(1,r)}if(T=!1,await P(),g&&j(),i.length==2){window.history.replaceState(r.state,"",`/c/${y}`);const n=await E(c);await C(y,n)}},we=()=>{T=!0,console.log("stopResponse")},a=async()=>{if(console.log("regenerateResponse"),i.length!=0&&i.at(-1).done==!0){i.splice(i.length-1,1),t(14,i),t(1,r);let e=i.at(-1),c=e.content;await fe(c,e.id)}},d=async()=>{console.log("continueGeneration");const e=JSON.parse(JSON.stringify(h));if(i.length!=0&&i.at(-1).done==!0){const c=r.messages[r.currentId];c.done=!1,await P();const m=p.filter(y=>y.id===c.model).at(0);m&&(m!=null&&m.external?await X(m,r.messages[c.parentId].content,c.id,e):await _e(m,r.messages[c.parentId].content,c.id,e))}else B.error(u.t("Model {{modelId}} not found",{modelId}))},E=async e=>{var c,m,y,l,w;if(((c=s==null?void 0:s.title)==null?void 0:c.auto)??!0){const M=p.find(V=>V.id===S[0]),Z=(M==null?void 0:M.external)??!1?((m=s==null?void 0:s.title)==null?void 0:m.modelExternal)??S[0]:((y=s==null?void 0:s.title)==null?void 0:y.model)??S[0],I=p.find(V=>V.id===Z);return console.log(I),await Mt(localStorage.token,((l=s==null?void 0:s.title)==null?void 0:l.prompt)??u.t("Create a concise, 3-5 word phrase as a header for the following query, strictly adhering to the 3-5 word limit and avoiding the use of the word 'title':")+" {{prompt}}",Z,e,(I==null?void 0:I.external)??!1?((w=I==null?void 0:I.source)==null?void 0:w.toLowerCase())==="litellm"?`${qe}/v1`:`${je}`:`${yt}/v1`)}else return`${e}`},C=async(e,c)=>{e===h&&t(11,ue=c),(s.saveChatHistory??!0)&&(t(10,D=await Ue(localStorage.token,e,{title:c})),await me.set(await ge(localStorage.token)))},R=async()=>await Et(localStorage.token,h).catch(async e=>[]);lt(async()=>{(s.saveChatHistory??!0)||await ve("/")});const ye=async()=>{L!==null&&(await Ve(localStorage.token,L),t(5,L=null)),ve("/")};function Ye(e){S=e,t(0,S)}function ze(e){ee=e,t(6,ee)}function Ke(e){r=e,t(1,r)}function Qe(e){i=e,t(14,i),t(1,r)}function Xe(e){g=e,t(3,g)}function Ze(e){F[e?"unshift":"push"](()=>{v=e,t(4,v)})}const xe=e=>{t(3,g=v.scrollHeight-v.scrollTop<=v.clientHeight+5)};function $e(e){q=e,t(13,q)}function et(e){Q=e,t(12,Q)}function tt(e){g=e,t(3,g)}function ot(e){H=e,t(7,H)}return o.$$.update=()=>{if(o.$$.dirty[0]&67108865&&t(8,U=S.length===1&&A.filter(e=>e.tagName===S[0]).length>0?A.filter(e=>e.tagName===S[0])[0]:null),o.$$.dirty[0]&67108865&&t(9,ce=S.reduce((e,c,m,y)=>{var w;const l=((w=A.filter(M=>M.tagName===c))==null?void 0:w.at(0))??void 0;return{...e,...l&&{[c]:l}}},{})),o.$$.dirty[0]&2)if(r.currentId!==null){let e=[],c=r.messages[r.currentId];for(;c!==null;)e.unshift({...c}),c=c.parentId!==null?r.messages[c.parentId]:null;t(14,i=e)}else t(14,i=[]);o.$$.dirty[0]&33554432&&_.params.id&&(async()=>{if(await ne()){await P(),t(2,$=!0),window.setTimeout(()=>j(),0);const e=document.getElementById("chat-textarea");e==null||e.focus()}else await ve("/")})()},[S,r,$,g,v,L,ee,H,U,ce,D,ue,Q,q,i,h,k,te,oe,se,Oe,fe,we,a,d,_,A,ye,Ye,ze,Ke,Qe,Xe,Ze,xe,$e,et,tt,ot]}class zt extends it{constructor(b){super(),ct(this,b,Rt,Tt,st,{},null,[-1,-1])}}export{zt as component};
