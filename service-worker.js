if(!self.define){let e,o={};const n=(n,s)=>(n=new URL(n+".js",s).href,o[n]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=o,document.head.appendChild(e)}else e=n,importScripts(n),o()})).then((()=>{let e=o[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(o[i])return;let l={};const t=e=>n(e,i),u={module:{uri:i},exports:l,require:t};o[i]=Promise.all(s.map((e=>u[e]||t(e)))).then((e=>(r(...e),l)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"sweet-portfolio"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.99eef6f7.css",revision:null},{url:"/css/chunk-vendors.bec91ac4.css",revision:null},{url:"/fonts/GreatVibes-Regular.187eed73.ttf",revision:null},{url:"/fonts/SpaceMono-Bold.d4d5be07.ttf",revision:null},{url:"/fonts/SpaceMono-Regular.c0835f06.ttf",revision:null},{url:"/fonts/bootstrap-icons.49c9b852.woff",revision:null},{url:"/fonts/bootstrap-icons.f41d849d.woff2",revision:null},{url:"/img/backrooms.8cc9505a.jpg",revision:null},{url:"/img/blog.7032a7be.jpg",revision:null},{url:"/img/me.7d08330b.png",revision:null},{url:"/img/waves.77b14c5b.png",revision:null},{url:"/index.html",revision:"166f353f3cb0ab7e7ae33612402912a0"},{url:"/js/app.68a832ab.js",revision:null},{url:"/js/chunk-vendors.12bba88f.js",revision:null},{url:"/manifest.json",revision:"e0809a0d0f9683bd69cd3e614930699e"},{url:"/media/reading-room.cdf136a1.mp4",revision:null},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/sweet-logo.png",revision:"17b0592ddacafc46b9053ac928501302"}],{})}));
//# sourceMappingURL=service-worker.js.map
