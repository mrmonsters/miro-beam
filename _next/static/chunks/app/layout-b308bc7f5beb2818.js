(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5667:function(e,t,n){Promise.resolve().then(n.t.bind(n,3994,23))},863:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return isEqualNode},default:function(){return initHeadManager}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function reactElementToDOM(e){let{type:t,props:n}=e,a=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let l=r[e]||e.toLowerCase();"script"===t&&("async"===l||"defer"===l||"noModule"===l)?a[l]=!!n[e]:a.setAttribute(l,n[e])}let{children:l,dangerouslySetInnerHTML:i}=n;return i?a.innerHTML=i.__html||"":l&&(a.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):""),a}function isEqualNode(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function initHeadManager(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,a="";if(r){let{children:e}=r.props;a="string"==typeof e?e:Array.isArray(e)?e.join(""):""}a!==document.title&&(document.title=a),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),a=Number(r.content),l=[];for(let t=0,n=r.previousElementSibling;t<a;t++,n=(null==n?void 0:n.previousElementSibling)||null){var i;(null==n?void 0:null==(i=n.tagName)?void 0:i.toLowerCase())===e&&l.push(n)}let o=t.map(reactElementToDOM).filter(e=>{for(let t=0,n=l.length;t<n;t++){let n=l[t];if(isEqualNode(n,e))return l.splice(t,1),!1}return!0});l.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),o.forEach(e=>n.insertBefore(e,r)),r.content=(a-l.length+o.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2389:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3994:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return handleClientScriptLoad},initScriptLoader:function(){return initScriptLoader},default:function(){return p}});let r=n(1024),a=n(8533),l=r._(n(4887)),i=a._(n(2265)),o=n(1852),u=n(863),d=n(2389),c=new Map,f=new Set,s=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],insertStylesheets=e=>{if(l.default.preinit){e.forEach(e=>{l.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},loadScript=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:l,children:i="",strategy:o="afterInteractive",onError:d,stylesheets:p}=e,y=n||t;if(y&&f.has(y))return;if(c.has(t)){f.add(y),c.get(t).then(r,d);return}let afterLoad=()=>{a&&a(),f.add(y)},h=document.createElement("script"),m=new Promise((e,t)=>{h.addEventListener("load",function(t){e(),r&&r.call(this,t),afterLoad()}),h.addEventListener("error",function(e){t(e)})}).catch(function(e){d&&d(e)});for(let[n,r]of(l?(h.innerHTML=l.__html||"",afterLoad()):i?(h.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",afterLoad()):t&&(h.src=t,c.set(t,m)),Object.entries(e))){if(void 0===r||s.includes(n))continue;let e=u.DOMAttributeNames[n]||n.toLowerCase();h.setAttribute(e,r)}"worker"===o&&h.setAttribute("type","text/partytown"),h.setAttribute("data-nscript",o),p&&insertStylesheets(p),document.body.appendChild(h)};function handleClientScriptLoad(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>loadScript(e))}):loadScript(e)}function loadLazyScript(e){"complete"===document.readyState?(0,d.requestIdleCallback)(()=>loadScript(e)):window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>loadScript(e))})}function addBeforeInteractiveToCache(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function initScriptLoader(e){e.forEach(handleClientScriptLoad),addBeforeInteractiveToCache()}function Script(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:u="afterInteractive",onError:d,stylesheets:c,...s}=e,{updateScripts:p,scripts:y,getIsSsr:h,appDir:m,nonce:b}=(0,i.useContext)(o.HeadManagerContext),_=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||n;_.current||(a&&e&&f.has(e)&&a(),_.current=!0)},[a,t,n]);let g=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{g.current||("afterInteractive"===u?loadScript(e):"lazyOnload"===u&&loadLazyScript(e),g.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(p?(y[u]=(y[u]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:d,...s}]),p(y)):h&&h()?f.add(t||n):h&&!h()&&loadScript(e)),m){if(c&&c.forEach(e=>{l.default.preinit(e,{as:"style"})}),"beforeInteractive"===u)return n?(l.default.preload(n,s.integrity?{as:"script",integrity:s.integrity}:{as:"script"}),i.default.createElement("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(s.dangerouslySetInnerHTML&&(s.children=s.dangerouslySetInnerHTML.__html,delete s.dangerouslySetInnerHTML),i.default.createElement("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...s}])+")"}}));"afterInteractive"===u&&n&&l.default.preload(n,s.integrity?{as:"script",integrity:s.integrity}:{as:"script"})}return null}Object.defineProperty(Script,"__nextScript",{value:!0});let p=Script;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}},function(e){e.O(0,[971,472,744],function(){return e(e.s=5667)}),_N_E=e.O()}]);