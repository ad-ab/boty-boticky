import{S as a,i as s,s as t,e,t as o,a as n,c,b as r,d as i,f as k,g as l,h as b,j as y,k as h,n as d}from"./navigation-7db397a3.js";import{b as f}from"./data-8781fba7.js";function v(a){let s,t,f,v,j,p,u,m,g,P,B;return{c(){s=e("h1"),t=o("Boty Botičky"),f=n(),v=e("p"),j=o("Vítejte na stránce"),p=n(),u=e("p"),m=o("Tady nějaký náhodný boty v akci nebo tak něco?"),g=n(),P=e("p"),B=o("Přímé odkazy na nějaké sekce"),this.h()},l(a){s=c(a,"H1",{class:!0});var e=r(s);t=i(e,"Boty Botičky"),e.forEach(k),f=l(a),v=c(a,"P",{class:!0});var o=r(v);j=i(o,"Vítejte na stránce"),o.forEach(k),p=l(a),u=c(a,"P",{class:!0});var n=r(u);m=i(n,"Tady nějaký náhodný boty v akci nebo tak něco?"),n.forEach(k),g=l(a),P=c(a,"P",{class:!0});var b=r(P);B=i(b,"Přímé odkazy na nějaké sekce"),b.forEach(k),this.h()},h(){b(s,"class","svelte-g6rebk"),b(v,"class","svelte-g6rebk"),b(u,"class","svelte-g6rebk"),b(P,"class","svelte-g6rebk")},m(a,e){y(a,s,e),h(s,t),y(a,f,e),y(a,v,e),h(v,j),y(a,p,e),y(a,u,e),h(u,m),y(a,g,e),y(a,P,e),h(P,B)},p:d,i:d,o:d,d(a){a&&k(s),a&&k(f),a&&k(v),a&&k(p),a&&k(u),a&&k(g),a&&k(P)}}}const j=!0;async function p(a){return{boty:await f.load(this)}}function u(a,s,t){let{boty:e}=s;return e&&f.set(e),a.$$set=a=>{"boty"in a&&t(0,e=a.boty)},[e]}export default class extends a{constructor(a){super(),s(this,a,u,v,t,{boty:0})}}export{p as preload,j as prerender};
//# sourceMappingURL=index-84087d37.js.map
