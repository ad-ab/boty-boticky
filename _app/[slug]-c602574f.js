import{V as e,S as t,i as s,s as l,D as a,E as n,F as r,B as o,z as c,I as i,e as d,a as u,t as f,q as p,c as m,d as h,b as g,f as v,g as $,h as z,a2 as k,j as y,k as D,r as b,y as E,A as q,L as V,Y as I,Z as w,x as j,n as x,p as B}from"./start-36142068.js";import{G as U,S as C,a as L}from"./Gender-6b3f1023.js";function M(e,t,s){const l=e.slice();return l[4]=t[s],l}function P(e,t,s){const l=e.slice();return l[7]=t[s],l}function S(e){let t,s;return t=new U({props:{type:"Dívčí",large:!0}}),{c(){a(t.$$.fragment)},l(e){n(t.$$.fragment,e)},m(e,l){r(t,e,l),s=!0},i(e){s||(o(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){i(t,e)}}}function G(e){let t,s;return t=new U({props:{type:"Chlapecké",large:!0}}),{c(){a(t.$$.fragment)},l(e){n(t.$$.fragment,e)},m(e,l){r(t,e,l),s=!0},i(e){s||(o(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){i(t,e)}}}function T(e){let t,s;return t=new C({props:{type:e[7],large:!0}}),{c(){a(t.$$.fragment)},l(e){n(t.$$.fragment,e)},m(e,l){r(t,e,l),s=!0},p(e,s){const l={};1&s&&(l.type=e[7]),t.$set(l)},i(e){s||(o(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){i(t,e)}}}function A(e){let t,s;return t=new L({props:{strike:!e[0].stock[e[4]],size:e[4],selectedSize:e[1]&&e[4]==e[1][0]}}),t.$on("click",(function(){return e[2](e[4])})),{c(){a(t.$$.fragment)},l(e){n(t.$$.fragment,e)},m(e,l){r(t,e,l),s=!0},p(s,l){e=s;const a={};1&l&&(a.strike=!e[0].stock[e[4]]),1&l&&(a.size=e[4]),3&l&&(a.selectedSize=e[1]&&e[4]==e[1][0]),t.$set(a)},i(e){s||(o(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){i(t,e)}}}function Q(e){let t,s;return{c(){t=d("div"),s=f("Vyberte si velikost"),this.h()},l(e){t=m(e,"DIV",{style:!0});var l=v(t);s=$(l,"Vyberte si velikost"),l.forEach(h),this.h()},h(){k(t,"padding","8px 16px"),k(t,"border","1px solid darkgray"),k(t,"font-size","13.3333px"),k(t,"color","darkgray")},m(e,l){D(e,t,l),y(t,s)},p:x,d(e){e&&h(t)}}}function F(e){let t,s,l,a;return{c(){t=d("button"),s=f("Přidat do košíku"),this.h()},l(e){t=m(e,"BUTTON",{class:!0});var l=v(t);s=$(l,"Přidat do košíku"),l.forEach(h),this.h()},h(){z(t,"class","svelte-qzs45p")},m(n,r){D(n,t,r),y(t,s),l||(a=B(t,"click",e[3]),l=!0)},p:x,d(e){e&&h(t),l=!1,a()}}}function H(e){let t,s,l,a,n,r,i,I,w,j,x,B,U,C,L,H,N,O,J,K,R,W,X,_,ee,te,se,le,ae,ne,re,oe,ce=e[0].name+"",ie=e[0].brand+"",de=e[0].gender.includes("Dívčí")||e[0].gender.includes("Uni"),ue=e[0].gender.includes("Chlapecké")||e[0].gender.includes("Uni");document.title=t=e[0].name+" | Boty Botičky - Prodej dětských bot";let fe=de&&S(),pe=ue&&G(),me=e[0].season.split(",").map(Y),he=[];for(let t=0;t<me.length;t+=1)he[t]=T(P(e,me,t));const ge=e=>c(he[e],1,1,(()=>{he[e]=null}));let ve=e[0].size.split(",").map(Z),$e=[];for(let t=0;t<ve.length;t+=1)$e[t]=A(M(e,ve,t));const ze=e=>c($e[e],1,1,(()=>{$e[e]=null}));function ke(e,t){return e[1]&&e[0].stock[e[1]]?F:Q}let ye=ke(e),De=ye(e);return{c(){s=d("meta"),a=u(),n=d("div"),r=d("div"),i=d("div"),I=d("img"),x=u(),B=d("div"),U=d("div"),C=d("h1"),L=f(ce),H=u(),N=d("div"),O=f(ie),J=u(),K=d("div"),R=d("div"),fe&&fe.c(),W=u(),pe&&pe.c(),X=u(),_=d("div");for(let e=0;e<he.length;e+=1)he[e].c();ee=u(),te=d("div");for(let e=0;e<$e.length;e+=1)$e[e].c();se=u(),le=d("div"),De.c(),ae=u(),ne=d("div"),re=f("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae\n        vehicula tellus. Morbi id tincidunt dui, non fringilla purus."),this.h()},l(e){const t=p('[data-svelte="svelte-rkmzvj"]',document.head);s=m(t,"META",{name:!0,content:!0}),t.forEach(h),a=g(e),n=m(e,"DIV",{class:!0});var l=v(n);r=m(l,"DIV",{class:!0});var o=v(r);i=m(o,"DIV",{class:!0});var c=v(i);I=m(c,"IMG",{src:!0,alt:!0,style:!0,class:!0}),c.forEach(h),x=g(o),B=m(o,"DIV",{class:!0});var d=v(B);U=m(d,"DIV",{class:!0});var u=v(U);C=m(u,"H1",{class:!0});var f=v(C);L=$(f,ce),f.forEach(h),H=g(u),N=m(u,"DIV",{class:!0});var z=v(N);O=$(z,ie),z.forEach(h),u.forEach(h),J=g(d),K=m(d,"DIV",{class:!0});var k=v(K);R=m(k,"DIV",{class:!0});var y=v(R);fe&&fe.l(y),W=g(y),pe&&pe.l(y),y.forEach(h),X=g(k),_=m(k,"DIV",{class:!0});var D=v(_);for(let e=0;e<he.length;e+=1)he[e].l(D);D.forEach(h),k.forEach(h),ee=g(d),te=m(d,"DIV",{class:!0});var b=v(te);for(let e=0;e<$e.length;e+=1)$e[e].l(b);b.forEach(h),se=g(d),le=m(d,"DIV",{class:!0});var E=v(le);De.l(E),E.forEach(h),ae=g(d),ne=m(d,"DIV",{style:!0});var q=v(ne);re=$(q,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae\n        vehicula tellus. Morbi id tincidunt dui, non fringilla purus."),q.forEach(h),d.forEach(h),o.forEach(h),l.forEach(h),this.h()},h(){z(s,"name","description"),z(s,"content",l="Detaily o produktu "+e[0].name),I.src!==(w="https://www.vyprodej-dovoz.cz/boty/boty-fotky/"+e[0].photo)&&z(I,"src",w),z(I,"alt",j=e[0].name),k(I,"width","100%"),z(I,"class","svelte-qzs45p"),z(i,"class","img svelte-qzs45p"),z(C,"class","svelte-qzs45p"),z(N,"class","brand svelte-qzs45p"),z(U,"class","title svelte-qzs45p"),z(R,"class","genders svelte-qzs45p"),z(_,"class","season svelte-qzs45p"),z(K,"class","pictures svelte-qzs45p"),z(te,"class","sizes svelte-qzs45p"),z(le,"class","btn"),k(ne,"text-align","justify"),z(B,"class","stats svelte-qzs45p"),z(r,"class","card svelte-qzs45p"),z(n,"class","content svelte-qzs45p")},m(e,t){y(document.head,s),D(e,a,t),D(e,n,t),y(n,r),y(r,i),y(i,I),y(r,x),y(r,B),y(B,U),y(U,C),y(C,L),y(U,H),y(U,N),y(N,O),y(B,J),y(B,K),y(K,R),fe&&fe.m(R,null),y(R,W),pe&&pe.m(R,null),y(K,X),y(K,_);for(let e=0;e<he.length;e+=1)he[e].m(_,null);y(B,ee),y(B,te);for(let e=0;e<$e.length;e+=1)$e[e].m(te,null);y(B,se),y(B,le),De.m(le,null),y(B,ae),y(B,ne),y(ne,re),oe=!0},p(e,[a]){if((!oe||1&a)&&t!==(t=e[0].name+" | Boty Botičky - Prodej dětských bot")&&(document.title=t),(!oe||1&a&&l!==(l="Detaily o produktu "+e[0].name))&&z(s,"content",l),(!oe||1&a&&I.src!==(w="https://www.vyprodej-dovoz.cz/boty/boty-fotky/"+e[0].photo))&&z(I,"src",w),(!oe||1&a&&j!==(j=e[0].name))&&z(I,"alt",j),(!oe||1&a)&&ce!==(ce=e[0].name+"")&&b(L,ce),(!oe||1&a)&&ie!==(ie=e[0].brand+"")&&b(O,ie),1&a&&(de=e[0].gender.includes("Dívčí")||e[0].gender.includes("Uni")),de?fe?1&a&&o(fe,1):(fe=S(),fe.c(),o(fe,1),fe.m(R,W)):fe&&(E(),c(fe,1,1,(()=>{fe=null})),q()),1&a&&(ue=e[0].gender.includes("Chlapecké")||e[0].gender.includes("Uni")),ue?pe?1&a&&o(pe,1):(pe=G(),pe.c(),o(pe,1),pe.m(R,null)):pe&&(E(),c(pe,1,1,(()=>{pe=null})),q()),1&a){let t;for(me=e[0].season.split(",").map(Y),t=0;t<me.length;t+=1){const s=P(e,me,t);he[t]?(he[t].p(s,a),o(he[t],1)):(he[t]=T(s),he[t].c(),o(he[t],1),he[t].m(_,null))}for(E(),t=me.length;t<he.length;t+=1)ge(t);q()}if(3&a){let t;for(ve=e[0].size.split(",").map(Z),t=0;t<ve.length;t+=1){const s=M(e,ve,t);$e[t]?($e[t].p(s,a),o($e[t],1)):($e[t]=A(s),$e[t].c(),o($e[t],1),$e[t].m(te,null))}for(E(),t=ve.length;t<$e.length;t+=1)ze(t);q()}ye===(ye=ke(e))&&De?De.p(e,a):(De.d(1),De=ye(e),De&&(De.c(),De.m(le,null)))},i(e){if(!oe){o(fe),o(pe);for(let e=0;e<me.length;e+=1)o(he[e]);for(let e=0;e<ve.length;e+=1)o($e[e]);oe=!0}},o(e){c(fe),c(pe),he=he.filter(Boolean);for(let e=0;e<he.length;e+=1)c(he[e]);$e=$e.filter(Boolean);for(let e=0;e<$e.length;e+=1)c($e[e]);oe=!1},d(e){h(s),e&&h(a),e&&h(n),fe&&fe.d(),pe&&pe.d(),V(he,e),V($e,e),De.d()}}}const N=!0;async function O(t){const{slug:s}=t.params;return{product:(await e.load(this)).find((e=>e.name.replace(/ /g,"-").toLowerCase()===s))}}const Y=e=>e.trim(),Z=e=>e.trim();function J(e,t,s){let l,{product:a}=t;I&&(l=w().size);return e.$$set=e=>{"product"in e&&s(0,a=e.product)},[a,l,e=>{s(1,l=[e])},()=>j.add({...a,size:l})]}export default class extends t{constructor(e){super(),s(this,e,J,H,l,{product:0})}}export{O as preload,N as prerender};
//# sourceMappingURL=[slug]-c602574f.js.map
