(this["webpackJsonpmovie-rate"]=this["webpackJsonpmovie-rate"]||[]).push([[0],{35:function(n,t,e){},43:function(n,t,e){"use strict";e.r(t);var c=e(4),a=e(2),i=e.n(a),r=e(11),o=e.n(r),s=e(7),u=e(12),l=e(8),j="(max-width: 1440px)",b="(min-width: 1441px)",f=e(29),h=e(24),d=(e(35),e(25));d.a.initializeApp({apiKey:"AIzaSyBCjEoB2RKgBw9zPHVWS-syRsv1Vm_889w",authDomain:"machinelearning-cfc59.firebaseapp.com",databaseURL:"https://machinelearning-cfc59.firebaseio.com",storageBucket:"machinelearning-cfc59.appspot.com"});var p=d.a;function g(){var n=Object(s.a)(["\n  position: absolute;\n  width: 20%;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 50px;\n"]);return g=function(){return n},n}function v(){var n=Object(s.a)(["\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #484871;\n  width: 150px;\n  height: 50px;\n  border-radius: 20px;\n  border: 2px solid black;\n  color: white;\n  outline: none;\n  cursor: pointer;\n  @media "," {\n    font-size: 20px;\n  }\n  @media "," {\n    font-size: 22px;\n  }\n"]);return v=function(){return n},n}function x(){var n=Object(s.a)(["\n  padding: 5px;\n  @media "," {\n    font-size: 22px;\n  }\n  @media "," {\n    font-size: 26px;\n  }\n"]);return x=function(){return n},n}function O(){var n=Object(s.a)(["\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: -1;\n"]);return O=function(){return n},n}function m(){var n=Object(s.a)(["\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  transform: translateX(-50%);\n  @media "," {\n    width: 350px;\n  }\n  @media "," {\n    width: 400px;\n  }\n"]);return m=function(){return n},n}function w(){var n=Object(s.a)(["\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: 10%;\n  @media "," {\n    font-size: 40px;\n  }\n  @media "," {\n    font-size: 46px;\n  }\n"]);return w=function(){return n},n}var z=l.a.div(w(),j,b),k=l.a.div(m(),j,b),y=l.a.div(O()),S=l.a.label(x(),j,b),C=l.a.button(v(),j,b),E=l.a.img(g()),B=function(){var n=Object(a.useState)([]),t=Object(u.a)(n,2),e=t[0],i=t[1],r=Object(a.useState)(""),o=Object(u.a)(r,2),s=o[0],l=o[1],j=Object(a.useState)(""),b=Object(u.a)(j,2),d=b[0],g=b[1],v=Object(a.useState)(new Map),x=Object(u.a)(v,2),O=x[0],m=x[1],w=Object(a.useState)(""),B=Object(u.a)(w,2),F=B[0],M=B[1];Object(a.useEffect)((function(){var n=p.database().ref().child("movies"),t=[];n.on("value",(function(n){n.forEach((function(n){t.push({value:n.key,label:n.key})})),i(t),l(t[0])}))}),[]),Object(a.useEffect)((function(){N(s)}),[s]);var L=function(n){var t=new Map(O);t.set(s.value,n),m(t);var c=0;e.forEach((function(n,t){n.value===s.value&&(c=t+1)})),e.length>c&&!O.get(e[c].value)?(l(e[c]),g("")):(c=R(),e.length>c&&(l(e[c]),g("")))},N=function(n){p.database().ref().child("movies").child("".concat(n.value)).on("value",(function(n){fetch("https://api.themoviedb.org/3/movie/".concat(n.val(),"?api_key=72ed6ba834b7f05dc61a1e4fc27613dd&language=pl")).then((function(n){return n.json()})).then((function(n){M(n.poster_path)}))}))},R=function(){var n=e.length;return e.forEach((function(t,e){O.get(t.value)||t.value===s.value||(n=e)})),n};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(z,{children:"Wybierz film do oceny:"}),Object(c.jsx)(k,{children:Object(c.jsx)(f.a,{value:s,onChange:l,options:e,placeholder:"Wybierz z listy ...",noResultsText:"Nie znaleziono wynik\xf3w"})}),F?Object(c.jsx)(E,{alt:"poster",src:"https://image.tmdb.org/t/p/original".concat(F)}):null,s?Object(c.jsx)(y,{children:function(){for(var n=[],t=0;t<6;++t)n.push(Object(c.jsxs)(S,{for:t,children:[t,Object(c.jsx)(h.a,{disabled:O.get(s.value),className:"checkboxStyle",name:t,checked:O.get(s.value)?O.get(s.value)==="".concat(t):d==="".concat(t),onClick:function(n){g(n.target.name),L(n.target.name)}})]}));return n.push(Object(c.jsx)("br",{})),n.push(Object(c.jsx)("br",{})),n.push(Object(c.jsxs)(S,{for:-1,children:["Nie znam tego filmu",Object(c.jsx)(h.a,{disabled:O.get(s.value),className:"checkboxStyle",name:-1,checked:O.get(s.value)?"-1"===O.get(s.value):"-1"===d,onClick:function(n){g(n.target.name),L(n.target.name)}})]})),n}()}):null,O.size===e.length&&e.length?Object(c.jsx)(C,{onClick:function(){var n=p.database().ref().child("rating"),t={};O.forEach((function(n,e){t[e]=n})),n.push(t)},children:"Wy\u015blij"}):null]})};function F(){var n=Object(s.a)(["\n  position: absolute;\n  width: 30%;\n  top: 50%;\n  transform: translateY(-50%);\n"]);return F=function(){return n},n}var M=l.a.svg(F());function L(){return Object(c.jsxs)(M,{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 492.316 492.316",children:[Object(c.jsx)("g",{children:Object(c.jsx)("path",{d:"M326.999,467.52h-9.459v-54.943h2.627c3.119,0,5.648-2.531,5.648-5.65s-2.529-5.65-5.648-5.65h-2.627v-21.157h-42.594 c-2.77-0.487-4.101-1.991-4.968-5.347c-2.715-10.508-2.169-20.952,1.62-31.047c4.871-12.984,6.209-27.293,4.088-43.737 c-0.138-1.069-0.279-2.14-0.423-3.21c-1.244-9.333-2.419-18.148-0.474-26.633c4.623-20.137,9.384-43.668,7.32-68.125 c-0.517-6.117-0.871-12.4-1.216-18.475c-0.104-1.866-0.211-3.733-0.319-5.601c-0.07-1.184,0.008-1.801,0.069-2.082 c13.365-6.029,15.894-18.816,17.568-27.285c0.61-3.095,1.024-6.184,1.426-9.171c0.606-4.531,1.181-8.812,2.369-12.753 c3.013-9.968,3.644-25.313,1.937-37.074c-1.229-8.467-5.927-14.572-13.228-17.191c-3.562-1.276-28.597-8.119-26.56-17.482 c1.996-9.168,6.51-22.165,6.724-31.361c0.192-8.432-2.729-22.703-24.465-23.533L246.158,0l-0.259,0.011 c-21.73,0.83-24.651,15.102-24.459,23.532c0.209,9.189,5.386,22.183,7.385,31.359c2.038,9.366-23.664,16.209-27.228,17.487 c-7.298,2.617-11.994,8.723-13.224,17.189c-1.708,11.762-1.075,27.106,1.935,37.074c1.191,3.943,1.764,8.229,2.372,12.762 c0.399,2.984,0.813,6.069,1.424,9.163c1.673,8.452,4.196,21.206,17.569,27.288c0.061,0.282,0.14,0.902,0.069,2.082l-0.314,5.484 c-0.344,6.111-0.701,12.432-1.221,18.587c-2.064,24.458,2.696,47.99,7.319,68.125c1.946,8.484,0.771,17.301-0.472,26.635 c-0.143,1.07-0.285,2.14-0.423,3.207c-2.122,16.447-0.785,30.755,4.088,43.74c3.79,10.098,4.335,20.541,1.62,31.047 c-0.868,3.354-2.198,4.857-4.969,5.346h-42.594v21.232c-2.759,0.373-4.894,2.715-4.894,5.575c0,2.859,2.135,5.2,4.894,5.574v55.021 h-9.456c-6.849,0-12.399,5.551-12.399,12.396c0,6.848,5.551,12.401,12.399,12.401h161.679c6.844,0,12.396-5.555,12.396-12.401 C339.396,473.07,333.843,467.52,326.999,467.52z M301.815,446.926H190.502v-27.488h111.313V446.926z"})}),Object(c.jsx)("g",{}),Object(c.jsx)("g",{}),Object(c.jsx)("g",{}),Object(c.jsx)("g",{}),Object(c.jsx)("g",{}),Object(c.jsx)("g",{}),Object(c.jsx)("g",{}),Object(c.jsx)("g",{}),Object(c.jsx)("g",{}),Object(c.jsx)("g",{}),Object(c.jsx)("g",{}),Object(c.jsx)("g",{}),Object(c.jsx)("g",{}),Object(c.jsx)("g",{}),Object(c.jsx)("g",{})]})}function N(){var n=Object(s.a)(["\n  position: absolute;\n  width: 20%;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 50px;\n"]);return N=function(){return n},n}l.a.svg(N());function R(){var n=Object(s.a)(["\n  position: absolute;\n  background: linear-gradient(45deg, #653131b8, #35070747);\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n"]);return R=function(){return n},n}var W=l.a.div(R());var X=function(){return Object(c.jsxs)(W,{children:[Object(c.jsx)(L,{}),Object(c.jsx)(B,{})]})},I=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,44)).then((function(t){var e=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;e(n),c(n),a(n),i(n),r(n)}))};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(X,{})}),document.getElementById("root")),I()}},[[43,1,2]]]);
//# sourceMappingURL=main.76f451b7.chunk.js.map