import{S as t,i as s,s as n,e as a,t as l,c as o,b as e,d as r,f as c,h,j as f,k as i,l as g,a as u,g as b,n as d,m}from"./navigation-2cad8464.js";function p(t,s,n){const a=t.slice();return a[1]=s[n],a}function v(t){let s,n,u,b,d=t[1].name+"";return{c(){s=a("a"),n=l(d),b=l("\n     "),this.h()},l(t){s=o(t,"A",{href:!0});var a=e(s);n=r(a,d),a.forEach(c),b=r(t,"\n     "),this.h()},h(){h(s,"href",u="/blog/"+t[1].id)},m(t,a){f(t,s,a),i(s,n),f(t,b,a)},p(t,a){1&a&&d!==(d=t[1].name+"")&&g(n,d),1&a&&u!==(u="/blog/"+t[1].id)&&h(s,"href",u)},d(t){t&&c(s),t&&c(b)}}}function j(t){let s,n,h,g,j=t[0],x=[];for(let s=0;s<j.length;s+=1)x[s]=v(p(t,j,s));return{c(){s=a("h1"),n=l("Blogs"),h=u(),g=a("nav");for(let t=0;t<x.length;t+=1)x[t].c()},l(t){s=o(t,"H1",{});var a=e(s);n=r(a,"Blogs"),a.forEach(c),h=b(t),g=o(t,"NAV",{});var l=e(g);for(let t=0;t<x.length;t+=1)x[t].l(l);l.forEach(c)},m(t,a){f(t,s,a),i(s,n),f(t,h,a),f(t,g,a);for(let t=0;t<x.length;t+=1)x[t].m(g,null)},p(t,[s]){if(1&s){let n;for(j=t[0],n=0;n<j.length;n+=1){const a=p(t,j,n);x[n]?x[n].p(a,s):(x[n]=v(a),x[n].c(),x[n].m(g,null))}for(;n<x.length;n+=1)x[n].d(1);x.length=j.length}},i:d,o:d,d(t){t&&c(s),t&&c(h),t&&c(g),m(x,t)}}}async function x(){const t=await this.fetch("static/blog.json");return{blogs:await t.json()}}function E(t,s,n){let{blogs:a}=s;return t.$$set=t=>{"blogs"in t&&n(0,a=t.blogs)},[a]}export default class extends t{constructor(t){super(),s(this,t,E,j,n,{blogs:0})}}export{x as preload};
//# sourceMappingURL=index-45bbaa27.js.map
