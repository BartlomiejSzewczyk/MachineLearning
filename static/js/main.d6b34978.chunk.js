(this["webpackJsonpmovie-rate"]=this["webpackJsonpmovie-rate"]||[]).push([[0],{35:function(e,n,t){},43:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var a=t(4),i=t(2),c=t.n(i),r=t(12),o=t.n(r),u=t(10),s=t(8),l=t(9),b="(max-width: 1440px)",f="(min-width: 1441px)",j=t(29),d=t(24),h=(t(35),t(25));h.a.initializeApp({apiKey:"AIzaSyBCjEoB2RKgBw9zPHVWS-syRsv1Vm_889w",authDomain:"machinelearning-cfc59.firebaseapp.com",databaseURL:"https://machinelearning-cfc59.firebaseio.com",storageBucket:"machinelearning-cfc59.appspot.com"});var p=h.a;function v(){var e=Object(s.a)(["\n  position: absolute;\n  top: 10%;\n  max-width: 30%;\n  left: 3%;\n  @media "," {\n    font-size: 18px;\n  }\n  @media "," {\n    font-size: 20px;\n  }\n"]);return v=function(){return e},e}function g(){var e=Object(s.a)(["\n  position: absolute;\n  width: 20%;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 50px;\n"]);return g=function(){return e},e}function m(){var e=Object(s.a)(["\n  position: relative;\n  margin-top: 20px;\n  background: #484871;\n  width: 150px;\n  max-width: 30%;\n  height: 50px;\n  border-radius: 20px;\n  border: 2px solid black;\n  color: white;\n  outline: none;\n  cursor: pointer;\n  left: 50%;\n  transform: translateX(-50%);\n  @media "," {\n    font-size: 20px;\n  }\n  @media "," {\n    font-size: 22px;\n  }\n"]);return m=function(){return e},e}function x(){var e=Object(s.a)(["\n  padding: 5px;\n  @media "," {\n    font-size: 22px;\n  }\n  @media "," {\n    font-size: 26px;\n  }\n"]);return x=function(){return e},e}function O(){var e=Object(s.a)(["\n  position: relative;\n  margin-top: 20px;\n  text-align: center;\n"]);return O=function(){return e},e}function w(){var e=Object(s.a)(["\n  position: relative;\n  margin-top: 20px;\n  width: 80%;\n  left: 10%;\n"]);return w=function(){return e},e}function z(){var e=Object(s.a)(["\n  position: relative;\n  text-align: center;\n  @media "," {\n    font-size: 40px;\n  }\n  @media "," {\n    font-size: 46px;\n  }\n"]);return z=function(){return e},e}function k(){var e=Object(s.a)(["\n  position: absolute;\n  top: 10%;\n  left: 35%;\n  width: 30%;\n  height: 80%;\n"]);return k=function(){return e},e}var y=l.a.div(k()),S=l.a.div(z(),b,f),C=l.a.div(w()),E=l.a.div(O()),F=l.a.label(x(),b,f),B=l.a.button(m(),b,f),N=l.a.img(g()),R=l.a.div(v(),b,f),W=function(){var e=Object(i.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],r=Object(i.useState)(""),o=Object(u.a)(r,2),s=o[0],l=o[1],b=Object(i.useState)(""),f=Object(u.a)(b,2),h=f[0],v=f[1],g=Object(i.useState)(new Map),m=Object(u.a)(g,2),x=m[0],O=m[1],w=Object(i.useState)(""),z=Object(u.a)(w,2),k=z[0],W=z[1],_=Object(i.useState)(""),D=Object(u.a)(_,2),I=D[0],L=D[1],M=Object(i.useState)(""),P=Object(u.a)(M,2),T=P[0],A=P[1],J=Object(i.useState)(""),K=Object(u.a)(J,2),V=K[0],G=K[1];Object(i.useEffect)((function(){var e=p.database().ref().child("movies"),n=[];e.on("value",(function(e){e.forEach((function(e){n.push({value:e.key,label:e.key})})),c(n),l(n[0])}))}),[]),Object(i.useEffect)((function(){U(s)}),[s]);var H=function(e){var n=new Map(x);n.set(s.value,e),O(n);var a=0;t.forEach((function(e,n){e.value===s.value&&(a=n+1)})),t.length>a&&!x.get(t[a].value)?(l(t[a]),v("")):(a=X(),t.length>a&&(l(t[a]),v("")))},U=function(e){p.database().ref().child("movies").child("".concat(e.value)).on("value",(function(e){fetch("https://api.themoviedb.org/3/movie/".concat(e.val(),"?api_key=72ed6ba834b7f05dc61a1e4fc27613dd&language=pl")).then((function(e){return e.json()})).then((function(e){W(e.poster_path),L(e.overview),A(e.release_date),G(e.genres[0].name)}))}))},X=function(){var e=t.length;return t.forEach((function(n,t){x.get(n.value)||n.value===s.value||(e=t)})),e};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(y,{children:[Object(a.jsx)(S,{children:"Wybierz film do oceny:"}),Object(a.jsx)(C,{children:Object(a.jsx)(j.a,{value:s,onChange:l,options:t,placeholder:"Wybierz z listy ...",noResultsText:"Nie znaleziono wynik\xf3w"})}),s?Object(a.jsx)(E,{children:function(){for(var e=[],n=0;n<6;++n)e.push(Object(a.jsxs)(F,{for:n,children:[n,Object(a.jsx)(d.a,{disabled:x.get(s.value),className:"checkboxStyle",name:n,checked:x.get(s.value)?x.get(s.value)==="".concat(n):h==="".concat(n),onClick:function(e){v(e.target.name),H(e.target.name)}})]}));return e.push(Object(a.jsx)("br",{})),e.push(Object(a.jsx)("br",{})),e.push(Object(a.jsxs)(F,{for:-1,children:["Nie znam tego filmu",Object(a.jsx)(d.a,{disabled:x.get(s.value),className:"checkboxStyle",name:-1,checked:x.get(s.value)?"-1"===x.get(s.value):"-1"===h,onClick:function(e){v(e.target.name),H(e.target.name)}})]})),e}()}):null,x.size===t.length&&t.length?Object(a.jsx)(B,{onClick:function(){var e=p.database().ref().child("rating"),n={};x.forEach((function(e,t){n[t]=e})),e.push(n)},children:"Wy\u015blij"}):null]}),Object(a.jsxs)(R,{children:[V?"Gatunek: ".concat(V):null,V?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("br",{}),Object(a.jsx)("br",{})]}):null,T?"Data premiery: ".concat(T):null,T?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("br",{}),Object(a.jsx)("br",{})]}):null,I]}),k?Object(a.jsx)(N,{alt:"poster",src:"https://image.tmdb.org/t/p/original".concat(k)}):null]})};t(43);var _=function(){return Object(a.jsx)(W,{})},D=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,c=n.getLCP,r=n.getTTFB;t(e),a(e),i(e),c(e),r(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(_,{})}),document.getElementById("root")),D()}},[[44,1,2]]]);
//# sourceMappingURL=main.d6b34978.chunk.js.map