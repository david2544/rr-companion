/*! For license information please see 17.3d5db46d558ea8eb2cd9.chunk.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"1a712162e8ca85288091":function(e,t,n){e.exports={stopWatchWrapper:"stopWatchWrapper___2BZl7",timer:"timer___3qg3_",timerElements:"timerElements___2Dnzd",buttons:"buttons___XiHGw"}},"361291e1ed4139d1b767":function(e,t,n){"use strict";n.r(t);var a=n("8af190b70a6bc55c6f1b"),r=n.n(a),c=n("103be25b8913a0141218"),o=n("20fab5cd56d919197d3d"),l=n("c2aa6e17c007f2a965f0"),u=n("592acbca4aac4ec6197f"),i=n("8fe2e5416533777e0e37");function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,c=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=r.a.useState(e),n=s(t,2),a=n[0],c=n[1],o=r.a.useState(!1),l=s(o,2),u=l[0],i=l[1],f=r.a.useState(!1),m=s(f,2),d=m[0],b=m[1],v=r.a.useRef(),p=function(){i(!0),b(!0),v.current=setInterval((function(){c((function(e){return e+1}))}),100)},y=function(){clearInterval(v.current),b(!1)},h=function(){b(!0),v.current=setInterval((function(){c((function(e){return e+1}))}),100)},E=function(){clearInterval(v.current),i(!1),b(!1),c(0)};return{timer:a,isActive:u,isPaused:d,handleStart:p,handlePause:y,handleResume:h,handleReset:E}},d=n("1a712162e8ca85288091"),b=n.n(d),v=function(){var e=m(0),t=e.timer,n=e.isActive,a=e.isPaused,c=e.handleStart,o=e.handlePause,s=e.handleResume,f=e.handleReset;return r.a.createElement("div",{className:b.a.stopWatchWrapper},r.a.createElement("div",null,function(e){var t="".concat(e%10).slice(-1),n=Math.floor(e/10),a="0".concat(n%60).slice(-2),c=Math.floor(n/60),o="0".concat(c%60).slice(-2),i="0".concat(Math.floor(n/3600)).slice(-2);return r.a.createElement(l.a,{className:b.a.timer},r.a.createElement(u.a,{className:b.a.timerElements,xs:2},i),r.a.createElement(u.a,{className:b.a.timerElements,xs:2},o),r.a.createElement(u.a,{className:b.a.timerElements,xs:2},a),r.a.createElement(u.a,{xs:1},t))}(t)),r.a.createElement("div",{className:b.a.buttons},n||a?a?r.a.createElement(i.a,{variant:"warning",size:"lg",onClick:o},"Pause"):r.a.createElement(i.a,{variant:"success",size:"lg",onClick:s},"Resume"):r.a.createElement(i.a,{variant:"success",size:"lg",onClick:c},"Start"),r.a.createElement(i.a,{size:"lg",variant:"danger",onClick:f,disabled:!n},"Reset")))},p=n("94bdb9348be39a99ed81"),y=n("a956a2fa540979f2c9e7"),h=n("b1f9738630cc8fb6be75"),E=n("d4d056e7b8a714b4d223");function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var S=function(e,t){void 0===t&&(t={});var c,o=t,l=o.volume,u=void 0===l?1:l,i=o.playbackRate,s=void 0===i?1:i,f=o.soundEnabled,m=void 0===f||f,d=o.interrupt,b=void 0!==d&&d,v=o.onload,p=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(o,["volume","playbackRate","soundEnabled","interrupt","onload"]),y=r.a.useRef(null),h=r.a.useState(!1),E=h[0],S=h[1],w=r.a.useState(null),A=w[0],_=w[1],j=r.a.useState(null),x=j[0],O=j[1],k=function(){"function"===typeof v&&v.call(this),_(1e3*this.duration())};c=function(){var t=!1;return n.e(11).then(n.t.bind(null,"27c6fa51c756275f8b22",7)).then((function(n){if(!t){y.current=n.Howl;var a=new y.current(g({src:[e],volume:u,rate:s,onload:k},p));O(a)}})),function(){t=!0}},Object(a.useEffect)(c,[]),r.a.useEffect((function(){y.current&&x&&O(new y.current(g({src:[e],volume:u,onload:k},p)))}),[e]),r.a.useEffect((function(){x&&(x.volume(u),x.rate(s))}),[u,s]);var I=r.a.useCallback((function(e){"undefined"===typeof e&&(e={}),x&&(m||e.forceSoundEnabled)&&(b&&x.stop(),e.playbackRate&&x.rate(e.playbackRate),x.play(e.id),x.once("end",(function(){return S(!1)})),S(!0))}),[x,m,b]),R=r.a.useCallback((function(e){x&&(x.stop(e),S(!1))}),[x]),C=r.a.useCallback((function(e){x&&(x.pause(e),S(!1))}),[x]);return[I,{sound:x,stop:R,pause:C,isPlaying:E,duration:A}]},w=n.p+"2029891316a14df50d933ded06a8efca.wav";function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,c=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var j=function(e){var t=A(Object(a.useState)(e),2),n=t[0],r=t[1],c=A(Object(a.useState)(!1),2),o=c[0],l=c[1],u=Object(a.useRef)();Object(a.useEffect)((function(){r(e)}),[e]);var i=A(S(w,{volume:.5}),1)[0];n<=0&&(clearInterval(u.current),l(!1),r(e));return{counter:n,isActive:o,handleStart:function(){l(!0),u.current=setInterval((function(){r((function(e){return(e<=3||11===e)&&i(),e-1}))}),1e3)},handleReset:function(){clearInterval(u.current),l(!1),r(e)},playActive:i}},x=n("bf87a8871ec6e4ca54f3"),O=n.n(x);function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,c=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var R=function(){var e=k(Object(a.useState)(3),2),t=e[0],n=e[1],c=j(t),o=c.counter,l=c.isActive,s=c.handleStart,f=c.handleReset;return r.a.createElement(u.a,{className:"text-center",md:12},r.a.createElement(y.a.Label,{htmlFor:"breakTime"},"Rest between reps"),r.a.createElement(u.a,{md:{span:8,offset:2}},r.a.createElement(h.a,null,r.a.createElement(E.a,{id:"breakTime",type:"number",value:t,onChange:function(e){return n(parseInt(e.target.value,10)||90)}}),r.a.createElement(h.a.Append,null,r.a.createElement(h.a.Text,null,"seconds")))),r.a.createElement("div",{className:O.a.counter},o),l?r.a.createElement(i.a,{size:"lg",variant:"light",onClick:f},"Reset"):r.a.createElement(i.a,{variant:"success",size:"lg",onClick:s},"Start"))},C=n("602ad30682603d8a1cc8"),N=n.n(C);t.default=Object(c.f)((function(){return r.a.createElement("div",{className:N.a.home},r.a.createElement(o.a,null,r.a.createElement(l.a,null,r.a.createElement(u.a,{md:12,className:N.a.boxHeading},r.a.createElement("span",null,"Welcome back!"),r.a.createElement(i.a,{className:N.a.signoutButton,variant:"light",onClick:function(){return p.a.auth().signOut()}},"Sign out")),r.a.createElement(u.a,{md:12,className:N.a.box},r.a.createElement(v,null)),r.a.createElement(u.a,{md:4,className:N.a.box},r.a.createElement(R,null)))))}))},"602ad30682603d8a1cc8":function(e,t,n){e.exports={home:"home___3wVZr",boxHeading:"boxHeading___39m8p",box:"box___1_S-k"}},b912ecc4473ae8a2ff0b:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===c)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},bf87a8871ec6e4ca54f3:function(e,t,n){e.exports={counter:"counter___2rfrZ"}}}]);