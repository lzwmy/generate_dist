/*! For license information please see 7.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"109":function(e,i,n){"use strict";n.r(i),n.d(i,"taro_cover_view_core",(function(){return u}));var r=n(51),s=n(153),u=function(){function t(e){Object(r.g)(this,e),this.onLongPress=Object(r.c)(this,"longpress",7),this.hoverStartTime=50,this.hoverStayTime=400,this.hover=!1,this.touch=!1,this.startTime=0}return t.prototype.onTouchStart=function(){var e=this;this.hoverClass&&(this.touch=!0,setTimeout((function(){e.touch&&(e.hover=!0)}),this.hoverStartTime)),this.timeoutEvent=setTimeout((function(){e.onLongPress.emit()}),350),this.startTime=Date.now()},t.prototype.onTouchMove=function(){clearTimeout(this.timeoutEvent)},t.prototype.onTouchEnd=function(){var e=this;Date.now()-this.startTime<350&&clearTimeout(this.timeoutEvent),this.hoverClass&&(this.touch=!1,setTimeout((function(){e.touch||(e.hover=!1)}),this.hoverStayTime))},t.prototype.render=function(){var e,i=Object(s.a)(((e={})[""+this.hoverClass]=this.hover,e)),n={};return this.animation&&(n.animation=this.animation,n["data-animation"]=this.animation),Object(r.e)(r.a,Object.assign({"class":i},n),Object(r.e)("slot",null))},t}();u.style="taro-cover-view-core{display:block}"},"153":function(e,i,n){"use strict";n.d(i,"a",(function(){return r}));var r=function createCommonjsModule(e,i,n){return e(n={"path":i,"exports":{},"require":function(e,i){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}((function(e){!function(){var i={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var u=o.apply(null,r);u&&e.push(u)}}else if("object"===s)if(r.toString===Object.prototype.toString)for(var a in r)i.call(r,a)&&r[a]&&e.push(a);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):window.classNames=o}()}))}}]);