(self.webpackChunkmovies_app=self.webpackChunkmovies_app||[]).push([[9695],{9695:(e,t,n)=>{"use strict";n.r(t),n.d(t,{startInputShims:()=>u});var o=n(2377);const r=new WeakMap,i=(e,t,n,o=0)=>{r.has(e)!==n&&(n?s(e,t,o):l(e,t))},a=e=>e===e.getRootNode().activeElement,s=(e,t,n)=>{const o=t.parentNode,i=t.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,o.appendChild(i),r.set(e,i);const a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${a}px,${n}px,0) scale(0)`},l=(e,t)=>{const n=r.get(e);n&&(r.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},d="input, textarea, [no-blur], [contenteditable]",c=(e,t)=>{if("INPUT"!==e.tagName)return;if(e.parentElement&&"ION-INPUT"===e.parentElement.tagName)return;if(e.parentElement&&e.parentElement.parentElement&&"ION-SEARCHBAR"===e.parentElement.parentElement.tagName)return;const n=e.closest("ion-content");if(null===n)return;const o=n.$ionPaddingTimer;o&&clearTimeout(o),t>0?n.style.setProperty("--keyboard-offset",`${t}px`):n.$ionPaddingTimer=setTimeout(()=>{n.style.setProperty("--keyboard-offset","0px")},120)},u=e=>{const t=document,n=e.getNumber("keyboardHeight",290),r=e.getBoolean("scrollAssist",!0),s=e.getBoolean("hideCaretOnScroll",!0),l=e.getBoolean("inputBlurring",!0),u=e.getBoolean("scrollPadding",!0),m=Array.from(t.querySelectorAll("ion-input, ion-textarea")),p=new WeakMap,f=new WeakMap,h=async e=>{await new Promise(t=>(0,o.c)(e,t));const t=e.shadowRoot||e,l=t.querySelector("input")||t.querySelector("textarea"),d=e.closest("ion-content"),c=d?null:e.closest("ion-footer");if(l){if(d&&s&&!p.has(e)){const t=((e,t,n)=>{if(!n||!t)return()=>{};const r=n=>{a(t)&&i(e,t,n)},s=()=>i(e,t,!1),l=()=>r(!0),d=()=>r(!1);return(0,o.a)(n,"ionScrollStart",l),(0,o.a)(n,"ionScrollEnd",d),t.addEventListener("blur",s),()=>{(0,o.b)(n,"ionScrollStart",l),(0,o.b)(n,"ionScrollEnd",d),t.addEventListener("ionBlur",s)}})(e,l,d);p.set(e,t)}if((d||c)&&r&&!f.has(e)){const t=((e,t,n,r,s)=>{let l;const d=e=>{l=(0,o.p)(e)},c=d=>{if(!l)return;const c=(0,o.p)(d);((e,t,n)=>{if(t&&n){const e=t.x-n.x,o=t.y-n.y;return e*e+o*o>36}return!1})(0,l,c)||a(t)||(d.stopPropagation(),(async(e,t,n,r,a)=>{if(!n&&!r)return;const s=((e,t,n)=>((e,t,n,o)=>{const r=e.top,i=e.bottom,a=t.top,s=a+15,l=.75*Math.min(t.bottom,o-n)-i,d=s-r,c=Math.round(l<0?-l:d>0?-d:0),u=Math.min(c,r-a),m=Math.abs(u);return{scrollAmount:u,scrollDuration:Math.min(400,Math.max(150,m/.3)),scrollPadding:n,inputSafeY:4-(r-s)}})((e.closest("ion-item,[ion-item]")||e).getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight))(e,n||r,a);if(n&&Math.abs(s.scrollAmount)<4)t.focus();else if(i(e,t,!0,s.inputSafeY),t.focus(),(0,o.r)(()=>e.click()),"undefined"!=typeof window){let o;const r=async()=>{void 0!==o&&clearTimeout(o),window.removeEventListener("ionKeyboardDidShow",a),window.removeEventListener("ionKeyboardDidShow",r),n&&await n.scrollByPoint(0,s.scrollAmount,s.scrollDuration),i(e,t,!1,s.inputSafeY),t.focus()},a=()=>{window.removeEventListener("ionKeyboardDidShow",a),window.addEventListener("ionKeyboardDidShow",r)};if(n){const e=await n.getScrollElement();if(s.scrollAmount>e.scrollHeight-e.clientHeight-e.scrollTop)return"password"===t.type?(s.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",a)):window.addEventListener("ionKeyboardDidShow",r),void(o=setTimeout(r,1e3))}r()}})(e,t,n,r,s))};return e.addEventListener("touchstart",d,!0),e.addEventListener("touchend",c,!0),()=>{e.removeEventListener("touchstart",d,!0),e.removeEventListener("touchend",c,!0)}})(e,l,d,c,n);f.set(e,t)}}};l&&(()=>{let e=!0,t=!1;const n=document;(0,o.a)(n,"ionScrollStart",()=>{t=!0}),n.addEventListener("focusin",()=>{e=!0},!0),n.addEventListener("touchend",o=>{if(t)return void(t=!1);const r=n.activeElement;if(!r)return;if(r.matches(d))return;const i=o.target;i!==r&&(i.matches(d)||i.closest(d)||(e=!1,setTimeout(()=>{e||r.blur()},50)))},!1)})(),u&&(e=>{const t=document;t.addEventListener("focusin",t=>{c(t.target,e)}),t.addEventListener("focusout",e=>{c(e.target,0)})})(n);for(const o of m)h(o);t.addEventListener("ionInputDidLoad",e=>{h(e.detail)}),t.addEventListener("ionInputDidUnload",e=>{(e=>{if(s){const t=p.get(e);t&&t(),p.delete(e)}if(r){const t=f.get(e);t&&t(),f.delete(e)}})(e.detail)})}}}]);