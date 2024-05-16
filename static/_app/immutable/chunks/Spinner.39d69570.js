import{s as x,f as y,z as d,l as A,g as j,h as m,A as u,m as w,d as c,j as n,i as B,r as f,C as g}from"./scheduler.7238b518.js";import{S as E,i as N}from"./index.5768aeba.js";function S(h){let e,t,a,r,i,l,p;return{c(){e=y("div"),t=d("svg"),a=d("style"),r=A(`.spinner_ajPY {
				transform-origin: center;
				animation: spinner_AtaB 0.75s infinite linear;
			}
			@keyframes spinner_AtaB {
				100% {
					transform: rotate(360deg);
				}
			}
		`),i=d("path"),l=d("path"),this.h()},l(s){e=j(s,"DIV",{class:!0});var o=m(e);t=u(o,"svg",{class:!0,viewBox:!0,fill:!0,xmlns:!0});var _=m(t);a=u(_,"style",{});var v=m(a);r=w(v,`.spinner_ajPY {
				transform-origin: center;
				animation: spinner_AtaB 0.75s infinite linear;
			}
			@keyframes spinner_AtaB {
				100% {
					transform: rotate(360deg);
				}
			}
		`),v.forEach(c),i=u(_,"path",{d:!0,opacity:!0}),m(i).forEach(c),l=u(_,"path",{d:!0,class:!0}),m(l).forEach(c),_.forEach(c),o.forEach(c),this.h()},h(){n(i,"d","M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"),n(i,"opacity",".25"),n(l,"d","M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"),n(l,"class","spinner_ajPY"),n(t,"class","size-5"),n(t,"viewBox","0 0 24 24"),n(t,"fill","currentColor"),n(t,"xmlns","http://www.w3.org/2000/svg"),n(e,"class",p="flex justify-center text-center "+h[0])},m(s,o){B(s,e,o),f(e,t),f(t,a),f(a,r),f(t,i),f(t,l)},p(s,[o]){o&1&&p!==(p="flex justify-center text-center "+s[0])&&n(e,"class",p)},i:g,o:g,d(s){s&&c(e)}}}function C(h,e,t){let{className:a=""}=e;return h.$$set=r=>{"className"in r&&t(0,a=r.className)},[a]}class Z extends E{constructor(e){super(),N(this,e,C,S,x,{className:0})}}export{Z as S};
