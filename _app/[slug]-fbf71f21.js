import{V as t,M as e,S as s,i as a,s as l,a4 as n,H as r,D as c,E as o,F as i,B as d,z as p,G as f,e as h,c as u,f as m,d as v,h as g,k as $,C as b,a as k,t as y,q as D,b as E,g as V,_ as z,j as I,r as w,y as j,A as B,L as T,W as S,X as U,a5 as H,x as M,n as x,p as C}from"./start-5886fb3d.js";import{G,S as N,a as O}from"./Gender-2b314df9.js";function P(t,e,s){const a=t.slice();return a[4]=e[s],a}function A(t,e,s){const a=t.slice();return a[7]=e[s],a}function L(t){let e,s;return e=new G({props:{type:"Dívčí",large:!0}}),{c(){c(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,a){i(e,t,a),s=!0},i(t){s||(d(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){f(e,t)}}}function J(t){let e,s;return e=new G({props:{type:"Chlapecká",large:!0}}),{c(){c(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,a){i(e,t,a),s=!0},i(t){s||(d(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){f(e,t)}}}function q(t){let e,s;return e=new N({props:{type:t[7],large:!0}}),{c(){c(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,a){i(e,t,a),s=!0},p(t,s){const a={};1&s&&(a.type=t[7]),e.$set(a)},i(t){s||(d(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){f(e,t)}}}function F(t){let e,s;return e=new O({props:{large:!0,strike:!t[0].stock[t[4]],size:t[4],selectedSize:t[1]&&t[4]==t[1][0]}}),e.$on("click",(function(){return t[2](t[4])})),{c(){c(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,a){i(e,t,a),s=!0},p(s,a){t=s;const l={};1&a&&(l.strike=!t[0].stock[t[4]]),1&a&&(l.size=t[4]),3&a&&(l.selectedSize=t[1]&&t[4]==t[1][0]),e.$set(l)},i(t){s||(d(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){f(e,t)}}}function W(t){let e,s;return{c(){e=h("button"),s=y("Vyberte si velikost"),this.h()},l(t){e=u(t,"BUTTON",{class:!0,disabled:!0});var a=m(e);s=V(a,"Vyberte si velikost"),a.forEach(v),this.h()},h(){g(e,"class","dark disabled svelte-1dob6pa"),e.disabled=!0},m(t,a){$(t,e,a),I(e,s)},p:x,d(t){t&&v(e)}}}function X(t){let e,s,a,l;return{c(){e=h("button"),s=y("Přidat do košíku"),this.h()},l(t){e=u(t,"BUTTON",{alt:!0,class:!0});var a=m(e);s=V(a,"Přidat do košíku"),a.forEach(v),this.h()},h(){g(e,"alt","Add to cart"),g(e,"class","dark svelte-1dob6pa")},m(n,r){$(n,e,r),I(e,s),a||(l=C(e,"click",t[3]),a=!0)},p:x,d(t){t&&v(e),a=!1,l()}}}function _(t){let e,s=t[0].description+"";return{c(){e=h("div"),this.h()},l(t){e=u(t,"DIV",{class:!0}),m(e).forEach(v),this.h()},h(){g(e,"class","card description svelte-1dob6pa")},m(t,a){$(t,e,a),e.innerHTML=s},p(t,a){1&a&&s!==(s=t[0].description+"")&&(e.innerHTML=s)},d(t){t&&v(e)}}}function K(t){let e,s,a,l,c,o,i,f,S,U,M,x,C,G,N,O,K,Q,R,tt,et,st,at,lt,nt,rt,ct,ot,it,dt,pt,ft,ht,ut,mt,vt,gt=`<script type="application/ld+json">${JSON.stringify(n(t[0]))}<\/script>`,$t=t[0].name+"",bt=t[0].brand+"",kt=t[0].gender.includes("Dívčí")||t[0].gender.includes("Uni"),yt=t[0].gender.includes("Chlapecká")||t[0].gender.includes("Uni"),Dt=r(t[0].price)+"";document.title=e=t[0].name+" | Boty Botičky - Prodej dětských bot";let Et=kt&&L(),Vt=yt&&J(),zt=t[0].season.split(",").map(Y),It=[];for(let e=0;e<zt.length;e+=1)It[e]=q(A(t,zt,e));const wt=t=>p(It[t],1,1,(()=>{It[t]=null}));let jt=t[0].size.split(",").map(Z),Bt=[];for(let e=0;e<jt.length;e+=1)Bt[e]=F(P(t,jt,e));const Tt=t=>p(Bt[t],1,1,(()=>{Bt[t]=null}));function St(t,e){return t[1]&&t[0].stock[t[1]]?X:W}let Ut=St(t),Ht=Ut(t),Mt=t[0].description&&_(t);return{c(){s=h("meta"),c=b(),o=k(),i=h("div"),f=h("div"),S=h("div"),U=h("img"),C=k(),G=h("div"),N=h("div"),O=h("h1"),K=y($t),Q=k(),R=h("div"),tt=y(bt),et=k(),st=h("div"),at=h("div"),Et&&Et.c(),lt=k(),Vt&&Vt.c(),nt=k(),rt=h("div");for(let t=0;t<It.length;t+=1)It[t].c();ct=k(),ot=h("div");for(let t=0;t<Bt.length;t+=1)Bt[t].c();it=k(),dt=h("div"),pt=h("h2"),ft=y(Dt),ht=k(),ut=h("div"),Ht.c(),mt=k(),Mt&&Mt.c(),this.h()},l(t){const e=D('[data-svelte="svelte-1njigi4"]',document.head);s=u(e,"META",{name:!0,content:!0}),c=b(),e.forEach(v),o=E(t),i=u(t,"DIV",{class:!0});var a=m(i);f=u(a,"DIV",{class:!0});var l=m(f);S=u(l,"DIV",{class:!0});var n=m(S);U=u(n,"IMG",{src:!0,alt:!0,style:!0,class:!0}),n.forEach(v),C=E(l),G=u(l,"DIV",{class:!0});var r=m(G);N=u(r,"DIV",{class:!0});var d=m(N);O=u(d,"H1",{class:!0});var p=m(O);K=V(p,$t),p.forEach(v),Q=E(d),R=u(d,"DIV",{class:!0});var h=m(R);tt=V(h,bt),h.forEach(v),d.forEach(v),et=E(r),st=u(r,"DIV",{class:!0});var g=m(st);at=u(g,"DIV",{class:!0});var $=m(at);Et&&Et.l($),lt=E($),Vt&&Vt.l($),$.forEach(v),nt=E(g),rt=u(g,"DIV",{class:!0});var k=m(rt);for(let t=0;t<It.length;t+=1)It[t].l(k);k.forEach(v),g.forEach(v),ct=E(r),ot=u(r,"DIV",{class:!0});var y=m(ot);for(let t=0;t<Bt.length;t+=1)Bt[t].l(y);y.forEach(v),it=E(r),dt=u(r,"DIV",{});var z=m(dt);pt=u(z,"H2",{});var I=m(pt);ft=V(I,Dt),I.forEach(v),z.forEach(v),ht=E(r),ut=u(r,"DIV",{class:!0});var w=m(ut);Ht.l(w),w.forEach(v),r.forEach(v),l.forEach(v),mt=E(a),Mt&&Mt.l(a),a.forEach(v),this.h()},h(){g(s,"name","description"),g(s,"content",a="Detaily o produktu "+t[0].name),l=new H(c),U.src!==(M="https://www.vyprodej-dovoz.cz/boty/boty-fotky/"+t[0].photo)&&g(U,"src",M),g(U,"alt",x=t[0].name),z(U,"width","100%"),g(U,"class","svelte-1dob6pa"),g(S,"class","img svelte-1dob6pa"),g(O,"class","svelte-1dob6pa"),g(R,"class","brand svelte-1dob6pa"),g(N,"class","title svelte-1dob6pa"),g(at,"class","genders svelte-1dob6pa"),g(rt,"class","season svelte-1dob6pa"),g(st,"class","pictures svelte-1dob6pa"),g(ot,"class","sizes svelte-1dob6pa"),g(ut,"class","btn"),g(G,"class","stats svelte-1dob6pa"),g(f,"class","card svelte-1dob6pa"),g(i,"class","content svelte-1dob6pa")},m(t,e){I(document.head,s),l.m(gt,document.head),I(document.head,c),$(t,o,e),$(t,i,e),I(i,f),I(f,S),I(S,U),I(f,C),I(f,G),I(G,N),I(N,O),I(O,K),I(N,Q),I(N,R),I(R,tt),I(G,et),I(G,st),I(st,at),Et&&Et.m(at,null),I(at,lt),Vt&&Vt.m(at,null),I(st,nt),I(st,rt);for(let t=0;t<It.length;t+=1)It[t].m(rt,null);I(G,ct),I(G,ot);for(let t=0;t<Bt.length;t+=1)Bt[t].m(ot,null);I(G,it),I(G,dt),I(dt,pt),I(pt,ft),I(G,ht),I(G,ut),Ht.m(ut,null),I(i,mt),Mt&&Mt.m(i,null),vt=!0},p(t,[c]){if((!vt||1&c)&&e!==(e=t[0].name+" | Boty Botičky - Prodej dětských bot")&&(document.title=e),(!vt||1&c&&a!==(a="Detaily o produktu "+t[0].name))&&g(s,"content",a),(!vt||1&c)&&gt!==(gt=`<script type="application/ld+json">${JSON.stringify(n(t[0]))}<\/script>`)&&l.p(gt),(!vt||1&c&&U.src!==(M="https://www.vyprodej-dovoz.cz/boty/boty-fotky/"+t[0].photo))&&g(U,"src",M),(!vt||1&c&&x!==(x=t[0].name))&&g(U,"alt",x),(!vt||1&c)&&$t!==($t=t[0].name+"")&&w(K,$t),(!vt||1&c)&&bt!==(bt=t[0].brand+"")&&w(tt,bt),1&c&&(kt=t[0].gender.includes("Dívčí")||t[0].gender.includes("Uni")),kt?Et?1&c&&d(Et,1):(Et=L(),Et.c(),d(Et,1),Et.m(at,lt)):Et&&(j(),p(Et,1,1,(()=>{Et=null})),B()),1&c&&(yt=t[0].gender.includes("Chlapecká")||t[0].gender.includes("Uni")),yt?Vt?1&c&&d(Vt,1):(Vt=J(),Vt.c(),d(Vt,1),Vt.m(at,null)):Vt&&(j(),p(Vt,1,1,(()=>{Vt=null})),B()),1&c){let e;for(zt=t[0].season.split(",").map(Y),e=0;e<zt.length;e+=1){const s=A(t,zt,e);It[e]?(It[e].p(s,c),d(It[e],1)):(It[e]=q(s),It[e].c(),d(It[e],1),It[e].m(rt,null))}for(j(),e=zt.length;e<It.length;e+=1)wt(e);B()}if(3&c){let e;for(jt=t[0].size.split(",").map(Z),e=0;e<jt.length;e+=1){const s=P(t,jt,e);Bt[e]?(Bt[e].p(s,c),d(Bt[e],1)):(Bt[e]=F(s),Bt[e].c(),d(Bt[e],1),Bt[e].m(ot,null))}for(j(),e=jt.length;e<Bt.length;e+=1)Tt(e);B()}(!vt||1&c)&&Dt!==(Dt=r(t[0].price)+"")&&w(ft,Dt),Ut===(Ut=St(t))&&Ht?Ht.p(t,c):(Ht.d(1),Ht=Ut(t),Ht&&(Ht.c(),Ht.m(ut,null))),t[0].description?Mt?Mt.p(t,c):(Mt=_(t),Mt.c(),Mt.m(i,null)):Mt&&(Mt.d(1),Mt=null)},i(t){if(!vt){d(Et),d(Vt);for(let t=0;t<zt.length;t+=1)d(It[t]);for(let t=0;t<jt.length;t+=1)d(Bt[t]);vt=!0}},o(t){p(Et),p(Vt),It=It.filter(Boolean);for(let t=0;t<It.length;t+=1)p(It[t]);Bt=Bt.filter(Boolean);for(let t=0;t<Bt.length;t+=1)p(Bt[t]);vt=!1},d(t){v(s),v(c),t&&l.d(),t&&v(o),t&&v(i),Et&&Et.d(),Vt&&Vt.d(),T(It,t),T(Bt,t),Ht.d(),Mt&&Mt.d()}}}const Q=!0;async function R(s){const{slug:a}=s.params;let l=await t.load(this);const n=l.find((t=>e(t.name)===a));return n&&t.fetchDescription(this,l,n),{product:n}}const Y=t=>t.trim(),Z=t=>t.trim();function tt(t,e,s){let a,{product:l}=e;S&&(a=U().size);return t.$$set=t=>{"product"in t&&s(0,l=t.product)},[l,a,t=>{s(1,a=[t])},()=>M.add({...l,size:a})]}export default class extends s{constructor(t){super(),a(this,t,tt,K,l,{product:0})}}export{R as preload,Q as prerender};
//# sourceMappingURL=[slug]-fbf71f21.js.map
