"use strict";(self.webpackChunkdiy_flavor_safety=self.webpackChunkdiy_flavor_safety||[]).push([[39],{3820:function(e,t,r){r.d(t,{Z:function(){return $t}});var n=r(5697),o=r.n(n),i=r(4942),a=r(5987),s=r(2982),c=r(885),f=r(424),u=r(7294),l=r(6400),p=r(9129),d=Math.pow(2,31)-1;function v(e,t,r){var n=r-Date.now();e.current=n<=d?setTimeout(t,n):setTimeout((function(){return v(e,t,r)}),d)}function h(){var e=(0,l.Z)(),t=(0,u.useRef)();return(0,p.Z)((function(){return clearTimeout(t.current)})),(0,u.useMemo)((function(){var r=function(){return clearTimeout(t.current)};return{set:function(n,o){void 0===o&&(o=0),e()&&(r(),o<=d?t.current=setTimeout(n,o):v(t,n,Date.now()+o))},clear:r}}),[])}var m=r(2473),y=r.n(m),b=r(5210),g=r(1822),w=r(5900),O=r.n(w),x=r(3935),j=r(3924);function P(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw i}}}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Z=Object.prototype.hasOwnProperty;function D(e,t,r){var n,o=P(e.keys());try{for(o.s();!(n=o.n()).done;)if(k(r=n.value,t))return r}catch(i){o.e(i)}finally{o.f()}}function k(e,t){var r,n,o;if(e===t)return!0;if(e&&t&&(r=e.constructor)===t.constructor){if(r===Date)return e.getTime()===t.getTime();if(r===RegExp)return e.toString()===t.toString();if(r===Array){if((n=e.length)===t.length)for(;n--&&k(e[n],t[n]););return-1===n}if(r===Set){if(e.size!==t.size)return!1;var i,a=P(e);try{for(a.s();!(i=a.n()).done;){if((o=n=i.value)&&"object"==typeof o&&!(o=D(t,o)))return!1;if(!t.has(o))return!1}}catch(f){a.e(f)}finally{a.f()}return!0}if(r===Map){if(e.size!==t.size)return!1;var s,c=P(e);try{for(c.s();!(s=c.n()).done;){if((o=(n=s.value)[0])&&"object"==typeof o&&!(o=D(t,o)))return!1;if(!k(n[1],t.get(o)))return!1}}catch(f){c.e(f)}finally{c.f()}return!0}if(r===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(r===DataView){if((n=e.byteLength)===t.byteLength)for(;n--&&e.getInt8(n)===t.getInt8(n););return-1===n}if(ArrayBuffer.isView(e)){if((n=e.byteLength)===t.byteLength)for(;n--&&e[n]===t[n];);return-1===n}if(!r||"object"==typeof e){for(r in n=0,e){if(Z.call(e,r)&&++n&&!Z.call(t,r))return!1;if(!(r in t)||!k(e[r],t[r]))return!1}return Object.keys(t).length===n}}return e!=e&&t!=t}var A=function(e){var t=(0,l.Z)();return[e[0],(0,u.useCallback)((function(r){if(t())return e[1](r)}),[t,e[1]])]};function C(e){return e.split("-")[0]}function R(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function S(e){return e instanceof R(e).Element||e instanceof Element}function T(e){return e instanceof R(e).HTMLElement||e instanceof HTMLElement}function M(e){return"undefined"!=typeof ShadowRoot&&(e instanceof R(e).ShadowRoot||e instanceof ShadowRoot)}var L=Math.max,B=Math.min,N=Math.round;function W(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function H(){return!/^((?!chrome|android).)*safari/i.test(W())}function _(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!1);var n=e.getBoundingClientRect(),o=1,i=1;t&&T(e)&&(o=e.offsetWidth>0&&N(n.width)/e.offsetWidth||1,i=e.offsetHeight>0&&N(n.height)/e.offsetHeight||1);var a=(S(e)?R(e):window).visualViewport,s=!H()&&r,c=(n.left+(s&&a?a.offsetLeft:0))/o,f=(n.top+(s&&a?a.offsetTop:0))/i,u=n.width/o,l=n.height/i;return{width:u,height:l,top:f,right:c+u,bottom:f+l,left:c,x:c,y:f}}function U(e){var t=_(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function V(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&M(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function F(e){return e?(e.nodeName||"").toLowerCase():null}function q(e){return R(e).getComputedStyle(e)}function I(e){return["table","td","th"].indexOf(F(e))>=0}function z(e){return((S(e)?e.ownerDocument:e.document)||window.document).documentElement}function K(e){return"html"===F(e)?e:e.assignedSlot||e.parentNode||(M(e)?e.host:null)||z(e)}function X(e){return T(e)&&"fixed"!==q(e).position?e.offsetParent:null}function Y(e){for(var t=R(e),r=X(e);r&&I(r)&&"static"===q(r).position;)r=X(r);return r&&("html"===F(r)||"body"===F(r)&&"static"===q(r).position)?t:r||function(e){var t=/firefox/i.test(W());if(/Trident/i.test(W())&&T(e)&&"fixed"===q(e).position)return null;var r=K(e);for(M(r)&&(r=r.host);T(r)&&["html","body"].indexOf(F(r))<0;){var n=q(r);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r;r=r.parentNode}return null}(e)||t}function $(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function G(e,t,r){return L(e,B(t,r))}function J(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Q(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}var ee="top",te="bottom",re="right",ne="left",oe="auto",ie=[ee,te,re,ne],ae="start",se="end",ce="viewport",fe="popper",ue=ie.reduce((function(e,t){return e.concat([t+"-"+ae,t+"-"+se])}),[]),le=[].concat(ie,[oe]).reduce((function(e,t){return e.concat([t,t+"-"+ae,t+"-"+se])}),[]),pe=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];var de={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,n=e.name,o=e.options,i=r.elements.arrow,a=r.modifiersData.popperOffsets,s=C(r.placement),c=$(s),f=[ne,re].indexOf(s)>=0?"height":"width";if(i&&a){var u=function(e,t){return J("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Q(e,ie))}(o.padding,r),l=U(i),p="y"===c?ee:ne,d="y"===c?te:re,v=r.rects.reference[f]+r.rects.reference[c]-a[c]-r.rects.popper[f],h=a[c]-r.rects.reference[c],m=Y(i),y=m?"y"===c?m.clientHeight||0:m.clientWidth||0:0,b=v/2-h/2,g=u[p],w=y-l[f]-u[d],O=y/2-l[f]/2+b,x=G(g,O,w),j=c;r.modifiersData[n]=((t={})[j]=x,t.centerOffset=x-O,t)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r;null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&V(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ve(e){return e.split("-")[1]}var he={top:"auto",right:"auto",bottom:"auto",left:"auto"};function me(e){var t,r=e.popper,n=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,f=e.adaptive,u=e.roundOffsets,l=e.isFixed,p=a.x,d=void 0===p?0:p,v=a.y,h=void 0===v?0:v,m="function"==typeof u?u({x:d,y:h}):{x:d,y:h};d=m.x,h=m.y;var y=a.hasOwnProperty("x"),b=a.hasOwnProperty("y"),g=ne,w=ee,O=window;if(f){var x=Y(r),j="clientHeight",P="clientWidth";if(x===R(r)&&"static"!==q(x=z(r)).position&&"absolute"===s&&(j="scrollHeight",P="scrollWidth"),x=x,o===ee||(o===ne||o===re)&&i===se)w=te,h-=(l&&x===O&&O.visualViewport?O.visualViewport.height:x[j])-n.height,h*=c?1:-1;if(o===ne||(o===ee||o===te)&&i===se)g=re,d-=(l&&x===O&&O.visualViewport?O.visualViewport.width:x[P])-n.width,d*=c?1:-1}var E,Z=Object.assign({position:s},f&&he),D=!0===u?function(e){var t=e.x,r=e.y,n=window.devicePixelRatio||1;return{x:N(t*n)/n||0,y:N(r*n)/n||0}}({x:d,y:h}):{x:d,y:h};return d=D.x,h=D.y,c?Object.assign({},Z,((E={})[w]=b?"0":"",E[g]=y?"0":"",E.transform=(O.devicePixelRatio||1)<=1?"translate("+d+"px, "+h+"px)":"translate3d("+d+"px, "+h+"px, 0)",E)):Object.assign({},Z,((t={})[w]=b?h+"px":"",t[g]=y?d+"px":"",t.transform="",t))}var ye={passive:!0};var be={left:"right",right:"left",bottom:"top",top:"bottom"};function ge(e){return e.replace(/left|right|bottom|top/g,(function(e){return be[e]}))}var we={start:"end",end:"start"};function Oe(e){return e.replace(/start|end/g,(function(e){return we[e]}))}function xe(e){var t=R(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function je(e){return _(z(e)).left+xe(e).scrollLeft}function Pe(e){var t=q(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function Ee(e){return["html","body","#document"].indexOf(F(e))>=0?e.ownerDocument.body:T(e)&&Pe(e)?e:Ee(K(e))}function Ze(e,t){var r;void 0===t&&(t=[]);var n=Ee(e),o=n===(null==(r=e.ownerDocument)?void 0:r.body),i=R(n),a=o?[i].concat(i.visualViewport||[],Pe(n)?n:[]):n,s=t.concat(a);return o?s:s.concat(Ze(K(a)))}function De(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ke(e,t,r){return t===ce?De(function(e,t){var r=R(e),n=z(e),o=r.visualViewport,i=n.clientWidth,a=n.clientHeight,s=0,c=0;if(o){i=o.width,a=o.height;var f=H();(f||!f&&"fixed"===t)&&(s=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:s+je(e),y:c}}(e,r)):S(t)?function(e,t){var r=_(e,!1,"fixed"===t);return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}(t,r):De(function(e){var t,r=z(e),n=xe(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=L(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=L(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-n.scrollLeft+je(e),c=-n.scrollTop;return"rtl"===q(o||r).direction&&(s+=L(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(z(e)))}function Ae(e,t,r,n){var o="clippingParents"===t?function(e){var t=Ze(K(e)),r=["absolute","fixed"].indexOf(q(e).position)>=0&&T(e)?Y(e):e;return S(r)?t.filter((function(e){return S(e)&&V(e,r)&&"body"!==F(e)})):[]}(e):[].concat(t),i=[].concat(o,[r]),a=i[0],s=i.reduce((function(t,r){var o=ke(e,r,n);return t.top=L(o.top,t.top),t.right=B(o.right,t.right),t.bottom=B(o.bottom,t.bottom),t.left=L(o.left,t.left),t}),ke(e,a,n));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Ce(e){var t,r=e.reference,n=e.element,o=e.placement,i=o?C(o):null,a=o?ve(o):null,s=r.x+r.width/2-n.width/2,c=r.y+r.height/2-n.height/2;switch(i){case ee:t={x:s,y:r.y-n.height};break;case te:t={x:s,y:r.y+r.height};break;case re:t={x:r.x+r.width,y:c};break;case ne:t={x:r.x-n.width,y:c};break;default:t={x:r.x,y:r.y}}var f=i?$(i):null;if(null!=f){var u="y"===f?"height":"width";switch(a){case ae:t[f]=t[f]-(r[u]/2-n[u]/2);break;case se:t[f]=t[f]+(r[u]/2-n[u]/2)}}return t}function Re(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=void 0===n?e.placement:n,i=r.strategy,a=void 0===i?e.strategy:i,s=r.boundary,c=void 0===s?"clippingParents":s,f=r.rootBoundary,u=void 0===f?ce:f,l=r.elementContext,p=void 0===l?fe:l,d=r.altBoundary,v=void 0!==d&&d,h=r.padding,m=void 0===h?0:h,y=J("number"!=typeof m?m:Q(m,ie)),b=p===fe?"reference":fe,g=e.rects.popper,w=e.elements[v?b:p],O=Ae(S(w)?w:w.contextElement||z(e.elements.popper),c,u,a),x=_(e.elements.reference),j=Ce({reference:x,element:g,strategy:"absolute",placement:o}),P=De(Object.assign({},g,j)),E=p===fe?P:x,Z={top:O.top-E.top+y.top,bottom:E.bottom-O.bottom+y.bottom,left:O.left-E.left+y.left,right:E.right-O.right+y.right},D=e.modifiersData.offset;if(p===fe&&D){var k=D[o];Object.keys(Z).forEach((function(e){var t=[re,te].indexOf(e)>=0?1:-1,r=[ee,te].indexOf(e)>=0?"y":"x";Z[e]+=k[r]*t}))}return Z}function Se(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Te(e){return[ee,re,te,ne].some((function(t){return e[t]>=0}))}var Me={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=void 0===o?[0,0]:o,a=le.reduce((function(e,r){return e[r]=function(e,t,r){var n=C(e),o=[ne,ee].indexOf(n)>=0?-1:1,i="function"==typeof r?r(Object.assign({},t,{placement:e})):r,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[ne,re].indexOf(n)>=0?{x:s,y:a}:{x:a,y:s}}(r,t.rects,i),e}),{}),s=a[t.placement],c=s.x,f=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=f),t.modifiersData[n]=a}};var Le={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0!==a&&a,c=r.boundary,f=r.rootBoundary,u=r.altBoundary,l=r.padding,p=r.tether,d=void 0===p||p,v=r.tetherOffset,h=void 0===v?0:v,m=Re(t,{boundary:c,rootBoundary:f,padding:l,altBoundary:u}),y=C(t.placement),b=ve(t.placement),g=!b,w=$(y),O="x"===w?"y":"x",x=t.modifiersData.popperOffsets,j=t.rects.reference,P=t.rects.popper,E="function"==typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,Z="number"==typeof E?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,k={x:0,y:0};if(x){if(i){var A,R="y"===w?ee:ne,S="y"===w?te:re,T="y"===w?"height":"width",M=x[w],N=M+m[R],W=M-m[S],H=d?-P[T]/2:0,_=b===ae?j[T]:P[T],V=b===ae?-P[T]:-j[T],F=t.elements.arrow,q=d&&F?U(F):{width:0,height:0},I=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},z=I[R],K=I[S],X=G(0,j[T],q[T]),J=g?j[T]/2-H-X-z-Z.mainAxis:_-X-z-Z.mainAxis,Q=g?-j[T]/2+H+X+K+Z.mainAxis:V+X+K+Z.mainAxis,oe=t.elements.arrow&&Y(t.elements.arrow),ie=oe?"y"===w?oe.clientTop||0:oe.clientLeft||0:0,se=null!=(A=null==D?void 0:D[w])?A:0,ce=M+Q-se,fe=G(d?B(N,M+J-se-ie):N,M,d?L(W,ce):W);x[w]=fe,k[w]=fe-M}if(s){var ue,le="x"===w?ee:ne,pe="x"===w?te:re,de=x[O],he="y"===O?"height":"width",me=de+m[le],ye=de-m[pe],be=-1!==[ee,ne].indexOf(y),ge=null!=(ue=null==D?void 0:D[O])?ue:0,we=be?me:de-j[he]-P[he]-ge+Z.altAxis,Oe=be?de+j[he]+P[he]-ge-Z.altAxis:ye,xe=d&&be?function(e,t,r){var n=G(e,t,r);return n>r?r:n}(we,de,Oe):G(d?we:me,de,d?Oe:ye);x[O]=xe,k[O]=xe-de}t.modifiersData[n]=k}},requiresIfExists:["offset"]};function Be(e,t,r){void 0===r&&(r=!1);var n,o,i=T(t),a=T(t)&&function(e){var t=e.getBoundingClientRect(),r=N(t.width)/e.offsetWidth||1,n=N(t.height)/e.offsetHeight||1;return 1!==r||1!==n}(t),s=z(t),c=_(e,a,r),f={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(i||!i&&!r)&&(("body"!==F(t)||Pe(s))&&(f=(n=t)!==R(n)&&T(n)?{scrollLeft:(o=n).scrollLeft,scrollTop:o.scrollTop}:xe(n)),T(t)?((u=_(t,!0)).x+=t.clientLeft,u.y+=t.clientTop):s&&(u.x=je(s))),{x:c.left+f.scrollLeft-u.x,y:c.top+f.scrollTop-u.y,width:c.width,height:c.height}}function Ne(e){var t=new Map,r=new Set,n=[];function o(e){r.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!r.has(e)){var n=t.get(e);n&&o(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||o(e)})),n}var We={placement:"bottom",modifiers:[],strategy:"absolute"};function He(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function _e(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,n=void 0===r?[]:r,o=t.defaultOptions,i=void 0===o?We:o;return function(e,t,r){void 0===r&&(r=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},We,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],f=!1,u={state:s,setOptions:function(r){var o="function"==typeof r?r(s.options):r;l(),s.options=Object.assign({},i,s.options,o),s.scrollParents={reference:S(e)?Ze(e):e.contextElement?Ze(e.contextElement):[],popper:Ze(t)};var a=function(e){var t=Ne(e);return pe.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}(function(e){var t=e.reduce((function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(n,s.options.modifiers)));return s.orderedModifiers=a.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=void 0===r?{}:r,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:u,options:n}),a=function(){};c.push(i||a)}})),u.update()},forceUpdate:function(){if(!f){var e=s.elements,t=e.reference,r=e.popper;if(He(t,r)){s.rects={reference:Be(t,Y(r),"fixed"===s.options.strategy),popper:U(r)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0;n<s.orderedModifiers.length;n++)if(!0!==s.reset){var o=s.orderedModifiers[n],i=o.fn,a=o.options,c=void 0===a?{}:a,l=o.name;"function"==typeof i&&(s=i({state:s,options:c,name:l,instance:u})||s)}else s.reset=!1,n=-1}}},update:(o=function(){return new Promise((function(e){u.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){l(),f=!0}};if(!He(e,t))return u;function l(){c.forEach((function(e){return e()})),c=[]}return u.setOptions(r).then((function(e){!f&&r.onFirstUpdate&&r.onFirstUpdate(e)})),u}}var Ue=_e({defaultModifiers:[{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=Re(t,{elementContext:"reference"}),s=Re(t,{altBoundary:!0}),c=Se(a,n),f=Se(s,o,i),u=Te(c),l=Te(f);t.modifiersData[r]={referenceClippingOffsets:c,popperEscapeOffsets:f,isReferenceHidden:u,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":l})}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=Ce({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=void 0===n||n,i=r.adaptive,a=void 0===i||i,s=r.roundOffsets,c=void 0===s||s,f={placement:C(t.placement),variation:ve(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,me(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,me(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=void 0===o||o,a=n.resize,s=void 0===a||a,c=R(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&f.forEach((function(e){e.addEventListener("scroll",r.update,ye)})),s&&c.addEventListener("resize",r.update,ye),function(){i&&f.forEach((function(e){e.removeEventListener("scroll",r.update,ye)})),s&&c.removeEventListener("resize",r.update,ye)}},data:{}},Me,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0===a||a,c=r.fallbackPlacements,f=r.padding,u=r.boundary,l=r.rootBoundary,p=r.altBoundary,d=r.flipVariations,v=void 0===d||d,h=r.allowedAutoPlacements,m=t.options.placement,y=C(m),b=c||(y===m||!v?[ge(m)]:function(e){if(C(e)===oe)return[];var t=ge(e);return[Oe(e),t,Oe(t)]}(m)),g=[m].concat(b).reduce((function(e,r){return e.concat(C(r)===oe?function(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,a=r.padding,s=r.flipVariations,c=r.allowedAutoPlacements,f=void 0===c?le:c,u=ve(n),l=u?s?ue:ue.filter((function(e){return ve(e)===u})):ie,p=l.filter((function(e){return f.indexOf(e)>=0}));0===p.length&&(p=l);var d=p.reduce((function(t,r){return t[r]=Re(e,{placement:r,boundary:o,rootBoundary:i,padding:a})[C(r)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:r,boundary:u,rootBoundary:l,padding:f,flipVariations:v,allowedAutoPlacements:h}):r)}),[]),w=t.rects.reference,O=t.rects.popper,x=new Map,j=!0,P=g[0],E=0;E<g.length;E++){var Z=g[E],D=C(Z),k=ve(Z)===ae,A=[ee,te].indexOf(D)>=0,R=A?"width":"height",S=Re(t,{placement:Z,boundary:u,rootBoundary:l,altBoundary:p,padding:f}),T=A?k?re:ne:k?te:ee;w[R]>O[R]&&(T=ge(T));var M=ge(T),L=[];if(i&&L.push(S[D]<=0),s&&L.push(S[T]<=0,S[M]<=0),L.every((function(e){return e}))){P=Z,j=!1;break}x.set(Z,L)}if(j)for(var B=function(e){var t=g.find((function(t){var r=x.get(t);if(r)return r.slice(0,e).every((function(e){return e}))}));if(t)return P=t,"break"},N=v?3:1;N>0;N--){if("break"===B(N))break}t.placement!==P&&(t.modifiersData[n]._skip=!0,t.placement=P,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},Le,de]}),Ve=["enabled","placement","strategy","modifiers"];function Fe(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}var qe={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:function(){}},Ie={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:function(e){var t=e.state;return function(){var e=t.elements,r=e.reference,n=e.popper;if("removeAttribute"in r){var o=(r.getAttribute("aria-describedby")||"").split(",").filter((function(e){return e.trim()!==n.id}));o.length?r.setAttribute("aria-describedby",o.join(",")):r.removeAttribute("aria-describedby")}}},fn:function(e){var t,r=e.state.elements,n=r.popper,o=r.reference,i=null==(t=n.getAttribute("role"))?void 0:t.toLowerCase();if(n.id&&"tooltip"===i&&"setAttribute"in o){var a=o.getAttribute("aria-describedby");if(a&&-1!==a.split(",").indexOf(n.id))return;o.setAttribute("aria-describedby",a?"".concat(a,",").concat(n.id):n.id)}}},ze=[];var Ke=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.enabled,o=void 0===n||n,i=r.placement,a=void 0===i?"bottom":i,f=r.strategy,l=void 0===f?"absolute":f,p=r.modifiers,d=void 0===p?ze:p,v=Fe(r,Ve),h=(0,u.useRef)(d),m=(0,u.useRef)(),y=(0,u.useCallback)((function(){var e;null==(e=m.current)||e.update()}),[]),b=(0,u.useCallback)((function(){var e;null==(e=m.current)||e.forceUpdate()}),[]),g=A((0,u.useState)({placement:a,update:y,forceUpdate:b,attributes:{},styles:{popper:{},arrow:{}}})),w=(0,c.Z)(g,2),O=w[0],x=w[1],j=(0,u.useMemo)((function(){return{name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:function(e){var t=e.state,r={},n={};Object.keys(t.elements).forEach((function(e){r[e]=t.styles[e],n[e]=t.attributes[e]})),x({state:t,styles:r,attributes:n,update:y,forceUpdate:b,placement:t.placement})}}}),[y,b,x]),P=(0,u.useMemo)((function(){return k(h.current,d)||(h.current=d),h.current}),[d]);return(0,u.useEffect)((function(){m.current&&o&&m.current.setOptions({placement:a,strategy:l,modifiers:[].concat((0,s.Z)(P),[j,qe])})}),[l,a,j,o,P]),(0,u.useEffect)((function(){if(o&&null!=e&&null!=t)return m.current=Ue(e,t,Object.assign({},v,{placement:a,strategy:l,modifiers:[].concat((0,s.Z)(P),[Ie,j])})),function(){null!=m.current&&(m.current.destroy(),m.current=void 0,x((function(e){return Object.assign({},e,{attributes:{},styles:{popper:{}}})})))}}),[o,e,t]),O},Xe=r(2950),Ye=r(7216),$e=r(5655),Ge=function(){};function Je(e){return 0===e.button}function Qe(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}var et=function(e){return e&&("current"in e?e.current:e)},tt={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};var rt=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ge,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.disabled,o=r.clickTrigger,i=void 0===o?"click":o,a=(0,u.useRef)(!1),s=(0,u.useRef)(!1),c=(0,u.useCallback)((function(t){var r=et(e);y()(!!r,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),a.current=!r||Qe(t)||!Je(t)||!!(0,f.Z)(r,t.target)||s.current,s.current=!1}),[e]),l=(0,$e.Z)((function(t){var r=et(e);r&&(0,f.Z)(r,t.target)&&(s.current=!0)})),p=(0,$e.Z)((function(e){a.current||t(e)}));(0,u.useEffect)((function(){if(!n&&null!=e){var t=(0,Ye.Z)(et(e)),r=(t.defaultView||window).event,o=null;tt[i]&&(o=(0,Xe.Z)(t,tt[i],l,!0));var a=(0,Xe.Z)(t,i,c,!0),s=(0,Xe.Z)(t,i,(function(e){e!==r?p(e):r=void 0})),f=[];return"ontouchstart"in t.documentElement&&(f=[].slice.call(t.body.children).map((function(e){return(0,Xe.Z)(e,"mousemove",Ge)}))),function(){null==o||o(),a(),s(),f.forEach((function(e){return e()}))}}}),[e,n,i,c,l,p])},nt=function(){};var ot=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.disabled,o=r.clickTrigger,i=t||nt;rt(e,i,{disabled:n,clickTrigger:o});var a=(0,$e.Z)((function(e){27===e.keyCode&&i(e)}));(0,u.useEffect)((function(){if(!n&&null!=e){var t=(0,Ye.Z)(et(e)),r=(t.defaultView||window).event,o=(0,Xe.Z)(t,"keyup",(function(e){e!==r?a(e):r=void 0}));return function(){o()}}}),[e,n,a])},it=r(1228);function at(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Array.isArray(e)?e:Object.keys(e).map((function(t){return e[t].name=t,e[t]}))}function st(e){var t,r,n,o,i=e.enabled,a=e.enableEvents,s=e.placement,c=e.flip,f=e.offset,u=e.fixed,l=e.containerPadding,p=e.arrowElement,d=e.popperConfig,v=void 0===d?{}:d,h=function(e){var t={};return Array.isArray(e)?(null==e||e.forEach((function(e){t[e.name]=e})),t):e||t}(v.modifiers);return Object.assign({},v,{placement:s,enabled:i,strategy:u?"fixed":v.strategy,modifiers:at(Object.assign({},h,{eventListeners:{enabled:a},preventOverflow:Object.assign({},h.preventOverflow,{options:l?Object.assign({padding:l},null==(t=h.preventOverflow)?void 0:t.options):null==(r=h.preventOverflow)?void 0:r.options}),offset:{options:Object.assign({offset:f},null==(n=h.offset)?void 0:n.options)},arrow:Object.assign({},h.arrow,{enabled:!!p,options:Object.assign({},null==(o=h.arrow)?void 0:o.options,{element:p})}),flip:Object.assign({enabled:!!c},h.flip)}))})}var ct=r(5893),ft=u.forwardRef((function(e,t){var r=e.flip,n=e.offset,o=e.placement,i=e.containerPadding,a=e.popperConfig,s=void 0===a?{}:a,f=e.transition,l=(0,j.Z)(),p=(0,c.Z)(l,2),d=p[0],v=p[1],h=(0,j.Z)(),m=(0,c.Z)(h,2),y=m[0],b=m[1],w=(0,g.Z)(v,t),O=(0,it.Z)(e.container),P=(0,it.Z)(e.target),E=(0,u.useState)(!e.show),Z=(0,c.Z)(E,2),D=Z[0],k=Z[1],A=Ke(P,d,st({placement:o,enableEvents:!!e.show,containerPadding:i||5,flip:r,offset:n,arrowElement:y,popperConfig:s}));e.show?D&&k(!1):e.transition||D||k(!0);var C=e.show||f&&!D;if(ot(d,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!C)return null;var R=e.children(Object.assign({},A.attributes.popper,{style:A.styles.popper,ref:w}),{popper:A,placement:o,show:!!e.show,arrowProps:Object.assign({},A.attributes.arrow,{style:A.styles.arrow,ref:b})});if(f){var S=e.onExit,T=e.onExiting,M=e.onEnter,L=e.onEntering,B=e.onEntered;R=(0,ct.jsx)(f,{in:e.show,appear:!0,onExit:S,onExiting:T,onExited:function(){k(!0),e.onExited&&e.onExited.apply(e,arguments)},onEnter:M,onEntering:L,onEntered:B,children:R})}return O?x.createPortal(R,O):null}));ft.displayName="Overlay";var ut=ft,lt=r(7833),pt=r(1132),dt=r(9541),vt=r(8870),ht=(0,vt.Z)("popover-header"),mt=(0,vt.Z)("popover-body"),yt=r(3144),bt=r(5671),gt=r(136),wt=r(6215),Ot=r(1120);function xt(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,Ot.Z)(e);if(t){var o=(0,Ot.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,wt.Z)(this,r)}}u.Component;function jt(e,t){var r=e;return"left"===e?r=t?"end":"start":"right"===e&&(r=t?"start":"end"),r}var Pt=["bsPrefix","placement","className","style","children","body","arrowProps","popper","show"];function Et(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Zt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Et(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Et(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Dt=u.forwardRef((function(e,t){var r=e.bsPrefix,n=e.placement,o=e.className,i=e.style,s=e.children,f=e.body,u=e.arrowProps,l=(e.popper,e.show,(0,a.Z)(e,Pt)),p=(0,dt.vE)(r,"popover"),d=(0,dt.SC)(),v=(null==n?void 0:n.split("-"))||[],h=(0,c.Z)(v,1)[0],m=jt(h,d);return(0,ct.jsxs)("div",Zt(Zt({ref:t,role:"tooltip",style:i,"x-placement":h,className:O()(o,p,h&&"bs-popover-".concat(m))},l),{},{children:[(0,ct.jsx)("div",Zt({className:"popover-arrow"},u)),f?(0,ct.jsx)(mt,{children:s}):s]}))}));Dt.defaultProps={placement:"right"};var kt=Object.assign(Dt,{Header:ht,Body:mt,POPPER_OFFSET:[0,8]});var At=r(563),Ct=r(8305),Rt=["children","transition","popperConfig"];function St(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Tt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?St(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):St(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Mt={transition:At.Z,rootClose:!1,show:!1,placement:"top"};var Lt=u.forwardRef((function(e,t){var r=e.children,n=e.transition,o=e.popperConfig,i=void 0===o?{}:o,s=(0,a.Z)(e,Rt),f=(0,u.useRef)({}),l=(0,j.Z)(),p=(0,c.Z)(l,2),d=p[0],v=p[1],h=function(e){var t=(0,u.useRef)(null),r=(0,dt.vE)(void 0,"popover"),n=(0,u.useMemo)((function(){return{name:"offset",options:{offset:function(){return t.current&&(0,pt.Z)(t.current,r)?e||kt.POPPER_OFFSET:e||[0,0]}}}}),[e,r]);return[t,[n]]}(s.offset),m=(0,c.Z)(h,2),y=m[0],b=m[1],w=(0,g.Z)(t,y),x=!0===n?At.Z:n||void 0,P=(0,$e.Z)((function(e){v(e),null==i||null==i.onFirstUpdate||i.onFirstUpdate(e)}));return(0,lt.Z)((function(){d&&(null==f.current.scheduleUpdate||f.current.scheduleUpdate())}),[d]),(0,ct.jsx)(ut,Tt(Tt({},s),{},{ref:w,popperConfig:Tt(Tt({},i),{},{modifiers:b.concat(i.modifiers||[]),onFirstUpdate:P}),transition:x,children:function(e,t){var o,i,a=t.arrowProps,s=t.popper,c=t.show;!function(e,t){var r=e.ref,n=t.ref;e.ref=r.__wrapped||(r.__wrapped=function(e){return r((0,Ct.Z)(e))}),t.ref=n.__wrapped||(n.__wrapped=function(e){return n((0,Ct.Z)(e))})}(e,a);var l=null==s?void 0:s.placement,p=Object.assign(f.current,{state:null==s?void 0:s.state,scheduleUpdate:null==s?void 0:s.update,placement:l,outOfBoundaries:(null==s||null==(o=s.state)||null==(i=o.modifiersData.hide)?void 0:i.isReferenceHidden)||!1});return"function"==typeof r?r(Tt(Tt(Tt({},e),{},{placement:l,show:c},!n&&c&&{className:"show"}),{},{popper:p,arrowProps:a})):u.cloneElement(r,Tt(Tt({},e),{},{placement:l,arrowProps:a,popper:p,className:O()(r.props.className,!n&&c&&"show"),style:Tt(Tt({},r.props.style),e.style)}))}}))}));Lt.displayName="Overlay",Lt.defaultProps=Mt;var Bt=Lt,Nt=["trigger","overlay","children","popperConfig","show","defaultShow","onToggle","delay","placement","flip"];function Wt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ht(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Wt(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Wt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _t(e,t,r){var n=(0,c.Z)(t,1)[0],o=n.currentTarget,i=n.relatedTarget||n.nativeEvent[r];i&&i===o||(0,f.Z)(o,i)||e.apply(void 0,(0,s.Z)(t))}function Ut(e){var t=e.trigger,r=e.overlay,n=e.children,o=e.popperConfig,i=void 0===o?{}:o,s=e.show,f=e.defaultShow,l=void 0!==f&&f,p=e.onToggle,d=e.delay,v=e.placement,m=e.flip,y=void 0===m?v&&-1!==v.indexOf("auto"):m,w=(0,a.Z)(e,Nt),O=(0,u.useRef)(null),x=(0,g.Z)(O,n.ref),j=h(),P=(0,u.useRef)(""),E=(0,b.$c)(s,l,p),Z=(0,c.Z)(E,2),D=Z[0],k=Z[1],A=function(e){return e&&"object"==typeof e?e:{show:e,hide:e}}(d),C="function"!=typeof n?u.Children.only(n).props:{},R=C.onFocus,S=C.onBlur,T=C.onClick,M=(0,u.useCallback)((function(){j.clear(),P.current="show",A.show?j.set((function(){"show"===P.current&&k(!0)}),A.show):k(!0)}),[A.show,k,j]),L=(0,u.useCallback)((function(){j.clear(),P.current="hide",A.hide?j.set((function(){"hide"===P.current&&k(!1)}),A.hide):k(!1)}),[A.hide,k,j]),B=(0,u.useCallback)((function(){M(),null==R||R.apply(void 0,arguments)}),[M,R]),N=(0,u.useCallback)((function(){L(),null==S||S.apply(void 0,arguments)}),[L,S]),W=(0,u.useCallback)((function(){k(!D),null==T||T.apply(void 0,arguments)}),[T,k,D]),H=(0,u.useCallback)((function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];_t(M,t,"fromElement")}),[M]),_=(0,u.useCallback)((function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];_t(L,t,"toElement")}),[L]),U=null==t?[]:[].concat(t),V={ref:function(e){x((0,Ct.Z)(e))}};return-1!==U.indexOf("click")&&(V.onClick=W),-1!==U.indexOf("focus")&&(V.onFocus=B,V.onBlur=N),-1!==U.indexOf("hover")&&(V.onMouseOver=H,V.onMouseOut=_),(0,ct.jsxs)(ct.Fragment,{children:["function"==typeof n?n(V):(0,u.cloneElement)(n,V),(0,ct.jsx)(Bt,Ht(Ht({},w),{},{show:D,onHide:L,flip:y,placement:v,popperConfig:i,target:O.current,children:r}))]})}Ut.defaultProps={defaultShow:!1,trigger:["hover","focus"]};var Vt=Ut,Ft=["bsPrefix","placement","className","style","children","arrowProps","popper","show"];function qt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function It(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?qt(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):qt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var zt=u.forwardRef((function(e,t){var r=e.bsPrefix,n=e.placement,o=e.className,i=e.style,s=e.children,f=e.arrowProps,u=(e.popper,e.show,(0,a.Z)(e,Ft));r=(0,dt.vE)(r,"tooltip");var l=(0,dt.SC)(),p=(null==n?void 0:n.split("-"))||[],d=(0,c.Z)(p,1)[0],v=jt(d,l);return(0,ct.jsxs)("div",It(It({ref:t,style:i,role:"tooltip","x-placement":d,className:O()(o,r,"bs-tooltip-".concat(v))},u),{},{children:[(0,ct.jsx)("div",It({className:"tooltip-arrow"},f)),(0,ct.jsx)("div",{className:"".concat(r,"-inner"),children:s})]}))}));zt.defaultProps={placement:"right"},zt.displayName="Tooltip";var Kt=zt,Xt=r(2623),Yt=r(8439);function $t({badgeProps:e,category:t}){const r=(0,Yt.getCategoryVariant)(t);let n="The vape toxicity of this ingredient is currently being researched.";return"Caution"===t?n="There is evidence that this ingredient can be toxic when vaped.":"Avoid"===t&&(n="There is evidence that this ingredient is toxic when vaped."),(0,ct.jsx)(Vt,{placement:"left",overlay:e=>(0,ct.jsx)(Kt,{...e,children:n}),children:(0,ct.jsx)(Xt.Z,{bg:r,...e,children:t})})}$t.propTypes={badgeProps:o().object,category:o().string.isRequired},$t.defaultProps={badgeProps:{}}}}]);
//# sourceMappingURL=854d99bd919ce54cb0a75c63c8f70cb9a84dc2b9-8b74f53f70f6f1362c53.js.map