(this["webpackJsonpmovie-rate"]=this["webpackJsonpmovie-rate"]||[]).push([[0],{38:function(e,n,t){},48:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var a=t(4),i=t(2),c=t.n(i),r=t(7),o=t.n(r),u=t(9),s=t(10),l=t(11),b="(max-width: 1440px)",f="(min-width: 1441px)",j=t(32),d=t(26),h=(t(38),t(27));h.a.initializeApp({apiKey:"AIzaSyBCjEoB2RKgBw9zPHVWS-syRsv1Vm_889w",authDomain:"machinelearning-cfc59.firebaseapp.com",databaseURL:"https://machinelearning-cfc59.firebaseio.com",storageBucket:"machinelearning-cfc59.appspot.com"});var p=h.a,v=t(19);function O(){var e=Object(s.a)(["\n  position: absolute;\n  top: 15%;\n  max-width: 30%;\n  left: 3%;\n  @media "," {\n    font-size: 18px;\n  }\n  @media "," {\n    font-size: 20px;\n  }\n"]);return O=function(){return e},e}function m(){var e=Object(s.a)(["\n  position: absolute;\n  width: 20%;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 50px;\n"]);return m=function(){return e},e}function g(){var e=Object(s.a)(["\n  position: relative;\n  margin-top: 20px;\n  background: ",";\n  pointer-events: ",";\n  width: 150px;\n  max-width: 30%;\n  height: 50px;\n  border-radius: 20px;\n  border: 2px solid black;\n  color: white;\n  outline: none;\n  cursor: pointer;\n  left: 50%;\n  transform: translateX(-50%);\n  @media "," {\n    font-size: 20px;\n  }\n  @media "," {\n    font-size: 22px;\n  }\n"]);return g=function(){return e},e}function x(){var e=Object(s.a)(["\n  padding: 5px;\n  @media "," {\n    font-size: 22px;\n  }\n  @media "," {\n    font-size: 26px;\n  }\n"]);return x=function(){return e},e}function z(){var e=Object(s.a)(["\n  position: relative;\n  margin-top: 20px;\n  text-align: center;\n"]);return z=function(){return e},e}function w(){var e=Object(s.a)(["\n  position: relative;\n  margin-top: 20px;\n  width: 80%;\n  left: 10%;\n"]);return w=function(){return e},e}function k(){var e=Object(s.a)(["\n  position: relative;\n  text-align: center;\n  @media "," {\n    font-size: 40px;\n  }\n  @media "," {\n    font-size: 46px;\n  }\n"]);return k=function(){return e},e}function y(){var e=Object(s.a)(["\n  position: absolute;\n  top: 15%;\n  left: 35%;\n  width: 30%;\n  height: 80%;\n"]);return y=function(){return e},e}var S=l.a.div(y()),C=l.a.div(k(),b,f),E=l.a.div(w()),F=l.a.div(z()),B=l.a.label(x(),b,f),D=l.a.button(g(),(function(e){return e.disabled?"##4848716e":"#484871"}),(function(e){if(e.disabled)return"none"}),b,f),N=l.a.img(m()),P=l.a.div(O(),b,f),R=function(){var e=Object(i.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],r=Object(i.useState)(""),o=Object(u.a)(r,2),s=o[0],l=o[1],b=Object(i.useState)(""),f=Object(u.a)(b,2),h=f[0],O=f[1],m=Object(i.useState)(new Map),g=Object(u.a)(m,2),x=g[0],z=g[1],w=Object(i.useState)(""),k=Object(u.a)(w,2),y=k[0],R=k[1],W=Object(i.useState)(""),_=Object(u.a)(W,2),I=_[0],L=_[1],M=Object(i.useState)(""),T=Object(u.a)(M,2),A=T[0],J=T[1],K=Object(i.useState)(""),V=Object(u.a)(K,2),G=V[0],H=V[1],U=Object(i.useState)(!1),X=Object(u.a)(U,2),Y=X[0],q=X[1];Object(i.useEffect)((function(){var e=p.database().ref().child("movies"),n=[];e.on("value",(function(e){e.forEach((function(e){n.push({value:e.key,label:e.key})})),c(n)}))}),[]),Object(i.useEffect)((function(){0!==t.length&&l(t[0])}),[t]),Object(i.useEffect)((function(){Z(s)}),[s]);var Q=function(e){var n=new Map(x);n.set(s.value,e),z(n);var a=0;t.forEach((function(e,n){e.value===s.value&&(a=n+1)})),t.length>a&&!x.get(t[a].value)?(l(t[a]),O("")):(a=$(),t.length>a&&(l(t[a]),O("")))},Z=function(e){p.database().ref().child("movies").child("".concat(e.value)).on("value",(function(e){fetch("https://api.themoviedb.org/3/movie/".concat(e.val(),"?api_key=72ed6ba834b7f05dc61a1e4fc27613dd&language=pl")).then((function(e){return e.json()})).then((function(e){R(e.poster_path),L(e.overview),J(e.release_date),e.genres&&H(e.genres[0].name)}))}))},$=function(){var e=t.length;return t.forEach((function(n,t){x.get(n.value)||n.value===s.value||(e=t)})),e};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(S,{children:[Object(a.jsx)(C,{children:"Wybierz film do oceny:"}),Object(a.jsx)(E,{children:Object(a.jsx)(j.a,{value:s,onChange:l,options:t,placeholder:"Wybierz z listy ...",noResultsText:"Nie znaleziono wynik\xf3w"})}),s?Object(a.jsx)(F,{children:function(){for(var e=[],n=0;n<6;++n)e.push(Object(a.jsxs)(B,{for:n,children:[n,Object(a.jsx)(d.a,{className:"checkboxStyle",name:n,checked:x.get(s.value)?x.get(s.value)==="".concat(n):h==="".concat(n),onClick:function(e){O(e.target.name),Q(e.target.name)},children:"test"})]}));return e.push(Object(a.jsx)("br",{})),e.push(Object(a.jsx)("br",{})),e.push(Object(a.jsxs)(B,{for:-1,children:["Nie znam tego filmu",Object(a.jsx)(d.a,{className:"checkboxStyle",name:-1,checked:x.get(s.value)?"-1"===x.get(s.value):"-1"===h,onClick:function(e){O(e.target.name),Q(e.target.name)}})]})),e}()}):null,x.size===t.length&&t.length?Object(a.jsx)(D,{onClick:function(){var e=p.database().ref().child("rating"),n={};x.forEach((function(e,t){n[t]=e})),e.push(n),Object(v.b)("Dzi\u0119kuj\u0119my za ocenienie film\xf3w !"),q(!0)},disabled:Y,children:"Wy\u015blij"}):null]}),Object(a.jsxs)(P,{children:[G?"Gatunek: ".concat(G):null,G?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("br",{}),Object(a.jsx)("br",{})]}):null,A?"Data premiery: ".concat(A):null,A?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("br",{}),Object(a.jsx)("br",{})]}):null,I]}),y?Object(a.jsx)(N,{alt:"poster",src:"https://image.tmdb.org/t/p/original".concat(y)}):null]})};t(48),t(49);var W=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(R,{}),Object(a.jsx)(v.a,{position:"top-center",hideProgressBar:!0,autoClose:!1})]})},_=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,53)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,c=n.getLCP,r=n.getTTFB;t(e),a(e),i(e),c(e),r(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(W,{})}),document.getElementById("root")),_()}},[[50,1,2]]]);
//# sourceMappingURL=main.30d3dadc.chunk.js.map