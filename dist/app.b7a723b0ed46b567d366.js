!function(a){function e(e){for(var r,t,n=e[0],o=e[1],u=e[2],i=0,l=[];i<n.length;i++)t=n[i],c[t]&&l.push(c[t][0]),c[t]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(a[r]=o[r]);for(s&&s(e);l.length;)l.shift()();return p.push.apply(p,u||[]),f()}function f(){for(var e,r=0;r<p.length;r++){for(var t=p[r],n=!0,o=1;o<t.length;o++){var u=t[o];0!==c[u]&&(n=!1)}n&&(p.splice(r--,1),e=i(i.s=t[0]))}return e}var t={},c={0:0},p=[];function i(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return a[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=a,i.c=t,i.d=function(e,r,t){i.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(r,e){if(1&e&&(r=i(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)i.d(t,n,function(e){return r[e]}.bind(null,n));return t},i.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.p="/dist/";var r=window.webpackJsonp=window.webpackJsonp||[],n=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var s=n;p.push([11,1]),f()}({10:function(e,r,t){"use strict";var n=t(2);t.n(n).a},11:function(e,r,t){"use strict";t.r(r);var n=t(1),o=t(4),u=t(5),i=function(r){function e(){var e=null!==r&&r.apply(this,arguments)||this;return e.array=["hello","world","my","new array item"],e}return o.b(e,r),e=o.a([u.a],e)}(u.b),l=(t(10),t(6)),a=Object(l.a)(i,function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",r._l(r.array,function(e){return t("ul",{key:e},[t("li",{staticClass:"testing"},[r._v(r._s(e))])])}))},[],!1,null,null,null);a.options.__file="App.vue";var f=a.exports;new n.default({render:function(e){return e(f)}}).$mount("#app")},2:function(e,r,t){}});