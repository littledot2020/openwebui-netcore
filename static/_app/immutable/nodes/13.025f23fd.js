import{s as sa,f as l,l as n,a as m,g as s,h as c,m as i,d as o,c as f,R as Ct,j as e,i as la,r as t,Q as it,u as Vt,O as ra,n as b,C as $e,v as oa,w as He,P as na,o as ia,t as da}from"../chunks/scheduler.7238b518.js";import{S as ua,i as ca}from"../chunks/index.5768aeba.js";import{a as ta}from"../chunks/Toaster.svelte_svelte_type_style_lang.93775e0f.js";import{g as Oe}from"../chunks/navigation.a554c91f.js";import{p as ea}from"../chunks/index.e32116ac.js";import{u as va,g as ma}from"../chunks/index.682ed774.js";import{p as fa}from"../chunks/stores.cdfa45fa.js";function aa(a){let h,v=`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><style>.spinner_ajPY {
											transform-origin: center;
											animation: spinner_AtaB 0.75s infinite linear;
										}
										@keyframes spinner_AtaB {
											100% {
												transform: rotate(360deg);
											}
										}
									</style><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"></path><path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" class="spinner_ajPY"></path></svg>`;return{c(){h=l("div"),h.innerHTML=v,this.h()},l(p){h=s(p,"DIV",{class:!0,"data-svelte-h":!0}),Ct(h)!=="svelte-1gf8wym"&&(h.innerHTML=v),this.h()},h(){e(h,"class","ml-1.5 self-center")},m(p,V){la(p,h,V)},d(p){p&&o(h)}}}function pa(a){let h,v,p,V,S=a[4].t("My Prompts")+"",R,Z,y,_,N='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd"></path></svg>',K,H,F=a[4].t("Back")+"",$,dt,tt,At,d,E,W,ut=a[4].t("Title")+"",Pt,ee,ae,ct,C,Tt,le,P,Y,vt=a[4].t("Command")+"",Mt,se,re,O,Q,Ue="/",oe,A,ne,k,mt=a[4].t("Only")+"",St,ie,et,ft=a[4].t("alphanumeric characters and hyphens")+"",Bt,de,pt=a[4].t("are allowed - Activate this command by typing")+"",Nt,ue,U,ce,Ht,ve,me,ht=a[4].t("to chat input.")+"",Ot,fe,j,at,X,gt=a[4].t("Prompt Content")+"",Ut,pe,he,T,_t,D,jt,ge,g,_e,bt=a[4].t("Format your variables using square brackets like this:")+"",qt,be,q,ye,yt=a[4].t("variable")+"",zt,we,ke,wt=a[4].t("Make sure to enclose them with")+"",Lt,xe,G,je="'['",Ee,kt=a[4].t("and")+"",Rt,Ie,J,qe="']'",De,Ve,B,xt=a[4].t("Utilize")+"",Zt,lt,ze=" {{CLIPBOARD}}",Ce,Ae,Et=a[4].t("variable to have them replaced with clipboard content.")+"",Ft,Pe,st,I,rt,It=a[4].t("Save & Update")+"",Wt,Te,Yt,Me,Le,w=a[0]&&aa();return{c(){h=l("div"),v=l("div"),p=l("div"),V=l("div"),R=n(S),Z=m(),y=l("button"),_=l("div"),_.innerHTML=N,K=m(),H=l("div"),$=n(F),dt=m(),tt=l("hr"),At=m(),d=l("form"),E=l("div"),W=l("div"),Pt=n(ut),ee=n("*"),ae=m(),ct=l("div"),C=l("input"),le=m(),P=l("div"),Y=l("div"),Mt=n(vt),se=n("*"),re=m(),O=l("div"),Q=l("div"),Q.textContent=Ue,oe=m(),A=l("input"),ne=m(),k=l("div"),St=n(mt),ie=m(),et=l("span"),Bt=n(ft),de=m(),Nt=n(pt),ue=n(' "'),U=l("span"),ce=n("/"),Ht=n(a[2]),ve=m(),me=n(`"  
						`),Ot=n(ht),fe=m(),j=l("div"),at=l("div"),X=l("div"),Ut=n(gt),pe=n("*"),he=m(),T=l("div"),_t=l("div"),D=l("textarea"),ge=m(),g=l("div"),_e=n("ⓘ "),qt=n(bt),be=n(" "),q=l("span"),ye=n("["),zt=n(yt),we=n("]"),ke=n(`.
							`),Lt=n(wt),xe=m(),G=l("span"),G.textContent=je,Ee=m(),Rt=n(kt),Ie=m(),J=l("span"),J.textContent=qe,De=n("."),Ve=m(),B=l("div"),Zt=n(xt),lt=l("span"),Ce=n(ze),Ae=m(),Ft=n(Et),Pe=m(),st=l("div"),I=l("button"),rt=l("div"),Wt=n(It),Te=m(),w&&w.c(),this.h()},l(r){h=s(r,"DIV",{class:!0});var u=c(h);v=s(u,"DIV",{class:!0});var Re=c(v);p=s(Re,"DIV",{class:!0});var z=c(p);V=s(z,"DIV",{class:!0});var Ze=c(V);R=i(Ze,S),Ze.forEach(o),Z=f(z),y=s(z,"BUTTON",{class:!0});var Qt=c(y);_=s(Qt,"DIV",{class:!0,"data-svelte-h":!0}),Ct(_)!=="svelte-1o1oixl"&&(_.innerHTML=N),K=f(Qt),H=s(Qt,"DIV",{class:!0});var Fe=c(H);$=i(Fe,F),Fe.forEach(o),Qt.forEach(o),dt=f(z),tt=s(z,"HR",{class:!0}),At=f(z),d=s(z,"FORM",{class:!0});var L=c(d);E=s(L,"DIV",{class:!0});var Xt=c(E);W=s(Xt,"DIV",{class:!0});var Se=c(W);Pt=i(Se,ut),ee=i(Se,"*"),Se.forEach(o),ae=f(Xt),ct=s(Xt,"DIV",{});var We=c(ct);C=s(We,"INPUT",{class:!0,placeholder:!0}),We.forEach(o),Xt.forEach(o),le=f(L),P=s(L,"DIV",{class:!0});var ot=c(P);Y=s(ot,"DIV",{class:!0});var Be=c(Y);Mt=i(Be,vt),se=i(Be,"*"),Be.forEach(o),re=f(ot),O=s(ot,"DIV",{class:!0});var Gt=c(O);Q=s(Gt,"DIV",{class:!0,"data-svelte-h":!0}),Ct(Q)!=="svelte-1rk109"&&(Q.textContent=Ue),oe=f(Gt),A=s(Gt,"INPUT",{class:!0,placeholder:!0}),Gt.forEach(o),ne=f(ot),k=s(ot,"DIV",{class:!0});var M=c(k);St=i(M,mt),ie=f(M),et=s(M,"SPAN",{class:!0});var Ye=c(et);Bt=i(Ye,ft),Ye.forEach(o),de=f(M),Nt=i(M,pt),ue=i(M,' "'),U=s(M,"SPAN",{class:!0});var Jt=c(U);ce=i(Jt,"/"),Ht=i(Jt,a[2]),ve=f(Jt),Jt.forEach(o),me=i(M,`"  
						`),Ot=i(M,ht),M.forEach(o),ot.forEach(o),fe=f(L),j=s(L,"DIV",{class:!0});var Kt=c(j);at=s(Kt,"DIV",{class:!0});var Qe=c(at);X=s(Qe,"DIV",{class:!0});var Ne=c(X);Ut=i(Ne,gt),pe=i(Ne,"*"),Ne.forEach(o),Qe.forEach(o),he=f(Kt),T=s(Kt,"DIV",{class:!0});var nt=c(T);_t=s(nt,"DIV",{});var Xe=c(_t);D=s(Xe,"TEXTAREA",{class:!0,placeholder:!0,rows:!0}),c(D).forEach(o),Xe.forEach(o),ge=f(nt),g=s(nt,"DIV",{class:!0});var x=c(g);_e=i(x,"ⓘ "),qt=i(x,bt),be=i(x," "),q=s(x,"SPAN",{class:!0});var $t=c(q);ye=i($t,"["),zt=i($t,yt),we=i($t,"]"),$t.forEach(o),ke=i(x,`.
							`),Lt=i(x,wt),xe=f(x),G=s(x,"SPAN",{class:!0,"data-svelte-h":!0}),Ct(G)!=="svelte-w4chb6"&&(G.textContent=je),Ee=f(x),Rt=i(x,kt),Ie=f(x),J=s(x,"SPAN",{class:!0,"data-svelte-h":!0}),Ct(J)!=="svelte-589oqk"&&(J.textContent=qe),De=i(x,"."),x.forEach(o),Ve=f(nt),B=s(nt,"DIV",{class:!0});var Dt=c(B);Zt=i(Dt,xt),lt=s(Dt,"SPAN",{class:!0});var Ge=c(lt);Ce=i(Ge,ze),Ge.forEach(o),Ae=f(Dt),Ft=i(Dt,Et),Dt.forEach(o),nt.forEach(o),Kt.forEach(o),Pe=f(L),st=s(L,"DIV",{class:!0});var Je=c(st);I=s(Je,"BUTTON",{class:!0,type:!0});var te=c(I);rt=s(te,"DIV",{class:!0});var Ke=c(rt);Wt=i(Ke,It),Ke.forEach(o),Te=f(te),w&&w.l(te),te.forEach(o),Je.forEach(o),L.forEach(o),z.forEach(o),Re.forEach(o),u.forEach(o),this.h()},h(){e(V,"class","text-2xl font-semibold mb-6"),e(_,"class","self-center"),e(H,"class","self-center font-medium text-sm"),e(y,"class","flex space-x-1"),e(tt,"class","my-3 dark:border-gray-700"),e(W,"class","text-sm font-semibold mb-2"),e(C,"class","px-3 py-1.5 text-sm w-full bg-transparent border dark:border-gray-600 outline-none rounded-lg"),e(C,"placeholder",Tt=a[4].t("Add a short title for this prompt")),C.required=!0,e(E,"class","my-2"),e(Y,"class","text-sm font-semibold mb-2"),e(Q,"class","bg-gray-200 dark:bg-gray-600 font-bold px-3 py-1 border border-r-0 dark:border-gray-600 rounded-l-lg"),e(A,"class","px-3 py-1.5 text-sm w-full bg-transparent border disabled:text-gray-500 dark:border-gray-600 outline-none rounded-r-lg"),e(A,"placeholder","short-summary"),A.disabled=!0,A.required=!0,e(O,"class","flex items-center mb-1"),e(et,"class","text-gray-600 dark:text-gray-300 font-medium"),e(U,"class","text-gray-600 dark:text-gray-300 font-medium"),e(k,"class","text-xs text-gray-400 dark:text-gray-500"),e(P,"class","my-2"),e(X,"class","self-center text-sm font-semibold"),e(at,"class","flex w-full justify-between"),e(D,"class","px-3 py-1.5 text-sm w-full bg-transparent border dark:border-gray-600 outline-none rounded-lg"),e(D,"placeholder",jt=a[4].t("Write a summary in 50 words that summarizes [topic or keyword].")),e(D,"rows","6"),D.required=!0,e(q,"class","text-gray-600 dark:text-gray-300 font-medium"),e(G,"class","text-gray-600 dark:text-gray-300 font-medium"),e(J,"class","text-gray-600 dark:text-gray-300 font-medium"),e(g,"class","text-xs text-gray-400 dark:text-gray-500"),e(lt,"class","text-gray-600 dark:text-gray-300 font-medium"),e(B,"class","text-xs text-gray-400 dark:text-gray-500"),e(T,"class","mt-2"),e(j,"class","my-2"),e(rt,"class","self-center font-medium"),e(I,"class",Yt="text-sm px-3 py-2 transition rounded-xl "+(a[0]?" cursor-not-allowed bg-gray-100 dark:bg-gray-800":" bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800")+" flex"),e(I,"type","submit"),I.disabled=a[0],e(st,"class","my-2 flex justify-end"),e(d,"class","flex flex-col"),e(p,"class","max-w-2xl mx-auto w-full px-3 md:px-0 my-10"),e(v,"class","flex flex-col justify-between w-full overflow-y-auto"),e(h,"class","min-h-screen max-h-[100dvh] w-full flex justify-center dark:text-white")},m(r,u){la(r,h,u),t(h,v),t(v,p),t(p,V),t(V,R),t(p,Z),t(p,y),t(y,_),t(y,K),t(y,H),t(H,$),t(p,dt),t(p,tt),t(p,At),t(p,d),t(d,E),t(E,W),t(W,Pt),t(W,ee),t(E,ae),t(E,ct),t(ct,C),it(C,a[1]),t(d,le),t(d,P),t(P,Y),t(Y,Mt),t(Y,se),t(P,re),t(P,O),t(O,Q),t(O,oe),t(O,A),it(A,a[2]),t(P,ne),t(P,k),t(k,St),t(k,ie),t(k,et),t(et,Bt),t(k,de),t(k,Nt),t(k,ue),t(k,U),t(U,ce),t(U,Ht),t(U,ve),t(k,me),t(k,Ot),t(d,fe),t(d,j),t(j,at),t(at,X),t(X,Ut),t(X,pe),t(j,he),t(j,T),t(T,_t),t(_t,D),it(D,a[3]),t(T,ge),t(T,g),t(g,_e),t(g,qt),t(g,be),t(g,q),t(q,ye),t(q,zt),t(q,we),t(g,ke),t(g,Lt),t(g,xe),t(g,G),t(g,Ee),t(g,Rt),t(g,Ie),t(g,J),t(g,De),t(T,Ve),t(T,B),t(B,Zt),t(B,lt),t(lt,Ce),t(B,Ae),t(B,Ft),t(d,Pe),t(d,st),t(st,I),t(I,rt),t(rt,Wt),t(I,Te),w&&w.m(I,null),Me||(Le=[Vt(y,"click",a[7]),Vt(C,"input",a[8]),Vt(A,"input",a[9]),Vt(D,"input",a[10]),Vt(d,"submit",ra(a[11]))],Me=!0)},p(r,[u]){u&16&&S!==(S=r[4].t("My Prompts")+"")&&b(R,S),u&16&&F!==(F=r[4].t("Back")+"")&&b($,F),u&16&&ut!==(ut=r[4].t("Title")+"")&&b(Pt,ut),u&16&&Tt!==(Tt=r[4].t("Add a short title for this prompt"))&&e(C,"placeholder",Tt),u&2&&C.value!==r[1]&&it(C,r[1]),u&16&&vt!==(vt=r[4].t("Command")+"")&&b(Mt,vt),u&4&&A.value!==r[2]&&it(A,r[2]),u&16&&mt!==(mt=r[4].t("Only")+"")&&b(St,mt),u&16&&ft!==(ft=r[4].t("alphanumeric characters and hyphens")+"")&&b(Bt,ft),u&16&&pt!==(pt=r[4].t("are allowed - Activate this command by typing")+"")&&b(Nt,pt),u&4&&b(Ht,r[2]),u&16&&ht!==(ht=r[4].t("to chat input.")+"")&&b(Ot,ht),u&16&&gt!==(gt=r[4].t("Prompt Content")+"")&&b(Ut,gt),u&16&&jt!==(jt=r[4].t("Write a summary in 50 words that summarizes [topic or keyword]."))&&e(D,"placeholder",jt),u&8&&it(D,r[3]),u&16&&bt!==(bt=r[4].t("Format your variables using square brackets like this:")+"")&&b(qt,bt),u&16&&yt!==(yt=r[4].t("variable")+"")&&b(zt,yt),u&16&&wt!==(wt=r[4].t("Make sure to enclose them with")+"")&&b(Lt,wt),u&16&&kt!==(kt=r[4].t("and")+"")&&b(Rt,kt),u&16&&xt!==(xt=r[4].t("Utilize")+"")&&b(Zt,xt),u&16&&Et!==(Et=r[4].t("variable to have them replaced with clipboard content.")+"")&&b(Ft,Et),u&16&&It!==(It=r[4].t("Save & Update")+"")&&b(Wt,It),r[0]?w||(w=aa(),w.c(),w.m(I,null)):w&&(w.d(1),w=null),u&1&&Yt!==(Yt="text-sm px-3 py-2 transition rounded-xl "+(r[0]?" cursor-not-allowed bg-gray-100 dark:bg-gray-800":" bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800")+" flex")&&e(I,"class",Yt),u&1&&(I.disabled=r[0])},i:$e,o:$e,d(r){r&&o(h),w&&w.d(),Me=!1,oa(Le)}}}function ha(a,h,v){let p,V,S;He(a,ea,d=>v(12,p=d)),He(a,fa,d=>v(13,V=d));const R=na("i18n");He(a,R,d=>v(4,S=d));let Z=!1,y="",_="",N="";const K=async()=>{v(0,Z=!0),H(_)?await va(localStorage.token,_,y,N).catch(E=>(ta.error(E),null))&&(await ea.set(await ma(localStorage.token)),await Oe("/prompts")):ta.error(S.t("Only alphanumeric characters and hyphens are allowed in the command string.")),v(0,Z=!1)},H=d=>/^[a-zA-Z0-9-]+$/.test(d);ia(async()=>{if(v(2,_=V.url.searchParams.get("command")),_){const d=p.filter(E=>E.command===_).at(0);d?(console.log(d),console.log(d.command),v(1,y=d.title),await da(),v(2,_=d.command.slice(1)),v(3,N=d.content)):Oe("/prompts")}else Oe("/prompts")});const F=()=>{history.back()};function $(){y=this.value,v(1,y)}function dt(){_=this.value,v(2,_)}function tt(){N=this.value,v(3,N)}return[Z,y,_,N,S,R,K,F,$,dt,tt,()=>{K()}]}class Ea extends ua{constructor(h){super(),ca(this,h,ha,pa,sa,{})}}export{Ea as component};
