import{V as t,M as e,S as s,i as a,s as l,a4 as n,H as r,D as o,E as c,F as i,B as d,z as p,G as f,e as h,c as u,f as m,d as g,h as v,k as b,C as $,a as k,t as y,q as D,b as E,g as V,a2 as w,j as z,r as I,y as j,A as B,L as T,W as S,X as U,a5 as H,x as M,n as x,p as C}from"./start-bbebb14f.js";import{G,S as N,a as O}from"./Gender-ce4bf3ab.js";function P(t,e,s){const a=t.slice();return a[4]=e[s],a}function A(t,e,s){const a=t.slice();return a[7]=e[s],a}function L(t){let e,s;return e=new G({props:{type:"Dívčí",large:!0}}),{c(){o(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,a){i(e,t,a),s=!0},i(t){s||(d(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){f(e,t)}}}function J(t){let e,s;return e=new G({props:{type:"Chlapecká",large:!0}}),{c(){o(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,a){i(e,t,a),s=!0},i(t){s||(d(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){f(e,t)}}}function q(t){let e,s;return e=new N({props:{type:t[7],large:!0}}),{c(){o(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,a){i(e,t,a),s=!0},p(t,s){const a={};1&s&&(a.type=t[7]),e.$set(a)},i(t){s||(d(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){f(e,t)}}}function F(t){let e,s;return e=new O({props:{large:!0,strike:!t[0].stock[t[4]],size:t[4],selectedSize:t[1]&&t[4]==t[1][0]}}),e.$on("click",(function(){return t[2](t[4])})),{c(){o(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,a){i(e,t,a),s=!0},p(s,a){t=s;const l={};1&a&&(l.strike=!t[0].stock[t[4]]),1&a&&(l.size=t[4]),3&a&&(l.selectedSize=t[1]&&t[4]==t[1][0]),e.$set(l)},i(t){s||(d(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){f(e,t)}}}function W(t){let e,s;return{c(){e=h("button"),s=y("Vyberte si velikost"),this.h()},l(t){e=u(t,"BUTTON",{class:!0,disabled:!0});var a=m(e);s=V(a,"Vyberte si velikost"),a.forEach(g),this.h()},h(){v(e,"class","dark disabled svelte-1dob6pa"),e.disabled=!0},m(t,a){b(t,e,a),z(e,s)},p:x,d(t){t&&g(e)}}}function X(t){let e,s,a,l;return{c(){e=h("button"),s=y("Přidat do košíku"),this.h()},l(t){e=u(t,"BUTTON",{alt:!0,class:!0});var a=m(e);s=V(a,"Přidat do košíku"),a.forEach(g),this.h()},h(){v(e,"alt","Add to cart"),v(e,"class","dark svelte-1dob6pa")},m(n,r){b(n,e,r),z(e,s),a||(l=C(e,"click",t[3]),a=!0)},p:x,d(t){t&&g(e),a=!1,l()}}}function K(t){let e,s=t[0].description+"";return{c(){e=h("div"),this.h()},l(t){e=u(t,"DIV",{class:!0}),m(e).forEach(g),this.h()},h(){v(e,"class","card description svelte-1dob6pa")},m(t,a){b(t,e,a),e.innerHTML=s},p(t,a){1&a&&s!==(s=t[0].description+"")&&(e.innerHTML=s)},d(t){t&&g(e)}}}function Q(t){let e,s,a,l,o,c,i,f,S,U,M,x,C,G,N,O,Q,R,Y,tt,et,st,at,lt,nt,rt,ot,ct,it,dt,pt,ft,ht,ut,mt,gt,vt=`<script type="application/ld+json">${JSON.stringify(n(t[0]))}<\/script>`,bt=t[0].name+"",$t=t[0].brand+"",kt=t[0].gender.includes("Dívčí")||t[0].gender.includes("Uni"),yt=t[0].gender.includes("Chlapecká")||t[0].gender.includes("Uni"),Dt=r(t[0].price)+"";document.title=e=t[0].name+" | Boty Botičky - Prodej dětských bot";let Et=kt&&L(),Vt=yt&&J(),wt=t[0].season.split(",").map(Z),zt=[];for(let e=0;e<wt.length;e+=1)zt[e]=q(A(t,wt,e));const It=t=>p(zt[t],1,1,(()=>{zt[t]=null}));let jt=t[0].size.split(",").map(_),Bt=[];for(let e=0;e<jt.length;e+=1)Bt[e]=F(P(t,jt,e));const Tt=t=>p(Bt[t],1,1,(()=>{Bt[t]=null}));function St(t,e){return t[1]&&t[0].stock[t[1]]?X:W}let Ut=St(t),Ht=Ut(t),Mt=t[0].description&&K(t);return{c(){s=h("meta"),o=$(),c=k(),i=h("div"),f=h("div"),S=h("div"),U=h("img"),C=k(),G=h("div"),N=h("div"),O=h("h1"),Q=y(bt),R=k(),Y=h("div"),tt=y($t),et=k(),st=h("div"),at=h("div"),Et&&Et.c(),lt=k(),Vt&&Vt.c(),nt=k(),rt=h("div");for(let t=0;t<zt.length;t+=1)zt[t].c();ot=k(),ct=h("div");for(let t=0;t<Bt.length;t+=1)Bt[t].c();it=k(),dt=h("div"),pt=h("h2"),ft=y(Dt),ht=k(),ut=h("div"),Ht.c(),mt=k(),Mt&&Mt.c(),this.h()},l(t){const e=D('[data-svelte="svelte-1njigi4"]',document.head);s=u(e,"META",{name:!0,content:!0}),o=$(),e.forEach(g),c=E(t),i=u(t,"DIV",{class:!0});var a=m(i);f=u(a,"DIV",{class:!0});var l=m(f);S=u(l,"DIV",{class:!0});var n=m(S);U=u(n,"IMG",{src:!0,alt:!0,style:!0,class:!0}),n.forEach(g),C=E(l),G=u(l,"DIV",{class:!0});var r=m(G);N=u(r,"DIV",{class:!0});var d=m(N);O=u(d,"H1",{class:!0});var p=m(O);Q=V(p,bt),p.forEach(g),R=E(d),Y=u(d,"DIV",{class:!0});var h=m(Y);tt=V(h,$t),h.forEach(g),d.forEach(g),et=E(r),st=u(r,"DIV",{class:!0});var v=m(st);at=u(v,"DIV",{class:!0});var b=m(at);Et&&Et.l(b),lt=E(b),Vt&&Vt.l(b),b.forEach(g),nt=E(v),rt=u(v,"DIV",{class:!0});var k=m(rt);for(let t=0;t<zt.length;t+=1)zt[t].l(k);k.forEach(g),v.forEach(g),ot=E(r),ct=u(r,"DIV",{class:!0});var y=m(ct);for(let t=0;t<Bt.length;t+=1)Bt[t].l(y);y.forEach(g),it=E(r),dt=u(r,"DIV",{});var w=m(dt);pt=u(w,"H2",{});var z=m(pt);ft=V(z,Dt),z.forEach(g),w.forEach(g),ht=E(r),ut=u(r,"DIV",{class:!0});var I=m(ut);Ht.l(I),I.forEach(g),r.forEach(g),l.forEach(g),mt=E(a),Mt&&Mt.l(a),a.forEach(g),this.h()},h(){v(s,"name","description"),v(s,"content",a="Detaily o produktu "+t[0].name),l=new H(o),U.src!==(M="https://www.vyprodej-dovoz.cz/boty/boty-fotky/"+t[0].photo)&&v(U,"src",M),v(U,"alt",x=t[0].name),w(U,"width","100%"),v(U,"class","svelte-1dob6pa"),v(S,"class","img svelte-1dob6pa"),v(O,"class","svelte-1dob6pa"),v(Y,"class","brand svelte-1dob6pa"),v(N,"class","title svelte-1dob6pa"),v(at,"class","genders svelte-1dob6pa"),v(rt,"class","season svelte-1dob6pa"),v(st,"class","pictures svelte-1dob6pa"),v(ct,"class","sizes svelte-1dob6pa"),v(ut,"class","btn"),v(G,"class","stats svelte-1dob6pa"),v(f,"class","card svelte-1dob6pa"),v(i,"class","content svelte-1dob6pa")},m(t,e){z(document.head,s),l.m(vt,document.head),z(document.head,o),b(t,c,e),b(t,i,e),z(i,f),z(f,S),z(S,U),z(f,C),z(f,G),z(G,N),z(N,O),z(O,Q),z(N,R),z(N,Y),z(Y,tt),z(G,et),z(G,st),z(st,at),Et&&Et.m(at,null),z(at,lt),Vt&&Vt.m(at,null),z(st,nt),z(st,rt);for(let t=0;t<zt.length;t+=1)zt[t].m(rt,null);z(G,ot),z(G,ct);for(let t=0;t<Bt.length;t+=1)Bt[t].m(ct,null);z(G,it),z(G,dt),z(dt,pt),z(pt,ft),z(G,ht),z(G,ut),Ht.m(ut,null),z(i,mt),Mt&&Mt.m(i,null),gt=!0},p(t,[o]){if((!gt||1&o)&&e!==(e=t[0].name+" | Boty Botičky - Prodej dětských bot")&&(document.title=e),(!gt||1&o&&a!==(a="Detaily o produktu "+t[0].name))&&v(s,"content",a),(!gt||1&o)&&vt!==(vt=`<script type="application/ld+json">${JSON.stringify(n(t[0]))}<\/script>`)&&l.p(vt),(!gt||1&o&&U.src!==(M="https://www.vyprodej-dovoz.cz/boty/boty-fotky/"+t[0].photo))&&v(U,"src",M),(!gt||1&o&&x!==(x=t[0].name))&&v(U,"alt",x),(!gt||1&o)&&bt!==(bt=t[0].name+"")&&I(Q,bt),(!gt||1&o)&&$t!==($t=t[0].brand+"")&&I(tt,$t),1&o&&(kt=t[0].gender.includes("Dívčí")||t[0].gender.includes("Uni")),kt?Et?1&o&&d(Et,1):(Et=L(),Et.c(),d(Et,1),Et.m(at,lt)):Et&&(j(),p(Et,1,1,(()=>{Et=null})),B()),1&o&&(yt=t[0].gender.includes("Chlapecká")||t[0].gender.includes("Uni")),yt?Vt?1&o&&d(Vt,1):(Vt=J(),Vt.c(),d(Vt,1),Vt.m(at,null)):Vt&&(j(),p(Vt,1,1,(()=>{Vt=null})),B()),1&o){let e;for(wt=t[0].season.split(",").map(Z),e=0;e<wt.length;e+=1){const s=A(t,wt,e);zt[e]?(zt[e].p(s,o),d(zt[e],1)):(zt[e]=q(s),zt[e].c(),d(zt[e],1),zt[e].m(rt,null))}for(j(),e=wt.length;e<zt.length;e+=1)It(e);B()}if(3&o){let e;for(jt=t[0].size.split(",").map(_),e=0;e<jt.length;e+=1){const s=P(t,jt,e);Bt[e]?(Bt[e].p(s,o),d(Bt[e],1)):(Bt[e]=F(s),Bt[e].c(),d(Bt[e],1),Bt[e].m(ct,null))}for(j(),e=jt.length;e<Bt.length;e+=1)Tt(e);B()}(!gt||1&o)&&Dt!==(Dt=r(t[0].price)+"")&&I(ft,Dt),Ut===(Ut=St(t))&&Ht?Ht.p(t,o):(Ht.d(1),Ht=Ut(t),Ht&&(Ht.c(),Ht.m(ut,null))),t[0].description?Mt?Mt.p(t,o):(Mt=K(t),Mt.c(),Mt.m(i,null)):Mt&&(Mt.d(1),Mt=null)},i(t){if(!gt){d(Et),d(Vt);for(let t=0;t<wt.length;t+=1)d(zt[t]);for(let t=0;t<jt.length;t+=1)d(Bt[t]);gt=!0}},o(t){p(Et),p(Vt),zt=zt.filter(Boolean);for(let t=0;t<zt.length;t+=1)p(zt[t]);Bt=Bt.filter(Boolean);for(let t=0;t<Bt.length;t+=1)p(Bt[t]);gt=!1},d(t){g(s),g(o),t&&l.d(),t&&g(c),t&&g(i),Et&&Et.d(),Vt&&Vt.d(),T(zt,t),T(Bt,t),Ht.d(),Mt&&Mt.d()}}}const R=!0;async function Y(s){const{slug:a}=s.params;let l=await t.load(this);const n=l.find((t=>e(t.name)===a));return n&&await t.fetchDescription(this,l,n),console.log(n),{product:n}}const Z=t=>t.trim(),_=t=>t.trim();function tt(t,e,s){let a,{product:l}=e;S&&(a=U().size);return t.$$set=t=>{"product"in t&&s(0,l=t.product)},[l,a,t=>{s(1,a=[t])},()=>M.add({...l,size:a})]}export default class extends s{constructor(t){super(),a(this,t,tt,Q,l,{product:0})}}export{Y as preload,R as prerender};
//# sourceMappingURL=[slug]-4b73fc19.js.map
