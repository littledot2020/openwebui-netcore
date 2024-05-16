import{s as B,f as b,a as E,z as x,g as T,h as w,c as I,A as H,d as p,j as m,i as y,r as v,u as L,C as A,w as N,X as J,P as W,R as Y,Q as C,K as $,v as ae,l as ee,m as te,n as le,e as P}from"./scheduler.7238b518.js";import{S as M,i as O,b as S,d as U,m as Z,a as q,t as z,e as j}from"./index.5768aeba.js";import{e as D}from"./each.b7dbf2c4.js";import{g as se}from"./index.e32116ac.js";import{a as ne}from"./Toaster.svelte_svelte_type_style_lang.93775e0f.js";function K(n,e,l){const t=n.slice();return t[11]=e[l],t}function Q(n){let e,l,t='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-3 h-3"><path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd"></path></svg>',a,r,s,f,d,h,g,u=D(n[4]),o=[];for(let i=0;i<u.length;i+=1)o[i]=R(K(n,u,i));return{c(){e=b("div"),l=b("button"),l.innerHTML=t,a=E(),r=b("input"),f=E(),d=b("datalist");for(let i=0;i<o.length;i+=1)o[i].c();this.h()},l(i){e=T(i,"DIV",{class:!0});var c=w(e);l=T(c,"BUTTON",{type:!0,"data-svelte-h":!0}),Y(l)!=="svelte-1kxz3ss"&&(l.innerHTML=t),a=I(c),r=T(c,"INPUT",{class:!0,placeholder:!0,list:!0}),f=I(c),d=T(c,"DATALIST",{id:!0});var _=w(d);for(let k=0;k<o.length;k+=1)o[k].l(_);_.forEach(p),c.forEach(p),this.h()},h(){m(l,"type","button"),m(r,"class","pl-2 cursor-pointer self-center text-xs h-fit bg-transparent outline-none line-clamp-1 w-[5.5rem]"),m(r,"placeholder",s=n[3].t("Add a tag")),m(r,"list","tagOptions"),m(d,"id","tagOptions"),m(e,"class","flex items-center")},m(i,c){y(i,e,c),v(e,l),v(e,a),v(e,r),C(r,n[2]),v(e,f),v(e,d);for(let _=0;_<o.length;_+=1)o[_]&&o[_].m(d,null);h||(g=[L(l,"click",n[6]),L(r,"input",n[7]),L(r,"keydown",n[8])],h=!0)},p(i,c){if(c&8&&s!==(s=i[3].t("Add a tag"))&&m(r,"placeholder",s),c&4&&r.value!==i[2]&&C(r,i[2]),c&16){u=D(i[4]);let _;for(_=0;_<u.length;_+=1){const k=K(i,u,_);o[_]?o[_].p(k,c):(o[_]=R(k),o[_].c(),o[_].m(d,null))}for(;_<o.length;_+=1)o[_].d(1);o.length=u.length}},d(i){i&&p(e),$(o,i),h=!1,ae(g)}}}function R(n){let e,l;return{c(){e=b("option"),this.h()},l(t){e=T(t,"OPTION",{}),w(e).forEach(p),this.h()},h(){e.__value=l=n[11].name,C(e,e.__value)},m(t,a){y(t,e,a)},p(t,a){a&16&&l!==(l=t[11].name)&&(e.__value=l,C(e,e.__value))},d(t){t&&p(e)}}}function X(n){let e,l;return{c(){e=b("span"),l=ee(n[0]),this.h()},l(t){e=T(t,"SPAN",{class:!0});var a=w(e);l=te(a,n[0]),a.forEach(p),this.h()},h(){m(e,"class","text-xs pl-1.5 self-center")},m(t,a){y(t,e,a),v(e,l)},p(t,a){a&1&&le(l,t[0])},d(t){t&&p(e)}}}function re(n){let e,l,t,a,r,s,f,d,h,g,u=n[1]&&Q(n),o=n[0]&&!n[1]&&X(n);return{c(){e=b("div"),u&&u.c(),l=E(),t=b("button"),a=b("div"),r=x("svg"),s=x("path"),d=E(),o&&o.c(),this.h()},l(i){e=T(i,"DIV",{class:!0});var c=w(e);u&&u.l(c),l=I(c),t=T(c,"BUTTON",{class:!0,type:!0});var _=w(t);a=T(_,"DIV",{class:!0});var k=w(a);r=H(k,"svg",{xmlns:!0,viewBox:!0,fill:!0,class:!0});var V=w(r);s=H(V,"path",{d:!0}),w(s).forEach(p),V.forEach(p),k.forEach(p),_.forEach(p),d=I(c),o&&o.l(c),c.forEach(p),this.h()},h(){m(s,"d","M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"),m(r,"xmlns","http://www.w3.org/2000/svg"),m(r,"viewBox","0 0 16 16"),m(r,"fill","currentColor"),m(r,"class",f="w-3 h-3 "+(n[1]?"rotate-45":"")+" transition-all transform"),m(a,"class","m-auto self-center"),m(t,"class","cursor-pointer self-center p-0.5 space-x-1 flex h-fit items-center dark:hover:bg-gray-700 rounded-full transition border dark:border-gray-600 border-dashed"),m(t,"type","button"),m(e,"class","flex space-x-1 pl-1.5")},m(i,c){y(i,e,c),u&&u.m(e,null),v(e,l),v(e,t),v(t,a),v(a,r),v(r,s),v(e,d),o&&o.m(e,null),h||(g=L(t,"click",n[9]),h=!0)},p(i,[c]){i[1]?u?u.p(i,c):(u=Q(i),u.c(),u.m(e,l)):u&&(u.d(1),u=null),c&2&&f!==(f="w-3 h-3 "+(i[1]?"rotate-45":"")+" transition-all transform")&&m(r,"class",f),i[0]&&!i[1]?o?o.p(i,c):(o=X(i),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},i:A,o:A,d(i){i&&p(e),u&&u.d(),o&&o.d(),h=!1,g()}}}function ie(n,e,l){let t,a;N(n,se,c=>l(4,a=c));const r=J(),s=W("i18n");N(n,s,c=>l(3,t=c));let{label:f=""}=e,d=!1,h="";const g=async()=>{l(2,h=h.trim()),h!==""?(r("add",h),l(2,h=""),l(1,d=!1)):ne.error(t.t("Invalid Tag"))};function u(){h=this.value,l(2,h)}const o=c=>{c.key==="Enter"&&g()},i=()=>{l(1,d=!d)};return n.$$set=c=>{"label"in c&&l(0,f=c.label)},[f,d,h,t,a,s,g,u,o,i]}class oe extends M{constructor(e){super(),O(this,e,ie,re,B,{label:0})}}function F(n,e,l){const t=n.slice();return t[3]=e[l],t}function G(n){let e,l,t=n[3].name+"",a,r,s,f='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-3 h-3"><path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"></path></svg>',d,h,g;function u(){return n[2](n[3])}return{c(){e=b("div"),l=b("div"),a=ee(t),r=E(),s=b("button"),s.innerHTML=f,d=E(),this.h()},l(o){e=T(o,"DIV",{class:!0});var i=w(e);l=T(i,"DIV",{class:!0});var c=w(l);a=te(c,t),c.forEach(p),r=I(i),s=T(i,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(s)!=="svelte-1uiqlcf"&&(s.innerHTML=f),d=I(i),i.forEach(p),this.h()},h(){m(l,"class","text-[0.7rem] font-medium self-center line-clamp-1"),m(s,"class","m-auto self-center cursor-pointer"),m(e,"class","px-2 py-0.5 space-x-1 flex h-fit items-center rounded-full transition border dark:border-gray-800 dark:text-white")},m(o,i){y(o,e,i),v(e,l),v(l,a),v(e,r),v(e,s),v(e,d),h||(g=L(s,"click",u),h=!0)},p(o,i){n=o,i&1&&t!==(t=n[3].name+"")&&le(a,t)},d(o){o&&p(e),h=!1,g()}}}function ce(n){let e,l=D(n[0]),t=[];for(let a=0;a<l.length;a+=1)t[a]=G(F(n,l,a));return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=P()},l(a){for(let r=0;r<t.length;r+=1)t[r].l(a);e=P()},m(a,r){for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(a,r);y(a,e,r)},p(a,[r]){if(r&3){l=D(a[0]);let s;for(s=0;s<l.length;s+=1){const f=F(a,l,s);t[s]?t[s].p(f,r):(t[s]=G(f),t[s].c(),t[s].m(e.parentNode,e))}for(;s<t.length;s+=1)t[s].d(1);t.length=l.length}},i:A,o:A,d(a){a&&p(e),$(t,a)}}}function fe(n,e,l){const t=J();let{tags:a=[]}=e;const r=s=>{t("delete",s.name)};return n.$$set=s=>{"tags"in s&&l(0,a=s.tags)},[a,t,r]}class ue extends M{constructor(e){super(),O(this,e,fe,ce,B,{tags:0})}}function de(n){let e,l,t,a,r;return l=new ue({props:{tags:n[0]}}),l.$on("delete",n[5]),a=new oe({props:{label:n[0].length==0?n[3].t("Add Tags"):""}}),a.$on("add",n[6]),{c(){e=b("div"),S(l.$$.fragment),t=E(),S(a.$$.fragment),this.h()},l(s){e=T(s,"DIV",{class:!0});var f=w(e);U(l.$$.fragment,f),t=I(f),U(a.$$.fragment,f),f.forEach(p),this.h()},h(){m(e,"class","flex flex-row flex-wrap gap-0.5 line-clamp-1")},m(s,f){y(s,e,f),Z(l,e,null),v(e,t),Z(a,e,null),r=!0},p(s,[f]){const d={};f&1&&(d.tags=s[0]),l.$set(d);const h={};f&9&&(h.label=s[0].length==0?s[3].t("Add Tags"):""),a.$set(h)},i(s){r||(q(l.$$.fragment,s),q(a.$$.fragment,s),r=!0)},o(s){z(l.$$.fragment,s),z(a.$$.fragment,s),r=!1},d(s){s&&p(e),j(l),j(a)}}}function he(n,e,l){let t;const a=W("i18n");N(n,a,g=>l(3,t=g));let{tags:r=[]}=e,{deleteTag:s}=e,{addTag:f}=e;const d=g=>{s(g.detail)},h=g=>{f(g.detail)};return n.$$set=g=>{"tags"in g&&l(0,r=g.tags),"deleteTag"in g&&l(1,s=g.deleteTag),"addTag"in g&&l(2,f=g.addTag)},[r,s,f,t,a,d,h]}class be extends M{constructor(e){super(),O(this,e,he,de,B,{tags:0,deleteTag:1,addTag:2})}}export{be as T};
