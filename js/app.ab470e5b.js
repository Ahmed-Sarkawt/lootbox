(function(t){function e(e){for(var o,a,s=e[0],c=e[1],u=e[2],p=0,f=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/lootbox/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},1031:function(t,e,n){},"23df":function(t,e,n){"use strict";n("a577")},"329f":function(t,e,n){},3995:function(t,e,n){"use strict";n("4a4e")},"4a4e":function(t,e,n){},"78fe":function(t,e,n){},"832b":function(t,e,n){"use strict";n("329f")},a077:function(t,e,n){t.exports=n.p+"img/arabella-open.65835cd9.svg"},a577:function(t,e,n){},b3ef:function(t,e,n){"use strict";n("1031")},ba8c:function(t,e,n){},c0a4:function(t,e,n){t.exports=n.p+"img/arabella-closed.5c13f6b3.svg"},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("app-bars",{staticStyle:{position:"absolute",width:"100%","z-index":"-1"}}),n("div",{staticClass:"inset-0",attrs:{id:"main"}},[n("transition",{attrs:{name:"zoom"}},[t.scene===t.AppScene.welcome?n("div",{staticClass:"absolute inset-0 flex justify-center items-center",staticStyle:{"animation-duration":"200ms"}},[n("app-button",{on:{click:function(e){return t.$store.commit("play")}}},[t._v(" Play ")])],1):n("app-boxes",{staticStyle:{"animation-duration":"200ms"}})],1),t.scene===t.AppScene.choiceMade?n("app-popup"):t._e()],1),n("app-bars",{staticStyle:{position:"absolute",width:"100%",bottom:"0","z-index":"-1"},attrs:{prolongs:""}})],1)},i=[],a=n("d4ec"),s=n("bee2"),c=n("262e"),u=n("2caf"),l=n("9ab4"),p=n("1b40"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.bars,(function(e){return n("div",{key:e.color,staticClass:"bar",style:"background-color: "+e.color+"; width: "+e.length+"; margin-left: "+(t.prolongs?"0":"auto")+"; border-"+(t.prolongs?"top-right":"top-left")+"-radius: 4px; border-"+(t.prolongs?"bottom-right":"bottom-left")+"-radius: 4px"})})),0)},b=[],h=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(a["a"])(this,n),t=e.apply(this,arguments),t.bars=[{color:"#F9AB18",length:t.getLength(0)},{color:"#33A7DD",length:t.getLength(1)},{color:"#DA4626",length:t.getLength(2)}],t}return Object(s["a"])(n,[{key:"getLength",value:function(t){return this.prolongs?30+5*(t-1)+"%":30-5*(t-1)+"%"}}]),n}(p["c"]);Object(l["a"])([Object(p["b"])({type:Boolean,default:!1})],h.prototype,"prolongs",void 0),h=Object(l["a"])([Object(p["a"])({name:"AppBars"})],h);var d=h,m=d,v=(n("3995"),n("2877")),x=Object(v["a"])(m,f,b,!1,null,"4a1eb513",null),y=x.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",t._g(t._b({staticClass:"focus:outline-none hover:opacity-60"},"button",t.$attrs,!1),t.$listeners),[n("span",{staticClass:"text-4xl px-8 py-1 border shadow-md rounded-md text-white"},[t._t("default")],2)])},w=[],O=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return n}(p["c"]);O=Object(l["a"])([Object(p["a"])({name:"AppButton"})],O);var j,_=O,A=_,C=(n("b3ef"),Object(v["a"])(A,g,w,!1,null,"694537d3",null)),B=C.exports,S=n("2909"),k=n("b85c"),$=(n("b680"),n("d81d"),n("a630"),n("3ca3"),n("d3b7"),n("ddb0"),n("25f0"),function t(e){Object(a["a"])(this,t),this.id=Math.random().toFixed(7).toString(),this.winnable=e});(function(t){t["item"]="item",t["tryAgain"]="tryAgain",t["nothing"]="nothing"})(j||(j={}));var M=function t(e,n,o){if(Object(a["a"])(this,t),e===j.item&&!o)throw new Error("an item must be provided for a winnable item");this.probability=n,this.item=o,this.type=e},I=(n("b0c0"),function t(e){Object(a["a"])(this,t),this.name=e}),P=[new M(j.item,.15,new I("$10 Arbela Store Credit")),new M(j.item,.1,new I("$15 Arbela Store Credit")),new M(j.item,.01,new I("$20 Arbela Store Credit")),new M(j.item,.01,new I("$25 Arbela Store Credit")),new M(j.item,.01,new I("$50 Arbela Store Credit")),new M(j.item,.2,new I("1LBS Free Shipping")),new M(j.item,.1,new I("2LBS Free Shipping")),new M(j.item,.01,new I("3LBS Free Shipping")),new M(j.item,.15,new I("FREE NassPay MasterCard")),new M(j.tryAgain,.16),new M(j.nothing,.1)];function T(t){var e,n,o=t.length;while(o)n=Math.floor(Math.random()*o--),e=t[o],t[o]=t[n],t[n]=e;return t}var E,F=function(){function t(e,n){Object(a["a"])(this,t);var o=e.reduce((function(t,e){return t+=e.probability,t}),0).toFixed(3);if(console.log(o),"1.000"!==o)throw new Error("sum of all weights is not 1. It must equal one exactly");this.winnables=e,this.numberOfBoxes=n}return Object(s["a"])(t,[{key:"run",value:function(){var t=this,e=Array.from(Array(this.numberOfBoxes).keys()).map((function(){var e,n=Math.random(),o=0,r=Object(k["a"])(T(t.winnables));try{for(r.s();!(e=r.n()).done;){var i=e.value;if(o+=i.probability,n<=o)return new $(i)}}catch(a){r.e(a)}finally{r.f()}}));return e}}]),t}(),L=new F(P,9);(function(t){t["welcome"]="welcome",t["toMakeChoice"]="toMakeChoice",t["choiceMade"]="choiceMade"})(E||(E={}));var z=function(){return{scene:E.welcome,boxes:L.run(),isRevealed:!1,chosenBoxIndex:null}},R={state:z(),mutations:{play:function(t){t.scene=E.toMakeChoice,t.boxes=L.run(),t.isRevealed=!1},choose:function(t,e){t.scene=E.choiceMade,t.isRevealed=!0,t.chosenBoxIndex=e},shuffle:function(t){var e=Object(S["a"])(t.boxes);t.boxes=T(e)},reset:function(t){t.scene=E.welcome,t.chosenBoxIndex=null}}},D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"window sm:w-96 bg-white sm:h-auto w-full h-full sm:rounded-3xl"},[n("p",{staticClass:"title"},[t._v("Open a Chest to Win a Prize")]),n("transition-group",{staticClass:"flex flex-wrap justify-around pb-6",attrs:{tag:"div",name:"box"}},t._l(t.$store.state.boxes,(function(e,o){return n("span",{key:e.id,staticClass:"text-center",staticStyle:{height:"120px"}},[n("img",{staticClass:"rounded-2xl inline-block p-4 mx-4",class:{tilt:t.chosenBoxIndex===o},staticStyle:{"box-shadow":"6px 6px 12px #bcaa8617"},attrs:{width:"80px",height:"",src:t.hasClosed&&t.chosenBoxIndex!==o?t.closedIcon:t.openIcon,alt:"gift box"},on:{click:function(e){return t.choose(o)}}})])})),0)],1)},J=[],N=function(t){Object(c["a"])(o,t);var e=Object(u["a"])(o);function o(){var t;return Object(a["a"])(this,o),t=e.apply(this,arguments),t.openIcon=n("a077"),t.closedIcon=n("c0a4"),t.hasClosed=!1,t.chosenBoxIndex=null,t}return Object(s["a"])(o,[{key:"choose",value:function(t){var e=this;this.chosenBoxIndex=t,setTimeout((function(){return e.$store.commit("choose",t)}),1e3)}},{key:"mounted",value:function(){var t=this;setTimeout((function(){return t.hasClosed=!0}),200),setTimeout((function(){return t.$store.commit("shuffle")}),500)}}]),o}(p["c"]);N=Object(l["a"])([Object(p["a"])({name:"AppBoxes"})],N);var q=N,G=q,U=(n("f892"),Object(v["a"])(G,D,J,!1,null,"a12e1cbc",null)),W=U.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"background flex justify-center items-center"},[n("transition",{attrs:{name:"zoom"}},[t.show?n("div",{staticClass:"bg-white inline-flex flex-col rounded-2xl",staticStyle:{"animation-duration":"200ms"}},[n("p",{staticClass:"title text-4xl font-bold my-4 mx-6"},[t._v(t._s(t.title))]),n("p",{staticClass:"text-2xl text-center"},[t._v(" "+t._s(t.result)+" ")]),n("app-button",{staticClass:"my-8",on:{click:function(e){return t.$store.commit("reset")}}},[t._v(t._s(t.buttonText))])],1):t._e()])],1)},K=[],Q=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(a["a"])(this,n),t=e.apply(this,arguments),t.show=!1,t}return Object(s["a"])(n,[{key:"title",get:function(){var t;switch(null===(t=this.chosenBox)||void 0===t?void 0:t.winnable.type){case j.item:return"Congratulations!!";case j.nothing:return"Uh oh... Not this Time!";case j.tryAgain:return"Cross Fingers and Try Again!";default:return""}}},{key:"chosenBox",get:function(){var t=this.$store.state,e=t.boxes,n=t.chosenBoxIndex;return null!==n?e[n]:null}},{key:"result",get:function(){var t;return(null===(t=this.chosenBox)||void 0===t?void 0:t.winnable.type)===j.item?this.chosenBox.winnable.item.name:""}},{key:"buttonText",get:function(){var t;return(null===(t=this.chosenBox)||void 0===t?void 0:t.winnable.type)===j.tryAgain?"Try Again":"Go Back"}},{key:"mounted",value:function(){this.show=!0}}]),n}(p["c"]);Q=Object(l["a"])([Object(p["a"])({name:"AppPopup",components:{AppButton:B}})],Q);var V=Q,X=V,Y=(n("23df"),Object(v["a"])(X,H,K,!1,null,"76fbb058",null)),Z=Y.exports,tt=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(a["a"])(this,n),t=e.apply(this,arguments),t.state=t.$store.state,t.AppScene=E,t}return Object(s["a"])(n,[{key:"scene",get:function(){return this.state.scene}}]),n}(p["c"]);tt=Object(l["a"])([Object(p["a"])({name:"App",components:{AppPopup:Z,AppBoxes:W,AppButton:B,AppBars:y}})],tt);var et=tt,nt=et,ot=(n("832b"),Object(v["a"])(nt,r,i,!1,null,"ca64f228",null)),rt=ot.exports,it=n("2f62");n("ba8c");o["a"].config.productionTip=!1,o["a"].use(it["a"]),new o["a"]({store:new it["a"].Store(R),render:function(t){return t(rt)}}).$mount("#app")},f892:function(t,e,n){"use strict";n("78fe")}});
//# sourceMappingURL=app.ab470e5b.js.map