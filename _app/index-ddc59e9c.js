import{S as t,i as s,s as n,e,t as l,c as a,b as o,d as r,f as c,h,j as f,k as i,l as g,a as u,g as b,n as m,m as d}from"./client-e4f60414.js";function p(t,s,n){const e=t.slice();return e[1]=s[n],e}function j(t){let s,n,u,b,m=t[1].name+"";return{c(){s=e("a"),n=l(m),b=l("\n     "),this.h()},l(t){s=a(t,"A",{href:!0});var e=o(s);n=r(e,m),e.forEach(c),b=r(t,"\n     "),this.h()},h(){h(s,"href",u="/blog/"+t[1].id)},m(t,e){f(t,s,e),i(s,n),f(t,b,e)},p(t,e){1&e&&m!==(m=t[1].name+"")&&g(n,m),1&e&&u!==(u="/blog/"+t[1].id)&&h(s,"href",u)},d(t){t&&c(s),t&&c(b)}}}function v(t){let s,n,h,g,v=t[0],x=[];for(let s=0;s<v.length;s+=1)x[s]=j(p(t,v,s));return{c(){s=e("h1"),n=l("Blogs"),h=u(),g=e("nav");for(let t=0;t<x.length;t+=1)x[t].c()},l(t){s=a(t,"H1",{});var e=o(s);n=r(e,"Blogs"),e.forEach(c),h=b(t),g=a(t,"NAV",{});var l=o(g);for(let t=0;t<x.length;t+=1)x[t].l(l);l.forEach(c)},m(t,e){f(t,s,e),i(s,n),f(t,h,e),f(t,g,e);for(let t=0;t<x.length;t+=1)x[t].m(g,null)},p(t,[s]){if(1&s){let n;for(v=t[0],n=0;n<v.length;n+=1){const e=p(t,v,n);x[n]?x[n].p(e,s):(x[n]=j(e),x[n].c(),x[n].m(g,null))}for(;n<x.length;n+=1)x[n].d(1);x.length=v.length}},i:m,o:m,d(t){t&&c(s),t&&c(h),t&&c(g),d(x,t)}}}async function x(){const t=await this.fetch("static/blog.json");return{blogs:await t.json()}}function E(t,s,n){let{blogs:e}=s;return t.$$set=t=>{"blogs"in t&&n(0,e=t.blogs)},[e]}export default class extends t{constructor(t){super(),s(this,t,E,v,n,{blogs:0})}}export{x as preload};
//# sourceMappingURL=index-ddc59e9c.js.map
