import{S as a,i as s,s as t,e,a as i,t as r,c as o,b as l,f as n,g as c,d as v,h as d,K as u,j as h,k as m,l as f,n as b}from"./navigation-c2ac1d42.js";import{b as p}from"./data-46f3d2e1.js";function y(a){let s,t,p,y,g,V,x,E,I,D,w,z,j,q,k,Q,C,L,M,S,B,P,$,G,H,K,A,F,J,N,O,R=a[0].name+"",T=a[0].brand+"",U=a[0].gender+"",W=a[0].size+"",X=a[0].season+"";return{c(){s=e("div"),t=e("div"),p=e("div"),y=e("img"),x=i(),E=e("div"),I=e("h1"),D=r("Bota "),w=r(R),z=i(),j=e("div"),q=e("div"),k=r("Výrobce: "),Q=r(T),C=i(),L=e("div"),M=r("Pohlaví: "),S=r(U),B=i(),P=e("div"),$=r("Velikost: "),G=r(W),H=i(),K=e("div"),A=r("Sezóna: "),F=r(X),J=i(),N=e("div"),O=r("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae\n        vehicula tellus. Morbi id tincidunt dui, non fringilla purus. Quisque\n        gravida quis nisl non molestie. Curabitur imperdiet leo enim, viverra\n        semper erat efficitur vel."),this.h()},l(a){s=o(a,"DIV",{class:!0});var e=l(s);t=o(e,"DIV",{class:!0});var i=l(t);p=o(i,"DIV",{class:!0});var r=l(p);y=o(r,"IMG",{src:!0,alt:!0,style:!0,class:!0}),r.forEach(n),x=c(i),E=o(i,"DIV",{class:!0});var d=l(E);I=o(d,"H1",{class:!0});var u=l(I);D=v(u,"Bota "),w=v(u,R),u.forEach(n),z=c(d),j=o(d,"DIV",{style:!0});var h=l(j);q=o(h,"DIV",{});var m=l(q);k=v(m,"Výrobce: "),Q=v(m,T),m.forEach(n),C=c(h),L=o(h,"DIV",{});var f=l(L);M=v(f,"Pohlaví: "),S=v(f,U),f.forEach(n),B=c(h),P=o(h,"DIV",{});var b=l(P);$=v(b,"Velikost: "),G=v(b,W),b.forEach(n),H=c(h),K=o(h,"DIV",{});var g=l(K);A=v(g,"Sezóna: "),F=v(g,X),g.forEach(n),h.forEach(n),J=c(d),N=o(d,"DIV",{style:!0});var V=l(N);O=v(V,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae\n        vehicula tellus. Morbi id tincidunt dui, non fringilla purus. Quisque\n        gravida quis nisl non molestie. Curabitur imperdiet leo enim, viverra\n        semper erat efficitur vel."),V.forEach(n),d.forEach(n),i.forEach(n),e.forEach(n),this.h()},h(){y.src!==(g="https://www.vyprodej-dovoz.cz/boty/boty-fotky/"+a[0].photo)&&d(y,"src",g),d(y,"alt",V=a[0].name),u(y,"width","100%"),d(y,"class","svelte-xayli9"),d(p,"class","img svelte-xayli9"),d(I,"class","svelte-xayli9"),u(j,"text-align","right"),u(j,"margin-bottom","1rem"),u(N,"text-align","justify"),d(E,"class","stats svelte-xayli9"),d(t,"class","card svelte-xayli9"),d(s,"class","content svelte-xayli9")},m(a,e){h(a,s,e),m(s,t),m(t,p),m(p,y),m(t,x),m(t,E),m(E,I),m(I,D),m(I,w),m(E,z),m(E,j),m(j,q),m(q,k),m(q,Q),m(j,C),m(j,L),m(L,M),m(L,S),m(j,B),m(j,P),m(P,$),m(P,G),m(j,H),m(j,K),m(K,A),m(K,F),m(E,J),m(E,N),m(N,O)},p(a,[s]){1&s&&y.src!==(g="https://www.vyprodej-dovoz.cz/boty/boty-fotky/"+a[0].photo)&&d(y,"src",g),1&s&&V!==(V=a[0].name)&&d(y,"alt",V),1&s&&R!==(R=a[0].name+"")&&f(w,R),1&s&&T!==(T=a[0].brand+"")&&f(Q,T),1&s&&U!==(U=a[0].gender+"")&&f(S,U),1&s&&W!==(W=a[0].size+"")&&f(G,W),1&s&&X!==(X=a[0].season+"")&&f(F,X)},i:b,o:b,d(a){a&&n(s)}}}const g=!0;async function V(a){const{slug:s}=a.params;let t=await p.load(this);return{bota:t.find((a=>a.name.replace(/ /g,"-").toLowerCase()===s)),boty:t}}function x(a,s,t){let{bota:e={}}=s,{boty:i}=s;return i&&p.set(i),a.$$set=a=>{"bota"in a&&t(0,e=a.bota),"boty"in a&&t(1,i=a.boty)},[e,i]}export default class extends a{constructor(a){super(),s(this,a,x,y,t,{bota:0,boty:1})}}export{V as preload,g as prerender};
//# sourceMappingURL=[slug]-18d4afe2.js.map
