import{S as s,i as t,s as e,q as a,r,u as i,v as o,x as n,y as l,e as c,a as u,t as d,c as v,b as f,f as h,g as m,d as p,h as g,m as b,j as V,k as y,z as q,D as E,E as z,A as D}from"./navigation-326e90ab.js";import{b as I}from"./data-eede56ab.js";import{S as k}from"./Size-10cdaaa1.js";function $(s,t,e){const a=s.slice();return a[2]=t[e],a}function w(s){let t,e;return t=new k({props:{strike:!s[0].stock[s[2]],size:s[2]}}),{c(){a(t.$$.fragment)},l(s){r(t.$$.fragment,s)},m(s,a){i(t,s,a),e=!0},p(s,e){const a={};1&e&&(a.strike=!s[0].stock[s[2]]),1&e&&(a.size=s[2]),t.$set(a)},i(s){e||(o(t.$$.fragment,s),e=!0)},o(s){n(t.$$.fragment,s),e=!1},d(s){l(t,s)}}}function j(s){let t,e,a,r,i,l,I,k,j,x,S,B,C,L,M,P,A,G,H,F,J,K,N,O,R,T,U,W,X,Y,Z,_,ss,ts=s[0].name+"",es=s[0].brand+"",as=s[0].gender+"",rs=s[0].season+"",is=s[0].size.split(",").map(Q),os=[];for(let t=0;t<is.length;t+=1)os[t]=w($(s,is,t));const ns=s=>n(os[s],1,1,(()=>{os[s]=null}));return{c(){t=c("div"),e=c("div"),a=c("div"),r=c("img"),I=u(),k=c("div"),j=c("h1"),x=d("Bota "),S=d(ts),B=u(),C=c("div"),L=c("div"),M=d("Výrobce: "),P=d(es),A=u(),G=c("div"),H=d("Pohlaví: "),F=d(as),J=u(),K=c("div"),N=d("Sezóna: "),O=d(rs),R=u(),T=c("div"),U=d("Velikost: \n          "),W=c("div"),X=d("Velikosti: \n            ");for(let s=0;s<os.length;s+=1)os[s].c();Y=u(),Z=c("div"),_=d("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae\n        vehicula tellus. Morbi id tincidunt dui, non fringilla purus. Quisque\n        gravida quis nisl non molestie. Curabitur imperdiet leo enim, viverra\n        semper erat efficitur vel."),this.h()},l(s){t=v(s,"DIV",{class:!0});var i=f(t);e=v(i,"DIV",{class:!0});var o=f(e);a=v(o,"DIV",{class:!0});var n=f(a);r=v(n,"IMG",{src:!0,alt:!0,style:!0,class:!0}),n.forEach(h),I=m(o),k=v(o,"DIV",{class:!0});var l=f(k);j=v(l,"H1",{class:!0});var c=f(j);x=p(c,"Bota "),S=p(c,ts),c.forEach(h),B=m(l),C=v(l,"DIV",{style:!0});var u=f(C);L=v(u,"DIV",{});var d=f(L);M=p(d,"Výrobce: "),P=p(d,es),d.forEach(h),A=m(u),G=v(u,"DIV",{});var g=f(G);H=p(g,"Pohlaví: "),F=p(g,as),g.forEach(h),J=m(u),K=v(u,"DIV",{});var b=f(K);N=p(b,"Sezóna: "),O=p(b,rs),b.forEach(h),R=m(u),T=v(u,"DIV",{});var V=f(T);U=p(V,"Velikost: \n          "),W=v(V,"DIV",{});var y=f(W);X=p(y,"Velikosti: \n            ");for(let s=0;s<os.length;s+=1)os[s].l(y);y.forEach(h),V.forEach(h),u.forEach(h),Y=m(l),Z=v(l,"DIV",{style:!0});var q=f(Z);_=p(q,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae\n        vehicula tellus. Morbi id tincidunt dui, non fringilla purus. Quisque\n        gravida quis nisl non molestie. Curabitur imperdiet leo enim, viverra\n        semper erat efficitur vel."),q.forEach(h),l.forEach(h),o.forEach(h),i.forEach(h),this.h()},h(){r.src!==(i="https://www.vyprodej-dovoz.cz/boty/boty-fotky/"+s[0].photo)&&g(r,"src",i),g(r,"alt",l=s[0].name),b(r,"width","100%"),g(r,"class","svelte-1bh5sq4"),g(a,"class","img svelte-1bh5sq4"),g(j,"class","svelte-1bh5sq4"),b(C,"text-align","right"),b(C,"margin-bottom","1rem"),b(Z,"text-align","justify"),g(k,"class","stats svelte-1bh5sq4"),g(e,"class","card svelte-1bh5sq4"),g(t,"class","content svelte-1bh5sq4")},m(s,i){V(s,t,i),y(t,e),y(e,a),y(a,r),y(e,I),y(e,k),y(k,j),y(j,x),y(j,S),y(k,B),y(k,C),y(C,L),y(L,M),y(L,P),y(C,A),y(C,G),y(G,H),y(G,F),y(C,J),y(C,K),y(K,N),y(K,O),y(C,R),y(C,T),y(T,U),y(T,W),y(W,X);for(let s=0;s<os.length;s+=1)os[s].m(W,null);y(k,Y),y(k,Z),y(Z,_),ss=!0},p(s,[t]){if((!ss||1&t&&r.src!==(i="https://www.vyprodej-dovoz.cz/boty/boty-fotky/"+s[0].photo))&&g(r,"src",i),(!ss||1&t&&l!==(l=s[0].name))&&g(r,"alt",l),(!ss||1&t)&&ts!==(ts=s[0].name+"")&&q(S,ts),(!ss||1&t)&&es!==(es=s[0].brand+"")&&q(P,es),(!ss||1&t)&&as!==(as=s[0].gender+"")&&q(F,as),(!ss||1&t)&&rs!==(rs=s[0].season+"")&&q(O,rs),1&t){let e;for(is=s[0].size.split(",").map(Q),e=0;e<is.length;e+=1){const a=$(s,is,e);os[e]?(os[e].p(a,t),o(os[e],1)):(os[e]=w(a),os[e].c(),o(os[e],1),os[e].m(W,null))}for(D(),e=is.length;e<os.length;e+=1)ns(e);E()}},i(s){if(!ss){for(let s=0;s<is.length;s+=1)o(os[s]);ss=!0}},o(s){os=os.filter(Boolean);for(let s=0;s<os.length;s+=1)n(os[s]);ss=!1},d(s){s&&h(t),z(os,s)}}}const x=!0;async function S(s){const{slug:t}=s.params;let e=await I.load(this);return{product:e.find((s=>s.name.replace(/ /g,"-").toLowerCase()===t)),products:e}}const Q=s=>s.trim();function B(s,t,e){let{product:a}=t,{products:r}=t;return r&&I.set(r),s.$$set=s=>{"product"in s&&e(0,a=s.product),"products"in s&&e(1,r=s.products)},[a,r]}export default class extends s{constructor(s){super(),t(this,s,B,j,e,{product:0,products:1})}}export{S as preload,x as prerender};
//# sourceMappingURL=[slug]-288f78ee.js.map
