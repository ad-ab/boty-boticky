import{_ as t,R as e,S as s,i as n,s as a,A as l,B as r,C as c,G as o,I as i,J as d,K as m,e as f,c as h,f as u,d as p,h as v,k as g,N as y,a as $,t as k,q as b,b as D,g as E,o as x,j as V,p as w,O as I,Q as z,r as j,$ as B,a0 as U,a7 as H,z as T,n as G,v as C}from"./start-d5947165.js";import{G as N,S,a as M}from"./Gender-a8fdc5b6.js";function O(t,e,s){const n=t.slice();return n[4]=e[s],n}function P(t,e,s){const n=t.slice();return n[7]=e[s],n}function A(t){let e,s;return e=new N({props:{type:"Dívčí",large:!0}}),{c(){r(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,n){o(e,t,n),s=!0},i(t){s||(i(e.$$.fragment,t),s=!0)},o(t){d(e.$$.fragment,t),s=!1},d(t){m(e,t)}}}function J(t){let e,s;return e=new N({props:{type:"Chlapecká",large:!0}}),{c(){r(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,n){o(e,t,n),s=!0},i(t){s||(i(e.$$.fragment,t),s=!0)},o(t){d(e.$$.fragment,t),s=!1},d(t){m(e,t)}}}function L(t){let e,s;return e=new S({props:{type:t[7],large:!0}}),{c(){r(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,n){o(e,t,n),s=!0},p(t,s){const n={};1&s&&(n.type=t[7]),e.$set(n)},i(t){s||(i(e.$$.fragment,t),s=!0)},o(t){d(e.$$.fragment,t),s=!1},d(t){m(e,t)}}}function R(t){let e,s;return e=new M({props:{large:!0,strike:!t[0].stock[t[4]],size:t[4],selectedSize:t[1]&&t[4]==t[1][0]}}),e.$on("click",(function(){return t[2](t[4])})),{c(){r(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,n){o(e,t,n),s=!0},p(s,n){t=s;const a={};1&n&&(a.strike=!t[0].stock[t[4]]),1&n&&(a.size=t[4]),3&n&&(a.selectedSize=t[1]&&t[4]==t[1][0]),e.$set(a)},i(t){s||(i(e.$$.fragment,t),s=!0)},o(t){d(e.$$.fragment,t),s=!1},d(t){m(e,t)}}}function K(t){let e,s;return{c(){e=f("button"),s=k("Vyberte si velikost"),this.h()},l(t){e=h(t,"BUTTON",{class:!0,disabled:!0});var n=u(e);s=E(n,"Vyberte si velikost"),n.forEach(p),this.h()},h(){v(e,"class","dark disabled svelte-19nx7ym"),e.disabled=!0},m(t,n){g(t,e,n),V(e,s)},p:G,d(t){t&&p(e)}}}function Q(t){let e,s,n,a;return{c(){e=f("button"),s=k("Přidat do košíku"),this.h()},l(t){e=h(t,"BUTTON",{alt:!0,class:!0});var n=u(e);s=E(n,"Přidat do košíku"),n.forEach(p),this.h()},h(){v(e,"alt","Add to cart"),v(e,"class","dark svelte-19nx7ym")},m(l,r){g(l,e,r),V(e,s),n||(a=C(e,"click",t[3]),n=!0)},p:G,d(t){t&&p(e),n=!1,a()}}}function Z(t){let e,s=t[0].description+"";return{c(){e=f("div"),this.h()},l(t){e=h(t,"DIV",{class:!0}),u(e).forEach(p),this.h()},h(){v(e,"class","card description svelte-19nx7ym")},m(t,n){g(t,e,n),e.innerHTML=s},p(t,n){1&n&&s!==(s=t[0].description+"")&&(e.innerHTML=s)},d(t){t&&p(e)}}}function q(t){let e,s,n,a,r,c,o,m,B,U,T,G,C,N,S,M,q,F,W,X,tt,et,st,nt,at,lt,rt,ct,ot,it,dt,mt,ft,ht,ut,pt,vt=t[0].name+"",gt=t[0].brand+"",yt=t[0].gender.includes("Dívčí")||t[0].gender.includes("Uni"),$t=t[0].gender.includes("Chlapecká")||t[0].gender.includes("Uni"),kt=l(t[0].price)+"";document.title=e=t[0].name+" | Boty Botičky - Prodej dětských bot";let bt=yt&&A(),Dt=$t&&J(),Et=t[0].season.split(",").map(Y),xt=[];for(let e=0;e<Et.length;e+=1)xt[e]=L(P(t,Et,e));const Vt=t=>d(xt[t],1,1,(()=>{xt[t]=null}));let wt=t[0].size.split(",").map(_),It=[];for(let e=0;e<wt.length;e+=1)It[e]=R(O(t,wt,e));const zt=t=>d(It[t],1,1,(()=>{It[t]=null}));function jt(t,e){return t[1]&&t[0].stock[t[1]]?Q:K}let Bt=jt(t),Ut=Bt(t),Ht=t[0].description&&Z(t);return{c(){s=f("meta"),r=y(),c=$(),o=f("div"),m=f("div"),B=f("div"),U=f("img"),C=$(),N=f("div"),S=f("div"),M=f("h1"),q=k(vt),F=$(),W=f("div"),X=k(gt),tt=$(),et=f("div"),st=f("div"),bt&&bt.c(),nt=$(),Dt&&Dt.c(),at=$(),lt=f("div");for(let t=0;t<xt.length;t+=1)xt[t].c();rt=$(),ct=f("div");for(let t=0;t<It.length;t+=1)It[t].c();ot=$(),it=f("div"),dt=f("h2"),mt=k(kt),ft=$(),ht=f("div"),Ut.c(),ut=$(),Ht&&Ht.c(),this.h()},l(t){const e=b('[data-svelte="svelte-gimuwn"]',document.head);s=h(e,"META",{name:!0,content:!0}),r=y(),e.forEach(p),c=D(t),o=h(t,"DIV",{class:!0});var n=u(o);m=h(n,"DIV",{class:!0});var a=u(m);B=h(a,"DIV",{class:!0});var l=u(B);U=h(l,"IMG",{src:!0,alt:!0,style:!0,class:!0}),l.forEach(p),C=D(a),N=h(a,"DIV",{class:!0});var i=u(N);S=h(i,"DIV",{class:!0});var d=u(S);M=h(d,"H1",{class:!0});var f=u(M);q=E(f,vt),f.forEach(p),F=D(d),W=h(d,"DIV",{class:!0});var v=u(W);X=E(v,gt),v.forEach(p),d.forEach(p),tt=D(i),et=h(i,"DIV",{class:!0});var g=u(et);st=h(g,"DIV",{class:!0});var $=u(st);bt&&bt.l($),nt=D($),Dt&&Dt.l($),$.forEach(p),at=D(g),lt=h(g,"DIV",{class:!0});var k=u(lt);for(let t=0;t<xt.length;t+=1)xt[t].l(k);k.forEach(p),g.forEach(p),rt=D(i),ct=h(i,"DIV",{class:!0});var x=u(ct);for(let t=0;t<It.length;t+=1)It[t].l(x);x.forEach(p),ot=D(i),it=h(i,"DIV",{});var V=u(it);dt=h(V,"H2",{});var w=u(dt);mt=E(w,kt),w.forEach(p),V.forEach(p),ft=D(i),ht=h(i,"DIV",{class:!0});var I=u(ht);Ut.l(I),I.forEach(p),i.forEach(p),a.forEach(p),ut=D(n),Ht&&Ht.l(n),n.forEach(p),this.h()},h(){v(s,"name","description"),v(s,"content",n="Detaily o produktu "+t[0].name),a=new H(r),U.src!==(T="https://www.vyprodej-dovoz.cz/boty/boty-fotky/"+t[0].photo)&&v(U,"src",T),v(U,"alt",G=t[0].name),x(U,"width","100%"),v(U,"class","svelte-19nx7ym"),v(B,"class","img svelte-19nx7ym"),v(M,"class","svelte-19nx7ym"),v(W,"class","brand svelte-19nx7ym"),v(S,"class","title svelte-19nx7ym"),v(st,"class","genders svelte-19nx7ym"),v(lt,"class","season svelte-19nx7ym"),v(et,"class","pictures svelte-19nx7ym"),v(ct,"class","sizes svelte-19nx7ym"),v(ht,"class","btn"),v(N,"class","stats svelte-19nx7ym"),v(m,"class","card svelte-19nx7ym"),v(o,"class","content svelte-19nx7ym")},m(t,e){V(document.head,s),a.m('<script type="application/ld+json" ✂prettier:content✂="JHtKU09OLnN0cmluZ2lmeShwcm9kdWN0RGF0YVR5cGUocHJvZHVjdCkpfQ==">{}<\/script>',document.head),V(document.head,r),g(t,c,e),g(t,o,e),V(o,m),V(m,B),V(B,U),V(m,C),V(m,N),V(N,S),V(S,M),V(M,q),V(S,F),V(S,W),V(W,X),V(N,tt),V(N,et),V(et,st),bt&&bt.m(st,null),V(st,nt),Dt&&Dt.m(st,null),V(et,at),V(et,lt);for(let t=0;t<xt.length;t+=1)xt[t].m(lt,null);V(N,rt),V(N,ct);for(let t=0;t<It.length;t+=1)It[t].m(ct,null);V(N,ot),V(N,it),V(it,dt),V(dt,mt),V(N,ft),V(N,ht),Ut.m(ht,null),V(o,ut),Ht&&Ht.m(o,null),pt=!0},p(t,[a]){if((!pt||1&a)&&e!==(e=t[0].name+" | Boty Botičky - Prodej dětských bot")&&(document.title=e),(!pt||1&a&&n!==(n="Detaily o produktu "+t[0].name))&&v(s,"content",n),(!pt||1&a&&U.src!==(T="https://www.vyprodej-dovoz.cz/boty/boty-fotky/"+t[0].photo))&&v(U,"src",T),(!pt||1&a&&G!==(G=t[0].name))&&v(U,"alt",G),(!pt||1&a)&&vt!==(vt=t[0].name+"")&&w(q,vt),(!pt||1&a)&&gt!==(gt=t[0].brand+"")&&w(X,gt),1&a&&(yt=t[0].gender.includes("Dívčí")||t[0].gender.includes("Uni")),yt?bt?1&a&&i(bt,1):(bt=A(),bt.c(),i(bt,1),bt.m(st,nt)):bt&&(I(),d(bt,1,1,(()=>{bt=null})),z()),1&a&&($t=t[0].gender.includes("Chlapecká")||t[0].gender.includes("Uni")),$t?Dt?1&a&&i(Dt,1):(Dt=J(),Dt.c(),i(Dt,1),Dt.m(st,null)):Dt&&(I(),d(Dt,1,1,(()=>{Dt=null})),z()),1&a){let e;for(Et=t[0].season.split(",").map(Y),e=0;e<Et.length;e+=1){const s=P(t,Et,e);xt[e]?(xt[e].p(s,a),i(xt[e],1)):(xt[e]=L(s),xt[e].c(),i(xt[e],1),xt[e].m(lt,null))}for(I(),e=Et.length;e<xt.length;e+=1)Vt(e);z()}if(3&a){let e;for(wt=t[0].size.split(",").map(_),e=0;e<wt.length;e+=1){const s=O(t,wt,e);It[e]?(It[e].p(s,a),i(It[e],1)):(It[e]=R(s),It[e].c(),i(It[e],1),It[e].m(ct,null))}for(I(),e=wt.length;e<It.length;e+=1)zt(e);z()}(!pt||1&a)&&kt!==(kt=l(t[0].price)+"")&&w(mt,kt),Bt===(Bt=jt(t))&&Ut?Ut.p(t,a):(Ut.d(1),Ut=Bt(t),Ut&&(Ut.c(),Ut.m(ht,null))),t[0].description?Ht?Ht.p(t,a):(Ht=Z(t),Ht.c(),Ht.m(o,null)):Ht&&(Ht.d(1),Ht=null)},i(t){if(!pt){i(bt),i(Dt);for(let t=0;t<Et.length;t+=1)i(xt[t]);for(let t=0;t<wt.length;t+=1)i(It[t]);pt=!0}},o(t){d(bt),d(Dt),xt=xt.filter(Boolean);for(let t=0;t<xt.length;t+=1)d(xt[t]);It=It.filter(Boolean);for(let t=0;t<It.length;t+=1)d(It[t]);pt=!1},d(t){p(s),p(r),t&&a.d(),t&&p(c),t&&p(o),bt&&bt.d(),Dt&&Dt.d(),j(xt,t),j(It,t),Ut.d(),Ht&&Ht.d()}}}const F=!0;async function W(s){const{slug:n}=s.params;let a=await t.load(this);const l=a.find((t=>e(t.name)===n));return l&&await t.fetchDescription(this,a,l),{product:l}}const Y=t=>t.trim(),_=t=>t.trim();function X(t,e,s){let n,{product:a}=e;B&&(n=U().size);return t.$$set=t=>{"product"in t&&s(0,a=t.product)},[a,n,t=>{s(1,n=[t])},()=>T.add({...a,size:n})]}export default class extends s{constructor(t){super(),n(this,t,X,q,a,{product:0})}}export{W as preload,F as prerender};
//# sourceMappingURL=[slug]-cd6552dd.js.map
