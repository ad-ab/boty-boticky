import{S as a,i,s,e,a as t,t as r,c as u,b as n,f as l,g as o,d as c,h as d,o as m,j as v,k as b,l as h,n as p}from"./navigation-2cad8464.js";import{b as f}from"./data-de1840e4.js";function g(a){let i,s,f,g,V,y,q,E,P,I,D,w,z,N,Q,j,k,x,B,C,L,M,S,$,G,H,R,A,F,J,K,O,T=a[0].name+"",U=a[0].brand+"",W=a[0].gender+"",X=a[0].size+"",Y=a[0].season+"";return{c(){i=e("div"),s=e("div"),f=e("img"),y=t(),q=e("div"),E=e("h1"),P=r("Bota "),I=r(T),D=t(),w=e("br"),z=t(),N=e("div"),Q=r("Výrobce: "),j=r(U),k=t(),x=e("div"),B=r("Pohlaví: "),C=r(W),L=t(),M=e("div"),S=r("Velikost: "),$=r(X),G=t(),H=e("div"),R=r("Sezóna: "),A=r(Y),F=t(),J=e("div"),K=e("p"),O=r("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae\n    vehicula tellus. Morbi id tincidunt dui, non fringilla purus. Quisque\n    gravida quis nisl non molestie. Curabitur imperdiet leo enim, viverra semper\n    erat efficitur vel. Nullam pretium odio sit amet nisl ultricies, sed varius\n    nibh iaculis. Praesent vestibulum augue eget risus sodales, at aliquam nibh\n    luctus. Proin luctus mauris et ipsum blandit mollis. Nulla bibendum metus\n    sapien, nec varius ligula eleifend at. Phasellus vestibulum nulla quis\n    tincidunt pharetra."),this.h()},l(a){i=u(a,"DIV",{class:!0});var e=n(i);s=u(e,"DIV",{class:!0});var t=n(s);f=u(t,"IMG",{src:!0,alt:!0,style:!0}),t.forEach(l),y=o(e),q=u(e,"DIV",{class:!0});var r=n(q);E=u(r,"H1",{});var d=n(E);P=c(d,"Bota "),I=c(d,T),d.forEach(l),D=o(r),w=u(r,"BR",{}),z=o(r),N=u(r,"DIV",{});var m=n(N);Q=c(m,"Výrobce: "),j=c(m,U),m.forEach(l),k=o(r),x=u(r,"DIV",{});var v=n(x);B=c(v,"Pohlaví: "),C=c(v,W),v.forEach(l),L=o(r),M=u(r,"DIV",{});var b=n(M);S=c(b,"Velikost: "),$=c(b,X),b.forEach(l),G=o(r),H=u(r,"DIV",{});var h=n(H);R=c(h,"Sezóna: "),A=c(h,Y),h.forEach(l),r.forEach(l),e.forEach(l),F=o(a),J=u(a,"DIV",{});var p=n(J);K=u(p,"P",{});var g=n(K);O=c(g,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae\n    vehicula tellus. Morbi id tincidunt dui, non fringilla purus. Quisque\n    gravida quis nisl non molestie. Curabitur imperdiet leo enim, viverra semper\n    erat efficitur vel. Nullam pretium odio sit amet nisl ultricies, sed varius\n    nibh iaculis. Praesent vestibulum augue eget risus sodales, at aliquam nibh\n    luctus. Proin luctus mauris et ipsum blandit mollis. Nulla bibendum metus\n    sapien, nec varius ligula eleifend at. Phasellus vestibulum nulla quis\n    tincidunt pharetra."),g.forEach(l),p.forEach(l),this.h()},h(){f.src!==(g="/boty/"+a[0].photo)&&d(f,"src",g),d(f,"alt",V=a[0].name),m(f,"width","100%"),d(s,"class","img"),d(q,"class","stats svelte-1fat7vo"),d(i,"class","header svelte-1fat7vo")},m(a,e){v(a,i,e),b(i,s),b(s,f),b(i,y),b(i,q),b(q,E),b(E,P),b(E,I),b(q,D),b(q,w),b(q,z),b(q,N),b(N,Q),b(N,j),b(q,k),b(q,x),b(x,B),b(x,C),b(q,L),b(q,M),b(M,S),b(M,$),b(q,G),b(q,H),b(H,R),b(H,A),v(a,F,e),v(a,J,e),b(J,K),b(K,O)},p(a,[i]){1&i&&f.src!==(g="/boty/"+a[0].photo)&&d(f,"src",g),1&i&&V!==(V=a[0].name)&&d(f,"alt",V),1&i&&T!==(T=a[0].name+"")&&h(I,T),1&i&&U!==(U=a[0].brand+"")&&h(j,U),1&i&&W!==(W=a[0].gender+"")&&h(C,W),1&i&&X!==(X=a[0].size+"")&&h($,X),1&i&&Y!==(Y=a[0].season+"")&&h(A,Y)},i:p,o:p,d(a){a&&l(i),a&&l(F),a&&l(J)}}}const V=!0;async function y(a,i){const{slug:s}=a.params;let e=a.host&&await new Promise((a=>{f.subscribe((i=>a(i)))}));e&&0!==e.length||(e=await f.load(this));const{boty:t}=e;return{bota:t.find((a=>a.name.replace(/ /g,"-").toLowerCase()===s)),boty:t}}function q(a,i,s){let{bota:e={}}=i,{boty:t}=i;return t&&f.set({boty:t}),a.$$set=a=>{"bota"in a&&s(0,e=a.bota),"boty"in a&&s(1,t=a.boty)},[e,t]}export default class extends a{constructor(a){super(),i(this,a,q,g,s,{bota:0,boty:1})}}export{y as preload,V as prerender};
//# sourceMappingURL=[slug]-6452e17e.js.map
