System.register(["./index-legacy-q4pOr55z.js"],function(e,t){"use strict";var n,r,s,o,a;return{setters:[e=>{n=e.aO,r=e.aP,s=e.aQ,o=e.aR,a=e.aS}],execute:function(){
/*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
e("startStatusTap",()=>{const e=window;e.addEventListener("statusTap",()=>{n(()=>{const t=e.innerWidth,n=e.innerHeight,i=document.elementFromPoint(t/2,n/2);if(!i)return;const c=r(i);c&&new Promise(e=>s(c,e)).then(()=>{o(async()=>{c.style.setProperty("--overflow","hidden"),await a(c,300),c.style.removeProperty("--overflow")})})})})})}}});
