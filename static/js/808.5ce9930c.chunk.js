"use strict";(self.webpackChunktoolspros=self.webpackChunktoolspros||[]).push([[808],{808:function(e,t,n){n.r(t),n.d(t,{default:function(){return Y}});var r,o,a,i,u,l=n(885),c=n(791),s=n(504);function f(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}!function(e){e.Center="center",e.Right="right",e.Left="left"}(r||(r={})),function(e){e.Next="next",e.Prev="prev",e.Up="up",e.Down="down"}(o||(o={})),function(e){e.TopLeft="TopLeft",e.TopCenter="TopCenter",e.TopRight="TopRight",e.CenterLeft="CenterLeft",e.CenterCenter="CenterCenter",e.CenterRight="CenterRight",e.BottomLeft="BottomLeft",e.BottomCenter="BottomCenter",e.BottomRight="BottomRight"}(a||(a={})),function(e){e.page="page",e.remainder="remainder"}(i||(i={})),function(e){e.EaseLinear="easeLinear",e.EaseQuad="easeQuad",e.EaseQuadIn="easeQuadIn",e.EaseQuadOut="easeQuadOut",e.EaseQuadInOut="easeQuadInOut",e.EaseCubic="easeCubic",e.EaseCubicIn="easeCubicIn",e.EaseCubicOut="easeCubicOut",e.EaseCubicInOut="easeCubicInOut",e.EasePoly="easePoly",e.EasePolyIn="easePolyIn",e.EasePolyOut="easePolyOut",e.EasePolyInOut="easePolyInOut",e.EaseSin="easeSin",e.EaseSinIn="easeSinIn",e.EaseSinOut="easeSinOut",e.EaseSinInOut="easeSinInOut",e.EaseExp="easeExp",e.EaseExpIn="easeExpIn",e.EaseExpOut="easeExpOut",e.EaseExpInOut="easeExpInOut",e.EaseCircle="easeCircle",e.EaseCircleIn="easeCircleIn",e.EaseCircleOut="easeCircleOut",e.EaseCircleInOut="easeCircleInOut",e.EaseBack="easeBack",e.EaseBackIn="easeBackIn",e.EaseBackOut="easeBackOut",e.EaseBackInOut="easeBackInOut",e.EaseBounce="easeBounce",e.EaseBounceIn="easeBounceIn",e.EaseBounceOut="easeBounceOut",e.EaseBounceInOut="easeBounceInOut",e.EaseElastic="easeElastic",e.EaseElasticIn="easeElasticIn",e.EaseElasticOut="easeElasticOut",e.EaseElasticInOut="easeElasticInOut"}(u||(u={}));var p=function(e,t,n,r,o,a,i,u,l){var c=function(e,t){return"".concat(t?100/(3*e):100/e,"%")}(e,r),s=n?1:0,f="fade"===a?200:500;return{width:c,flex:1,height:l?"100%":"auto",padding:"0 ".concat(o?o/2:0,"px"),transition:a?"".concat(i||f,"ms ease 0s"):"none",transform:"".concat("zoom"===a?"scale(".concat(t?1:u||.85,")"):"initial"),touchAction:"none",opacity:"fade"===a?s:1}},m=function(e){var t=e.count,n=e.children,o=e.currentSlide,a=e.index,i=e.isCurrentSlide,u=e.typeOfSlide,l=e.wrapAround,s=e.cellSpacing,d=e.animation,m=e.speed,g=e.slidesToShow,v=e.zoomScale,b=e.cellAlign,y=e.setFrameHeight,h=e.frameHeight,C=e.visibleHeights,S=e.adaptiveHeight,E=l?function(e,t,n){return"prev-cloned"===n?e-t:"next-cloned"===n?e+t:e}(a,t,u):a,O=function(e,t,n,o){return 1===n?t===e:o===r.Left?t<e+n&&t>=e:o===r.Center?t>=e-n/2&&t<=e||t>e&&t<=e+n/2:o===r.Right&&t<=e&&t>e-n}(o,E,g,b),w=(0,c.useRef)(null);return(0,c.useEffect)((function(){var e=w.current;if(e){var t,n=null===(t=e.getBoundingClientRect())||void 0===t?void 0:t.height;O?e.removeAttribute("inert"):e.setAttribute("inert","true"),S&&O&&1===g?n!==h&&y(n):S&&O&&g>1?C.current=[].concat(f(C.current),[{height:n,slideIndex:E}]):S&&!O&&C.current.findIndex((function(e){return e.slideIndex===E}))>-1&&(C.current=C.current.filter((function(e){return e.slideIndex!==E})))}}),[O]),(0,c.useEffect)((function(){if(S&&g>1){var e=C.current.reduce((function(e,t){return e>=t.height?e:t.height}),0);e!==h&&y(e)}}),[S,C.current]),c.createElement("div",{ref:w,className:"slide".concat(u?" ".concat(u):"").concat(O?" slide-visible":""),style:p(t,i,O,l,s,d,m,v,S)},n)},g=function(e,t,n,o,a){if(o===r.Left){if(a){var i=100/(3*e);return t-i*(n-1)-i}return-(100/e*n+t)}if(o===r.Center){if(a){var u=100/(3*e);return t-u*(n-1)-u}return t-100/e*n}if(o===r.Right){if(a){var l=100/(3*e);return t-l*(n-1)-l}return t-100/e*n}return t},v=function(e,t,n,o,a,i,u,l,s){var f=c.Children.count(e),d=function(e,t,n){var r=t||1;return"".concat(n?100*e/r*3:100*e/r,"%")}(f,o,i),p=function(e,t,n,o,a,i){if(!e||e===r.Left){var u=g(n,a?100/(3*n)*-n:0,o,e,a),l=i?"calc(".concat(u,"% - ").concat(i,"px)"):"".concat(u,"%");return"translate3d(".concat(l,", 0, 0)")}if(e===r.Right){var c=g(n,a?100/(3*n)*-n+100/(3*n)*(t-1):t>1?100/n*(t-1):0,o,e,a),s=i?"calc(".concat(c,"% - ").concat(i,"px)"):"".concat(c,"%");return"translate3d(".concat(s,", 0, 0)")}if(e===r.Center){var f=t>1?100/n*Math.floor(t/2):0,d=t%2===0?f-100/n/2:f,p=100/(3*n)*-n+Math.floor(t/2)*(100/(3*n)),m=g(n,a?t%2===0?p-100/(3*n)/2:p:d,o,e,a),v=i?"calc(".concat(m,"% - ").concat(i,"px)"):"".concat(m,"%");return"translate3d(".concat(v,", 0, 0)")}return"translate3d(0, 0, 0)"}(a||r.Left,o||1,f,t,i,l);return{width:d,textAlign:"left",transition:n&&"fade"!==s?"".concat(u||500,"ms ease 0s"):"none",transform:p,display:"flex"}},b=function(e){switch(e){case a.TopLeft:return{position:"absolute",top:0,left:0};case a.TopCenter:return{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",WebkitTransform:"translateX(-50%)",msTransform:"translateX(-50%)"};case a.TopRight:return{position:"absolute",top:0,right:0};case a.CenterLeft:return{position:"absolute",top:"50%",left:0,transform:"translateY(-50%)",WebkitTransform:"translateY(-50%)",msTransform:"translateY(-50%)"};case a.CenterCenter:return{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",WebkitTransform:"translate(-50%, -50%)",msTransform:"translate(-50%, -50%)"};case a.CenterRight:return{position:"absolute",top:"50%",right:0,transform:"translateY(-50%)",WebkitTransform:"translateY(-50%)",msTransform:"translateY(-50%)"};case a.BottomLeft:return{position:"absolute",bottom:0,left:0};case a.BottomCenter:return{position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)",WebkitTransform:"translateX(-50%)",msTransform:"translateX(-50%)"};case a.BottomRight:return{position:"absolute",bottom:0,right:0};default:return{position:"absolute",top:0,left:0}}};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=[{funcName:"renderTopLeftControls",key:a.TopLeft},{funcName:"renderTopCenterControls",key:a.TopCenter},{funcName:"renderTopRightControls",key:a.TopRight},{funcName:"renderCenterLeftControls",key:a.CenterLeft},{funcName:"renderCenterCenterControls",key:a.CenterCenter},{funcName:"renderCenterRightControls",key:a.CenterRight},{funcName:"renderBottomLeftControls",key:a.BottomLeft},{funcName:"renderBottomCenterControls",key:a.BottomCenter},{funcName:"renderBottomRightControls",key:a.BottomRight}],E=function(e,t,n,r,o,a,i){return e.withoutControls?null:S.map((function(u){var l;return e[u.funcName]&&"function"===typeof e[u.funcName]?c.createElement("div",{key:u.funcName,className:["slider-control-".concat(u.key.toLowerCase()),e.defaultControlsConfig.containerClassName||""].join(" ").trim(),style:h({},b(u.key))},null===(l=e[u.funcName])||void 0===l?void 0:l.call(e,{cellAlign:e.cellAlign,cellSpacing:e.cellSpacing,currentSlide:n,defaultControlsConfig:e.defaultControlsConfig||{},goToSlide:function(e){return r(e)},nextSlide:function(){return o()},previousSlide:function(){return a()},scrollMode:e.scrollMode,slideCount:t,slidesToScroll:i,slidesToShow:e.slidesToShow||1,vertical:e.vertical,wrapAround:e.wrapAround})):c.createElement(c.Fragment,{key:u.funcName})}))};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(e){return{border:0,background:"rgba(0,0,0,0.4)",color:"white",padding:10,textTransform:"uppercase",opacity:e?.3:1,cursor:e?"not-allowed":"pointer"}},A=function(e){var t=e.defaultControlsConfig||{},n=t.prevButtonClassName,r=t.prevButtonStyle,o=void 0===r?{}:r,a=t.prevButtonText,i=function(e){var t=e.currentSlide,n=e.slideCount,r=e.slidesToShow,o=e.wrapAround;return!(o&&r<n)&&!o&&0===t}(e);return c.createElement("button",{className:n,style:w(w({},x(i)),o),disabled:i,onClick:function(t){t.preventDefault(),null===e||void 0===e||e.previousSlide()},"aria-label":"previous",type:"button"},a||"Prev")},I=function(e){var t=e.defaultControlsConfig,n=t.nextButtonClassName,r=t.nextButtonStyle,o=void 0===r?{}:r,a=t.nextButtonText,i=function(e){var t=e.currentSlide,n=e.slideCount,r=e.slidesToShow,o=e.slidesToScroll,a=e.wrapAround;return!(a&&r<n)&&!a&&!(t<n-o)}(e);return c.createElement("button",{className:n,style:w(w({},x(i)),o),disabled:i,onClick:function(t){t.preventDefault(),e.nextSlide()},"aria-label":"next",type:"button"},a||"Next")},k=function(e){var t=function(e,t,n){for(var r=[],o=0===t?1:t,a=0;a<e;a+=o)n===i.remainder&&a+o>e?r.push(a-(o-(e-a))):r.push(a);return r}(e.slideCount,e.slidesToScroll,e.scrollMode),n=e.defaultControlsConfig,r=n.pagingDotsContainerClassName,o=n.pagingDotsClassName,a=n.pagingDotsStyle,u=void 0===a?{}:a;return c.createElement("ul",{className:r,style:{position:"relative",top:-10,display:"flex",margin:0,padding:0,listStyleType:"none"}},t.map((function(n,r){var a,i=e.currentSlide===n||e.currentSlide-e.slideCount===n||e.currentSlide+e.slideCount===n;return e.currentSlide<n&&e.currentSlide>t[r-1]&&(i=!0),c.createElement("li",{key:n,className:i?"paging-item active":"paging-item"},c.createElement("button",{className:o,type:"button",style:w(w({},(a=i,{cursor:"pointer",opacity:a?1:.5,background:"transparent",border:"none",fill:"black"})),u),onClick:e.goToSlide.bind(null,n),"aria-label":"slide ".concat(n+1," bullet"),"aria-selected":i},c.createElement("svg",{className:"paging-dot",width:"6",height:"6","aria-hidden":"true",focusable:"false"},c.createElement("circle",{cx:"3",cy:"3",r:"3"}))))})))},j={position:"absolute",width:"1px",height:"1px",overflow:"hidden",padding:0,margin:"-1px",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},B=function(e){var t=e.message,n=e.ariaLive,r=void 0===n?"polite":n;return c.createElement("div",{"aria-live":r,"aria-atomic":"true",style:j,tabIndex:-1},t)},P={adaptiveHeight:!1,afterSlide:function(){},autoGenerateStyleTag:!0,autoplay:!1,autoplayInterval:3e3,autoplayReverse:!1,beforeSlide:function(){},cellAlign:r.Left,cellSpacing:0,defaultControlsConfig:{},disableAnimation:!1,disableEdgeSwiping:!1,dragging:!0,easing:u.EaseCircleOut,edgeEasing:u.EaseElasticOut,enableKeyboardControls:!1,frameAriaLabel:"carousel-slider",keyCodeConfig:{nextSlide:[39,68,38,87],previousSlide:[37,65,40,83],firstSlide:[81],lastSlide:[69],pause:[32]},onDragStart:function(){},onDrag:function(){},onDragEnd:function(){},pauseOnHover:!0,renderAnnounceSlideMessage:function(e){var t=e.currentSlide,n=e.count;return"Slide ".concat(t+1," of ").concat(n)},renderBottomCenterControls:function(e){return c.createElement(k,e)},renderCenterLeftControls:function(e){return c.createElement(A,e)},renderCenterRightControls:function(e){return c.createElement(I,e)},scrollMode:"page",slideIndex:0,slidesToScroll:1,slidesToShow:1,speed:500,style:{},swiping:!0,vertical:!1,withoutControls:!1,wrapAround:!1,children:c.createElement(c.Fragment,null)},R=function(e,t,n){var r=e,o=t;return r<0?r+=n:r>n-1&&(r-=n),o<0?o+=n:o>n-1&&(o-=n),[r,o]};function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return H(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var _=function(e){var t=c.Children.count(e.children),n=M((0,c.useState)(e.autoplayReverse?t-e.slidesToShow:e.slideIndex),2),r=n[0],o=n[1],a=M((0,c.useState)(!1),2),u=a[0],l=a[1],s=M((0,c.useState)(!1),2),f=s[0],d=s[1],p=M((0,c.useState)(!1),2),g=p[0],b=p[1],y=M((0,c.useState)(0),2),h=y[0],C=y[1],S=M((0,c.useState)(0),2),O=S[0],w=S[1],T=(0,c.useRef)([]),x=M((0,c.useState)(null),2),A=x[0],I=x[1],k=(0,c.useRef)(null),j=(0,c.useRef)(!1),P=(0,c.useRef)(0),N=(0,c.useRef)(null),D=(0,c.useRef)(null),H=(0,c.useRef)(!0);(0,c.useEffect)((function(){return H.current=!0,function(){H.current=!1}}),[]),(0,c.useEffect)((function(){document.querySelectorAll(".slider-list img").forEach((function(e){return e.setAttribute("draggable","false")}))}),[]);var _="fade"===e.animation?e.slidesToShow:e.slidesToScroll,Q=(k.current||0)/e.slidesToShow/2,W=e.innerRef||N,X=(0,c.useCallback)((function(e){var n=null!==e&&void 0!==e?e:r;return n<0?n+t:n===t?0:n}),[t,r]),F=function(n){var a=M(R(r,r-_,t),1)[0],i=X(n);"number"===typeof n&&e.beforeSlide(a,i),!e.disableAnimation&&l(!0),o(null!==n&&void 0!==n?n:r),setTimeout((function(){H.current&&("number"===typeof n&&e.afterSlide(i),!e.disableAnimation&&l(!1))}),e.disableAnimation?40:e.speed||500)},z=function(){if(e.wrapAround||r<t-e.slidesToScroll){var n=function(e,t,n,r,o){return!t&&e===i.remainder&&r<n+2*o?n+(r-(n+o)):n+o}(e.scrollMode,e.wrapAround,r,t,e.slidesToScroll);F(n)}else F()},U=function(){if(e.wrapAround||r>0){var t=function(e,t,n,r){return!t&&e===i.remainder&&n-r<0?0:n-r}(e.scrollMode,e.wrapAround,r,e.slidesToScroll);F(t)}else F()};(0,c.useEffect)((function(){"number"!==typeof e.slideIndex||e.autoplayReverse||F(e.slideIndex)}),[e.slideIndex]),(0,c.useEffect)((function(){e.autoplay&&!u&&e.wrapAround&&(r>t?(o(r-t),null!==D&&void 0!==D&&D.current&&clearTimeout(D.current)):r<0&&(o(t- -r),null!==D&&void 0!==D&&D.current&&clearTimeout(D.current)))}),[u,r]),(0,c.useEffect)((function(){return e.autoplay&&!f&&(D.current=setTimeout((function(){e.autoplayReverse?(!e.wrapAround&&r>0||e.wrapAround)&&U():(!e.wrapAround&&r<t-e.slidesToShow||e.wrapAround)&&z()}),e.autoplayInterval)),e.autoplay&&f&&null!==D&&void 0!==D&&D.current&&clearTimeout(D.current),function(){D.current&&clearTimeout(D.current)}}),[r,f]),(0,c.useEffect)((function(){if(e.wrapAround&&!e.autoplay){var n=e.disableAnimation?0:e.speed||500;r<=-e.slidesToShow?setTimeout((function(){H.current&&o(t- -r)}),n+10):r>=t&&setTimeout((function(){H.current&&o(r-t)}),n+10)}}),[r]),(0,c.useEffect)((function(){if(e.enableKeyboardControls&&A&&j.current){switch(A){case"nextSlide":z();break;case"previousSlide":U();break;case"firstSlide":o(0);break;case"lastSlide":o(t-e.slidesToShow);break;case"pause":if(f&&e.autoplay){d(!1);break}if(e.autoplay){d(!0);break}}I(null)}}),[A]);var Y=function(t){if(e.enableKeyboardControls&&j.current&&t.keyCode){var n=e.keyCodeConfig;for(var r in n){var o;null!==(o=n[r])&&void 0!==o&&o.includes(t.keyCode)&&I(r)}}};(0,c.useEffect)((function(){var t,n,r;return N&&N.current?k.current=N.current.offsetWidth:e.innerRef&&(k.current=e.innerRef.current.offsetWidth),e.enableKeyboardControls&&(t=document,n="keydown",r=Y,null!==t&&"undefined"!==typeof t&&(t.addEventListener?t.addEventListener(n,r,!1):t.attachEvent?t.attachEvent("on".concat(n),r):t["on".concat(n)]=r)),function(){!function(e,t,n){null!==e&&"undefined"!==typeof e&&(e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent?e.detachEvent("on".concat(t),n):e["on".concat(t)]=null)}(document,"keydown",Y)}}),[]);var K=function(t){if(e.dragging&&g){if(b(!1),e.onDragEnd(t),Math.abs(h)<=Q)return F(),C(0),void(P.current=0);h>0?z():U(),C(0),P.current=0}},Z=function(n){if(e.dragging&&g){var o=.75*n,a=h+(o-P.current);Math.abs(h)>Q?K():(!e.wrapAround&&e.disableEdgeSwiping&&(r<=0&&a<=0||a>0&&r>=t-e.slidesToShow)||0!==P.current&&C(a),P.current=o)}},q=function(e){null===e||void 0===e||e.preventDefault(),K(e)},$=function(n){return c.Children.map(e.children,(function(o,a){var i=e.wrapAround?r===a||r===a+t||r===a-t:r===a;return c.createElement(m,{key:"".concat(n,"-").concat(a),count:t,currentSlide:r,index:a,isCurrentSlide:i,typeOfSlide:n,wrapAround:e.wrapAround,cellSpacing:e.cellSpacing,animation:e.animation,slidesToShow:e.slidesToShow,speed:e.speed,zoomScale:e.zoomScale,cellAlign:e.cellAlign,setFrameHeight:w,frameHeight:O,visibleHeights:T,adaptiveHeight:e.adaptiveHeight},o)}))},G=M(R(r,r-_,t),1)[0];return c.createElement("div",{className:"slider-container",style:{position:"relative"},onMouseEnter:function(){e.pauseOnHover&&d(!0)},onMouseLeave:function(){e.pauseOnHover&&d(!1)}},c.createElement(B,{ariaLive:e.autoplay&&!f?"off":"polite",message:e.renderAnnounceSlideMessage({currentSlide:G,count:t})}),c.createElement("div",{className:["slider-frame",e.className||""].join(" ").trim(),style:L({overflow:"hidden",width:"100%",position:"relative",outline:"none",height:e.adaptiveHeight?"".concat(O,"px"):"auto"},e.style),"aria-label":e.frameAriaLabel,role:"region",tabIndex:0,onFocus:function(){return j.current=!0},onBlur:function(){return j.current=!1},ref:e.innerRef||N,onMouseUp:q,onMouseDown:function(t){var n;e.dragging&&(null===W||void 0===W||null===(n=W.current)||void 0===n||n.focus(),b(!0),e.onDragStart(t))},onMouseMove:function(t){var n;if(e.dragging&&g){e.onDrag(t);var r=t.clientX-((null===(n=W.current)||void 0===n?void 0:n.getBoundingClientRect().left)||0),o=((null===k||void 0===k?void 0:k.current)||0)-r;Z(o)}},onMouseLeave:q,onTouchStart:function(t){e.swiping&&(b(!0),e.onDragStart(t))},onTouchEnd:K,onTouchMove:function(t){if(e.dragging&&g){e.onDragStart(t);var n=((null===k||void 0===k?void 0:k.current)||0)-t.touches[0].pageX;Z(n)}}},c.createElement("div",{className:"slider-list",style:v(e.children,r,u,e.slidesToShow,e.cellAlign,e.wrapAround,e.speed,h,e.animation)},e.wrapAround?$("prev-cloned"):null,$(),e.wrapAround?$("next-cloned"):null)),E(e,t,r,F,z,U,_))};_.defaultProps=P;var Q="featuredProducts_section__wBby9",W="featuredProducts_carousel__ap4Cf",X="featuredProducts_featuredTextDiv__8EMWc",F="featuredProducts_figure__DKuBI",z=n(666),U=n(184);var Y=function(e){e.data;var t=(0,c.useContext)(z.mZ),n=t.receivedData,r=t.loading,o=(t.error,(0,c.useContext)(z.fL).width),a=(0,c.useState)([]),i=(0,l.Z)(a,2),u=i[0],f=i[1],d=(0,c.useState)(3),p=(0,l.Z)(d,2),m=p[0],g=p[1];return(0,c.useEffect)((function(){o<800?g(1):o>800&&g(3)}),[o]),(0,c.useEffect)((function(){if(!r){var e=[];n.map((function(t){t.isFeatured&&e.push(t)})),f(e)}}),[n]),(0,U.jsxs)("section",{className:Q,children:[(0,U.jsxs)("div",{className:X,children:[(0,U.jsx)("h3",{children:"Featured Products"}),(0,U.jsx)("p",{children:"Aute cillum labore ipsum laboris velit irure sunt velit aliqua."})]}),(0,U.jsx)(_,{className:W,wrapAround:!0,slidesToShow:m,animation:"zoom",autoplay:!0,cellAlign:"center",zoomScale:.95,children:u&&u.map((function(e){return(0,U.jsx)(s.rU,{to:e.id,children:(0,U.jsxs)("figure",{className:F,children:[(0,U.jsx)("img",{src:e.imgUrl}),(0,U.jsx)("figcaption",{children:e.name})]})},e.id)}))})]})}}}]);
//# sourceMappingURL=808.5ce9930c.chunk.js.map