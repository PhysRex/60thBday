"use strict";var precacheConfig=[["/60thBday/index.html","fd3b32ff063343419ebd805ee8ba273a"],["/60thBday/static/css/main.554e4130.css","29d289a7df0240bc9038637b68f4867c"],["/60thBday/static/js/main.69a6b64b.js","616322c93903727daacc3847e42fe553"],["/60thBday/static/media/Watercolor-branches-white.afffff48.png","afffff4869f2afef10996db303d742d4"],["/60thBday/static/media/Watercolor-corner-red-flowers.595c635a.png","595c635ac46ab0fbd4b56b4ceb86a104"],["/60thBday/static/media/Watercolor-gold-dots.f7e8e10d.png","f7e8e10d9134e0502c0325f2813dcb2c"],["/60thBday/static/media/background-beige-paper-1024.b977945d.jpg","b977945d6183e66cf00a1b21d8873e87"],["/60thBday/static/media/background-brown-cardboard-1024.a0946ca5.jpg","a0946ca5718aa5da70f818f87a9ed753"],["/60thBday/static/media/background-green-fabric-1024.7b4a2e09.jpg","7b4a2e09580e941c9e6b3d2b8b9fe1c8"],["/60thBday/static/media/background-tan-sand-1024.fb359b87.jpg","fb359b87de2f7482b8f393dcc09f460b"],["/60thBday/static/media/bensound-tenderness.04ff7ff5.mp3","04ff7ff51622432b9c4f8810ec7cfe43"],["/60thBday/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/60thBday/static/media/texturedBackground.305616c6.jpg","305616c604f8034530c8f52baa31c2a7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/60thBday/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});