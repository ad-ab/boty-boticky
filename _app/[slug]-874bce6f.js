import{S as s,i as a,s as t,e as n,t as o,a as r,c as e,b as i,d as c,f as l,g as f,j as u,k as p,l as b,n as d}from"./client-f637a0bf.js";function g(s){let a,t,g,h,m,j=s[0].name+"",x=s[0].description+"";return{c(){a=n("h2"),t=o(j),g=r(),h=n("p"),m=o(x)},l(s){a=e(s,"H2",{});var n=i(a);t=c(n,j),n.forEach(l),g=f(s),h=e(s,"P",{});var o=i(h);m=c(o,x),o.forEach(l)},m(s,n){u(s,a,n),p(a,t),u(s,g,n),u(s,h,n),p(h,m)},p(s,[a]){1&a&&j!==(j=s[0].name+"")&&b(t,j),1&a&&x!==(x=s[0].description+"")&&b(m,x)},i:d,o:d,d(s){s&&l(a),s&&l(g),s&&l(h)}}}const h=!0;async function m(s){const{slug:a}=s.params,t=await this.fetch("/static/blog.json");return{blog:(await t.json()).find((s=>s.id===a))}}function j(s,a,t){let{blog:n}=a;return s.$$set=s=>{"blog"in s&&t(0,n=s.blog)},[n]}export default class extends s{constructor(s){super(),a(this,s,j,g,t,{blog:0})}}export{m as preload,h as prerender};
//# sourceMappingURL=[slug]-874bce6f.js.map
