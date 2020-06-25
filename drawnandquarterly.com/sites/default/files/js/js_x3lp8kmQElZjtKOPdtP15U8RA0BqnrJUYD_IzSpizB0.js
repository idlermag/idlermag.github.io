/*! Copyright 2012, Ben Lin (http://dreamerslab.com/)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 1.0.16
 *
 * Requires: jQuery >= 1.2.3
 */
(function(a){a.fn.addBack=a.fn.addBack||a.fn.andSelf;
a.fn.extend({actual:function(b,l){if(!this[b]){throw'$.actual => The jQuery method "'+b+'" you called does not exist';}var f={absolute:false,clone:false,includeMargin:false};
var i=a.extend(f,l);var e=this.eq(0);var h,j;if(i.clone===true){h=function(){var m="position: absolute !important; top: -1000 !important; ";e=e.clone().attr("style",m).appendTo("body");
};j=function(){e.remove();};}else{var g=[];var d="";var c;h=function(){c=e.parents().addBack().filter(":hidden");d+="visibility: hidden !important; display: block !important; ";
if(i.absolute===true){d+="position: absolute !important; ";}c.each(function(){var m=a(this);var n=m.attr("style");g.push(n);m.attr("style",n?n+";"+d:d);
});};j=function(){c.each(function(m){var o=a(this);var n=g[m];if(n===undefined){o.removeAttr("style");}else{o.attr("style",n);}});};}h();var k=/(outer)/.test(b)?e[b](i.includeMargin):e[b]();
j();return k;}});})(jQuery);;
/*!

    Copyright (c) 2011 Peter van der Spek

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
    
 */(function(a){function m(){if(!d){d=!0;for(var c in b)a(c).each(function(){var d,e;d=a(this),e=d.data("jqae"),(e.containerWidth!=d.width()||e.containerHeight!=d.height())&&f(d,b[c])});d=!1}}function l(a){b[a]&&(delete b[a],b.length||c&&(window.clearInterval(c),c=undefined))}function k(a,d){b[a]=d,c||(c=window.setInterval(function(){m()},200))}function j(){return this.nodeType===3}function i(b){if(b.contents().length){var c=b.contents(),d=c.eq(c.length-1);if(d.filter(j).length){var e=d.get(0).nodeValue;e=a.trim(e);if(e==""){d.remove();return!0}return!1}while(i(d));if(d.contents().length)return!1;d.remove();return!0}return!1}function h(a){if(a.contents().length){var b=a.contents(),c=b.eq(b.length-1);return c.filter(j).length?c:h(c)}a.append("");var b=a.contents();return b.eq(b.length-1)}function g(b){var c=h(b);if(c.length){var d=c.get(0).nodeValue,e=d.lastIndexOf(" ");e>-1?(d=a.trim(d.substring(0,e)),c.get(0).nodeValue=d):c.get(0).nodeValue="";return!0}return!1}function f(b,c){var d=b.data("jqae");d||(d={});var e=d.wrapperElement;e||(e=b.wrapInner("<div/>").find(">div"),e.css({margin:0,padding:0,border:0}));var f=e.data("jqae");f||(f={});var j=f.originalContent;j?e=f.originalContent.clone(!0).data("jqae",{originalContent:j}).replaceAll(e):e.data("jqae",{originalContent:e.clone(!0)}),b.data("jqae",{wrapperElement:e,containerWidth:b.width(),containerHeight:b.height()});var k=b.height(),l=(parseInt(b.css("padding-top"),10)||0)+(parseInt(b.css("border-top-width"),10)||0)-(e.offset().top-b.offset().top),m=!1,n=e;c.selector&&(n=a(e.find(c.selector).get().reverse())),n.each(function(){var b=a(this),d=b.text(),f=!1;if(e.innerHeight()-b.innerHeight()>k+l)b.remove();else{i(b);if(b.contents().length){m&&(h(b).get(0).nodeValue+=c.ellipsis,m=!1);while(e.innerHeight()>k+l){f=g(b);if(!f){m=!0,b.remove();break}i(b);if(b.contents().length)h(b).get(0).nodeValue+=c.ellipsis;else{m=!0,b.remove();break}}c.setTitle=="onEllipsis"&&f||c.setTitle=="always"?b.attr("title",d):c.setTitle!="never"&&b.removeAttr("title")}}})}var b={},c,d=!1,e={ellipsis:"...",setTitle:"never",live:!1};a.fn.ellipsis=function(b,c){var d,g;d=a(this),typeof b!="string"&&(c=b,b=undefined),g=a.extend({},e,c),g.selector=b,d.each(function(){var b=a(this);f(b,g)}),g.live?k(d.selector,g):l(d.selector);return this}})(jQuery);
/*!
* ZeroClipboard
* The ZeroClipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie and a JavaScript interface.
* Copyright (c) 2014 Jon Rohan, James M. Greene
* Licensed MIT
* http://zeroclipboard.org/
* v1.3.5
*/
!function(a){"use strict";function b(a){return a.replace(/,/g,".").replace(/[^0-9\.]/g,"")}function c(a){return parseFloat(b(a))>=10}var d,e={bridge:null,version:"0.0.0",disabled:null,outdated:null,ready:null},f={},g=0,h={},i=0,j={},k=null,l=null,m=function(){var a,b,c,d,e="ZeroClipboard.html";if(document.currentScript&&(d=document.currentScript.src));else{var f=document.getElementsByTagName("script");if("readyState"in f[0])for(a=f.length;a--&&("interactive"!==f[a].readyState||!(d=f[a].src)););else if("loading"===document.readyState)d=f[f.length-1].src;else{for(a=f.length;a--;){if(c=f[a].src,!c){b=null;break}if(c=c.split("#")[0].split("?")[0],c=c.slice(0,c.lastIndexOf("https://drawnandquarterly.com/")+1),null==b)b=c;else if(b!==c){b=null;break}}null!==b&&(d=b)}}return d&&(d=d.split("#")[0].split("?")[0],e=d.slice(0,d.lastIndexOf("https://drawnandquarterly.com/")+1)+e),e}(),n=function(){var a=/\-([a-z])/g,b=function(a,b){return b.toUpperCase()};return function(c){return c.replace(a,b)}}(),o=function(b,c){var d,e,f;return a.getComputedStyle?d=a.getComputedStyle(b,null).getPropertyValue(c):(e=n(c),d=b.currentStyle?b.currentStyle[e]:b.style[e]),"cursor"!==c||d&&"auto"!==d||(f=b.tagName.toLowerCase(),"a"!==f)?d:"pointer"},p=function(b){b||(b=a.event);var c;this!==a?c=this:b.target?c=b.target:b.srcElement&&(c=b.srcElement),K.activate(c)},q=function(a,b,c){a&&1===a.nodeType&&(a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c))},r=function(a,b,c){a&&1===a.nodeType&&(a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c))},s=function(a,b){if(!a||1!==a.nodeType)return a;if(a.classList)return a.classList.contains(b)||a.classList.add(b),a;if(b&&"string"==typeof b){var c=(b||"").split(/\s+/);if(1===a.nodeType)if(a.className){for(var d=" "+a.className+" ",e=a.className,f=0,g=c.length;g>f;f++)d.indexOf(" "+c[f]+" ")<0&&(e+=" "+c[f]);a.className=e.replace(/^\s+|\s+$/g,"")}else a.className=b}return a},t=function(a,b){if(!a||1!==a.nodeType)return a;if(a.classList)return a.classList.contains(b)&&a.classList.remove(b),a;if(b&&"string"==typeof b||void 0===b){var c=(b||"").split(/\s+/);if(1===a.nodeType&&a.className)if(b){for(var d=(" "+a.className+" ").replace(/[\n\t]/g," "),e=0,f=c.length;f>e;e++)d=d.replace(" "+c[e]+" "," ");a.className=d.replace(/^\s+|\s+$/g,"")}else a.className=""}return a},u=function(){var a,b,c,d=1;return"function"==typeof document.body.getBoundingClientRect&&(a=document.body.getBoundingClientRect(),b=a.right-a.left,c=document.body.offsetWidth,d=Math.round(b/c*100)/100),d},v=function(b,c){var d={left:0,top:0,width:0,height:0,zIndex:B(c)-1};if(b.getBoundingClientRect){var e,f,g,h=b.getBoundingClientRect();"pageXOffset"in a&&"pageYOffset"in a?(e=a.pageXOffset,f=a.pageYOffset):(g=u(),e=Math.round(document.documentElement.scrollLeft/g),f=Math.round(document.documentElement.scrollTop/g));var i=document.documentElement.clientLeft||0,j=document.documentElement.clientTop||0;d.left=h.left+e-i,d.top=h.top+f-j,d.width="width"in h?h.width:h.right-h.left,d.height="height"in h?h.height:h.bottom-h.top}return d},w=function(a,b){var c=null==b||b&&b.cacheBust===!0&&b.useNoCache===!0;return c?(-1===a.indexOf("?")?"?":"&")+"noCache="+(new Date).getTime():""},x=function(b){var c,d,e,f=[],g=[],h=[];if(b.trustedOrigins&&("string"==typeof b.trustedOrigins?g.push(b.trustedOrigins):"object"==typeof b.trustedOrigins&&"length"in b.trustedOrigins&&(g=g.concat(b.trustedOrigins))),b.trustedDomains&&("string"==typeof b.trustedDomains?g.push(b.trustedDomains):"object"==typeof b.trustedDomains&&"length"in b.trustedDomains&&(g=g.concat(b.trustedDomains))),g.length)for(c=0,d=g.length;d>c;c++)if(g.hasOwnProperty(c)&&g[c]&&"string"==typeof g[c]){if(e=E(g[c]),!e)continue;if("*"===e){h=[e];break}h.push.apply(h,[e,"//"+e,a.location.protocol+"//"+e])}return h.length&&f.push("trustedOrigins="+encodeURIComponent(h.join(","))),"string"==typeof b.jsModuleId&&b.jsModuleId&&f.push("jsModuleId="+encodeURIComponent(b.jsModuleId)),f.join("&")},y=function(a,b,c){if("function"==typeof b.indexOf)return b.indexOf(a,c);var d,e=b.length;for("undefined"==typeof c?c=0:0>c&&(c=e+c),d=c;e>d;d++)if(b.hasOwnProperty(d)&&b[d]===a)return d;return-1},z=function(a){if("string"==typeof a)throw new TypeError("ZeroClipboard doesn't accept query strings.");return a.length?a:[a]},A=function(b,c,d,e){e?a.setTimeout(function(){b.apply(c,d)},0):b.apply(c,d)},B=function(a){var b,c;return a&&("number"==typeof a&&a>0?b=a:"string"==typeof a&&(c=parseInt(a,10))&&!isNaN(c)&&c>0&&(b=c)),b||("number"==typeof N.zIndex&&N.zIndex>0?b=N.zIndex:"string"==typeof N.zIndex&&(c=parseInt(N.zIndex,10))&&!isNaN(c)&&c>0&&(b=c)),b||0},C=function(a,b){if(a&&b!==!1&&"undefined"!=typeof console&&console&&(console.warn||console.log)){var c="`"+a+"` is deprecated. See docs for more info:\n    https://github.com/zeroclipboard/zeroclipboard/blob/master/docs/instructions.md#deprecations";console.warn?console.warn(c):console.log(c)}},D=function(){var a,b,c,d,e,f,g=arguments[0]||{};for(a=1,b=arguments.length;b>a;a++)if(null!=(c=arguments[a]))for(d in c)if(c.hasOwnProperty(d)){if(e=g[d],f=c[d],g===f)continue;void 0!==f&&(g[d]=f)}return g},E=function(a){if(null==a||""===a)return null;if(a=a.replace(/^\s+|\s+$/g,""),""===a)return null;var b=a.indexOf("//");a=-1===b?a:a.slice(b+2);var c=a.indexOf("https://drawnandquarterly.com/");return a=-1===c?a:-1===b||0===c?null:a.slice(0,c),a&&".swf"===a.slice(-4).toLowerCase()?null:a||null},F=function(){var a=function(a,b){var c,d,e;if(null!=a&&"*"!==b[0]&&("string"==typeof a&&(a=[a]),"object"==typeof a&&"length"in a))for(c=0,d=a.length;d>c;c++)if(a.hasOwnProperty(c)&&(e=E(a[c]))){if("*"===e){b.length=0,b.push("*");break}-1===y(e,b)&&b.push(e)}},b={always:"always",samedomain:"sameDomain",never:"never"};return function(c,d){var e,f=d.allowScriptAccess;if("string"==typeof f&&(e=f.toLowerCase())&&/^always|samedomain|never$/.test(e))return b[e];var g=E(d.moviePath);null===g&&(g=c);var h=[];a(d.trustedOrigins,h),a(d.trustedDomains,h);var i=h.length;if(i>0){if(1===i&&"*"===h[0])return"always";if(-1!==y(c,h))return 1===i&&c===g?"sameDomain":"always"}return"never"}}(),G=function(a){if(null==a)return[];if(Object.keys)return Object.keys(a);var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c);return b},H=function(a){if(a)for(var b in a)a.hasOwnProperty(b)&&delete a[b];return a},I=function(){try{return document.activeElement}catch(a){}return null},J=function(){var a=!1;if("boolean"==typeof e.disabled)a=e.disabled===!1;else{if("function"==typeof ActiveXObject)try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash")&&(a=!0)}catch(b){}!a&&navigator.mimeTypes["application/x-shockwave-flash"]&&(a=!0)}return a},K=function(a,b){return this instanceof K?(this.id=""+g++,h[this.id]={instance:this,elements:[],handlers:{}},a&&this.clip(a),"undefined"!=typeof b&&(C("new ZeroClipboard(elements, options)",N.debug),K.config(b)),this.options=K.config(),"boolean"!=typeof e.disabled&&(e.disabled=!J()),e.disabled===!1&&e.outdated!==!0&&null===e.bridge&&(e.outdated=!1,e.ready=!1,O()),void 0):new K(a,b)};K.prototype.setText=function(a){return a&&""!==a&&(f["text/plain"]=a,e.ready===!0&&e.bridge&&"function"==typeof e.bridge.setText?e.bridge.setText(a):e.ready=!1),this},K.prototype.setSize=function(a,b){return e.ready===!0&&e.bridge&&"function"==typeof e.bridge.setSize?e.bridge.setSize(a,b):e.ready=!1,this};var L=function(a){e.ready===!0&&e.bridge&&"function"==typeof e.bridge.setHandCursor?e.bridge.setHandCursor(a):e.ready=!1};K.prototype.destroy=function(){this.unclip(),this.off(),delete h[this.id]};var M=function(){var a,b,c,d=[],e=G(h);for(a=0,b=e.length;b>a;a++)c=h[e[a]].instance,c&&c instanceof K&&d.push(c);return d};K.version="1.3.5";var N={swfPath:m,trustedDomains:a.location.host?[a.location.host]:[],cacheBust:!0,forceHandCursor:!1,zIndex:999999999,debug:!0,title:null,autoActivate:!0};K.config=function(a){"object"==typeof a&&null!==a&&D(N,a);{if("string"!=typeof a||!a){var b={};for(var c in N)N.hasOwnProperty(c)&&(b[c]="object"==typeof N[c]&&null!==N[c]?"length"in N[c]?N[c].slice(0):D({},N[c]):N[c]);return b}if(N.hasOwnProperty(a))return N[a]}},K.destroy=function(){K.deactivate();for(var a in h)if(h.hasOwnProperty(a)&&h[a]){var b=h[a].instance;b&&"function"==typeof b.destroy&&b.destroy()}var c=P(e.bridge);c&&c.parentNode&&(c.parentNode.removeChild(c),e.ready=null,e.bridge=null)},K.activate=function(a){d&&(t(d,N.hoverClass),t(d,N.activeClass)),d=a,s(a,N.hoverClass),Q();var b=N.title||a.getAttribute("title");if(b){var c=P(e.bridge);c&&c.setAttribute("title",b)}var f=N.forceHandCursor===!0||"pointer"===o(a,"cursor");L(f)},K.deactivate=function(){var a=P(e.bridge);a&&(a.style.left="0px",a.style.top="-9999px",a.removeAttribute("title")),d&&(t(d,N.hoverClass),t(d,N.activeClass),d=null)};var O=function(){var b,c,d=document.getElementById("global-zeroclipboard-html-bridge");if(!d){var f=K.config();f.jsModuleId="string"==typeof k&&k||"string"==typeof l&&l||null;var g=F(a.location.host,N),h=x(f),i=N.moviePath+w(N.moviePath,N),j='      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="global-zeroclipboard-flash-bridge" width="100%" height="100%">         <param name="movie" value="'+i+'"/>         <param name="allowScriptAccess" value="'+g+'"/>         <param name="scale" value="exactfit"/>         <param name="loop" value="false"/>         <param name="menu" value="false"/>         <param name="quality" value="best" />         <param name="bgcolor" value="#ffffff"/>         <param name="wmode" value="transparent"/>         <param name="flashvars" value="'+h+'"/>         <embed src="'+i+'"           loop="false" menu="false"           quality="best" bgcolor="#ffffff"           width="100%" height="100%"           name="global-zeroclipboard-flash-bridge"           allowScriptAccess="'+g+'"           allowFullScreen="false"           type="application/x-shockwave-flash"           wmode="transparent"           pluginspage="http://www.macromedia.com/go/getflashplayer"           flashvars="'+h+'"           scale="exactfit">         </embed>       </object>';d=document.createElement("div"),d.id="global-zeroclipboard-html-bridge",d.setAttribute("class","global-zeroclipboard-container"),d.style.position="absolute",d.style.left="0px",d.style.top="-9999px",d.style.width="15px",d.style.height="15px",d.style.zIndex=""+B(N.zIndex),document.body.appendChild(d),d.innerHTML=j}b=document["global-zeroclipboard-flash-bridge"],b&&(c=b.length)&&(b=b[c-1]),e.bridge=b||d.children[0].lastElementChild},P=function(a){for(var b=/^OBJECT|EMBED$/,c=a&&a.parentNode;c&&b.test(c.nodeName)&&c.parentNode;)c=c.parentNode;return c||null},Q=function(){if(d){var a=v(d,N.zIndex),b=P(e.bridge);b&&(b.style.top=a.top+"px",b.style.left=a.left+"px",b.style.width=a.width+"px",b.style.height=a.height+"px",b.style.zIndex=a.zIndex+1),e.ready===!0&&e.bridge&&"function"==typeof e.bridge.setSize?e.bridge.setSize(a.width,a.height):e.ready=!1}return this};K.prototype.on=function(a,b){var c,d,f,g={},i=h[this.id]&&h[this.id].handlers;if("string"==typeof a&&a)f=a.toLowerCase().split(/\s+/);else if("object"==typeof a&&a&&"undefined"==typeof b)for(c in a)a.hasOwnProperty(c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&this.on(c,a[c]);if(f&&f.length){for(c=0,d=f.length;d>c;c++)a=f[c].replace(/^on/,""),g[a]=!0,i[a]||(i[a]=[]),i[a].push(b);g.noflash&&e.disabled&&T.call(this,"noflash",{}),g.wrongflash&&e.outdated&&T.call(this,"wrongflash",{flashVersion:e.version}),g.load&&e.ready&&T.call(this,"load",{flashVersion:e.version})}return this},K.prototype.off=function(a,b){var c,d,e,f,g,i=h[this.id]&&h[this.id].handlers;if(0===arguments.length)f=G(i);else if("string"==typeof a&&a)f=a.split(/\s+/);else if("object"==typeof a&&a&&"undefined"==typeof b)for(c in a)a.hasOwnProperty(c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&this.off(c,a[c]);if(f&&f.length)for(c=0,d=f.length;d>c;c++)if(a=f[c].toLowerCase().replace(/^on/,""),g=i[a],g&&g.length)if(b)for(e=y(b,g);-1!==e;)g.splice(e,1),e=y(b,g,e);else i[a].length=0;return this},K.prototype.handlers=function(a){var b,c=null,d=h[this.id]&&h[this.id].handlers;if(d){if("string"==typeof a&&a)return d[a]?d[a].slice(0):null;c={};for(b in d)d.hasOwnProperty(b)&&d[b]&&(c[b]=d[b].slice(0))}return c};var R=function(b,c,d,e){var f=h[this.id]&&h[this.id].handlers[b];if(f&&f.length){var g,i,j,k=c||this;for(g=0,i=f.length;i>g;g++)j=f[g],c=k,"string"==typeof j&&"function"==typeof a[j]&&(j=a[j]),"object"==typeof j&&j&&"function"==typeof j.handleEvent&&(c=j,j=j.handleEvent),"function"==typeof j&&A(j,c,d,e)}return this};K.prototype.clip=function(a){a=z(a);for(var b=0;b<a.length;b++)if(a.hasOwnProperty(b)&&a[b]&&1===a[b].nodeType){a[b].zcClippingId?-1===y(this.id,j[a[b].zcClippingId])&&j[a[b].zcClippingId].push(this.id):(a[b].zcClippingId="zcClippingId_"+i++,j[a[b].zcClippingId]=[this.id],N.autoActivate===!0&&q(a[b],"mouseover",p));var c=h[this.id].elements;-1===y(a[b],c)&&c.push(a[b])}return this},K.prototype.unclip=function(a){var b=h[this.id];if(b){var c,d=b.elements;a="undefined"==typeof a?d.slice(0):z(a);for(var e=a.length;e--;)if(a.hasOwnProperty(e)&&a[e]&&1===a[e].nodeType){for(c=0;-1!==(c=y(a[e],d,c));)d.splice(c,1);var f=j[a[e].zcClippingId];if(f){for(c=0;-1!==(c=y(this.id,f,c));)f.splice(c,1);0===f.length&&(N.autoActivate===!0&&r(a[e],"mouseover",p),delete a[e].zcClippingId)}}}return this},K.prototype.elements=function(){var a=h[this.id];return a&&a.elements?a.elements.slice(0):[]};var S=function(a){var b,c,d,e,f,g=[];if(a&&1===a.nodeType&&(b=a.zcClippingId)&&j.hasOwnProperty(b)&&(c=j[b],c&&c.length))for(d=0,e=c.length;e>d;d++)f=h[c[d]].instance,f&&f instanceof K&&g.push(f);return g};N.hoverClass="zeroclipboard-is-hover",N.activeClass="zeroclipboard-is-active",N.trustedOrigins=null,N.allowScriptAccess=null,N.useNoCache=!0,N.moviePath="ZeroClipboard.html",K.detectFlashSupport=function(){return C("ZeroClipboard.detectFlashSupport",N.debug),J()},K.dispatch=function(a,b){if("string"==typeof a&&a){var c=a.toLowerCase().replace(/^on/,"");if(c)for(var e=d&&N.autoActivate===!0?S(d):M(),f=0,g=e.length;g>f;f++)T.call(e[f],c,b)}},K.prototype.setHandCursor=function(a){return C("ZeroClipboard.prototype.setHandCursor",N.debug),a="boolean"==typeof a?a:!!a,L(a),N.forceHandCursor=a,this},K.prototype.reposition=function(){return C("ZeroClipboard.prototype.reposition",N.debug),Q()},K.prototype.receiveEvent=function(a,b){if(C("ZeroClipboard.prototype.receiveEvent",N.debug),"string"==typeof a&&a){var c=a.toLowerCase().replace(/^on/,"");c&&T.call(this,c,b)}},K.prototype.setCurrent=function(a){return C("ZeroClipboard.prototype.setCurrent",N.debug),K.activate(a),this},K.prototype.resetBridge=function(){return C("ZeroClipboard.prototype.resetBridge",N.debug),K.deactivate(),this},K.prototype.setTitle=function(a){if(C("ZeroClipboard.prototype.setTitle",N.debug),a=a||N.title||d&&d.getAttribute("title")){var b=P(e.bridge);b&&b.setAttribute("title",a)}return this},K.setDefaults=function(a){C("ZeroClipboard.setDefaults",N.debug),K.config(a)},K.prototype.addEventListener=function(a,b){return C("ZeroClipboard.prototype.addEventListener",N.debug),this.on(a,b)},K.prototype.removeEventListener=function(a,b){return C("ZeroClipboard.prototype.removeEventListener",N.debug),this.off(a,b)},K.prototype.ready=function(){return C("ZeroClipboard.prototype.ready",N.debug),e.ready===!0};var T=function(a,g){a=a.toLowerCase().replace(/^on/,"");var h=g&&g.flashVersion&&b(g.flashVersion)||null,i=d,j=!0;switch(a){case"load":if(h){if(!c(h))return T.call(this,"onWrongFlash",{flashVersion:h}),void 0;e.outdated=!1,e.ready=!0,e.version=h}break;case"wrongflash":h&&!c(h)&&(e.outdated=!0,e.ready=!1,e.version=h);break;case"mouseover":s(i,N.hoverClass);break;case"mouseout":N.autoActivate===!0&&K.deactivate();break;case"mousedown":s(i,N.activeClass);break;case"mouseup":t(i,N.activeClass);break;case"datarequested":if(i){var k=i.getAttribute("data-clipboard-target"),l=k?document.getElementById(k):null;if(l){var m=l.value||l.textContent||l.innerText;m&&this.setText(m)}else{var n=i.getAttribute("data-clipboard-text");n&&this.setText(n)}}j=!1;break;case"complete":H(f),i&&i!==I()&&i.focus&&i.focus()}var o=i,p=[this,g];return R.call(this,a,o,p,j)};"function"==typeof define&&define.amd?define(["require","exports","module"],function(a,b,c){return k=c&&c.id||null,K}):"object"==typeof module&&module&&"object"==typeof module.exports&&module.exports&&"function"==typeof a.require?(l=module.id||null,module.exports=K):a.ZeroClipboard=K}(function(){return this}());;
(function ($) {
  var authSearchLabel = 'Search for Event by Author';
  var citySearchLabel = 'Search for Event by City';

  function preloadFlexsliderImages(data) {
    // Look for flexslider info.
    var i;
    var instances = {};
    var optionsets = {};
    for (i in data) {
      if (data.hasOwnProperty(i) && data[i].command === 'settings') {
        if (data[i].settings.flexslider) {
          var flex = data[i].settings.flexslider;
          if (flex.instances) {
            $.extend(instances, flex.instances);
          }
          if (flex.optionsets) {
            $.extend(optionsets, flex.optionsets);
          }
        }
      }
    }

    // Look for flexslider HTML.
    for (i in data) {
      if (data.hasOwnProperty(i) && data[i].command === 'insert') {
        var newdoc = document.implementation.createHTMLDocument();
        var insert = newdoc.createElement('div');
        insert.innerHTML = data[i].data;
        // Check if any of our sliders are here.
        for (var htmlID in instances) {
          var sliderID = instances[htmlID];
          if (optionsets[sliderID]) {
            var options = optionsets[sliderID];
            $('#' + htmlID, insert).each(function() {
              // Find slides.
              $(options.selector, this).slice(0, options.maxItems).find('img').each(function() {
                // Preload the images.
                $('<img/>').attr('src', $(this).attr('src'));
              });
            });
          }
        }
      }
    }

  }

  Drupal.behaviors.dqtheme = {
       attach: function(context, settings) {

        //set 3rd party vendor link buttons to link to vendor site
        // $('.vendor-link').click(function(e) {
        //     var url = $(this).attr('data-vendor-link');
        //     window.location.href = url;
        //     e.preventDefault();
        // });

        $( document ).ready(function() {
          var slides_count = $("#block-views-creation-gallery-block .flex-control-nav li").length;
          var editions = $('#edit-attributes-field-format .form-item').length;
          if(slides_count > 0){
            $('#my-form-submit-wrapper').addClass("thumbnails");
          }
          if(editions > 0){
            $('#my-form-submit-wrapper').addClass("editions");
          }
        });

         //var $mySpecialLink = $('#block-dq-slider-dq-slider-store .dq-slide a');
         $('.node-blog p').has('img').once('dq-imgcenter-').addClass('dq-img-center');

         var scrollSettings = {
            autoHideScrollbar: false,
            scrollInertia: 100,
            //mouseWheel:{ preventDefault: true },
            theme: "dark"
          };

        //click anywhere on news list items to activate their links
        $('.view-mode-news_list').once().click(function(){
            var link_href = $(this).find('a').attr('href');
            window.location.href = link_href;
        });

        //apply custom scrollbars
         // $('.node-creation.view-mode-full .group-copy').once('dq-scroll').mCustomScrollbar(scrollSettings);
         // $('.node-press.view-mode-full .group-press-copy').once('dq-scroll').mCustomScrollbar(scrollSettings);
         // $('.node-event.view-mode-full .group-event-info').once('dq-scroll').mCustomScrollbar(scrollSettings);
         // $('.node-blog.view-mode-full .group_blog_body').once('dq-scroll').mCustomScrollbar(scrollSettings);
         // $('.group-authorinfo').once('dq-scroll').mCustomScrollbar(scrollSettings);
         //$('.google-store-locator-panel').once('dq-scroll').mCustomScrollbar($.extend(scrollSettings,{advanced:{updateOnContentResize:true}}));

        //apply ellipsis
        // $('.node-press.node-teaser .field-name-field-quote',el).ellipsis();
        // $('.node-podcast.node-teaser .field-name-body',el).ellipsis();
        // $('.node-video.node-teaser .field-name-body',el).ellipsis();

        //
         $('.google-store-locator-panel').bind('stores_changed',function() {
           //console.log('load!');
           //console.log($(this).height());
         });

         //adjust book description heights based on title heights
         window.addEventListener('load', function () {
            //console.log($('body').hasClass('node-type-creation'));
            $('.dq-mini-slider .node-creation').each(function(index, el) {

            // $('.field-name-book-teaser-title',el).click(function(){
            //     //console.log($(this).find('.title').text());

            //     //console.log($(this).actual('height'));
            //     //console.log($(this).actual('height') > 14);
            // });
            var titleheight = $('.field-name-book-teaser-title,.field-name-book-teaser-bookpage-title',el).actual('height');

            //newCss = {'height':"34px"};
            //console.log($(this).attr('about')+' '+titleheight);

                //console.log($('.field-name-book-teaser-title',el).find('.title').text());

                //console.log($('.field-name-book-teaser-title',el).actual('height'));
                //console.log($('.field-name-book-teaser-title',el).actual('height') > 14);
                //39 or 16
                // pathArray = window.location.pathname.split( '/' );
                // console.log(pathArray);
                // if(pathArray[1] == 'author' || pathArray[1] == 'authors') {
                //     newHeight = 34;
                //     $('.commerce-product-field-field-copy-description',el).css('margin-bottom','13px');

                // } else {
                //     newHeight = 20;
                // }



            if($('body').hasClass('node-type-creation')) {
                if(titleheight > 14) {
                    var newCss = {'height': '52px'};
                }
                if (titleheight > 28) {
                    var newCss = {'height':'38px'};

                }
            } else {
                if(titleheight > 14) {
                    var newCss = {'height': '20px'};
                }
                if (titleheight > 28) {
                    if($('body').hasClass('section-author')) {
                        var margin = 8;
                    } else {
                        var margin = 6;
                    }
                    var newCss = {'height':'0','margin-bottom': margin+'px'};
                }
            }

            //console.log($(this).attr('about')+' '+typeof newCss);
            if (typeof newCss !== 'undefined') {
                $('.commerce-product-field-field-copy-description',el).css(newCss);
                $('.commerce-product-field-field-copy-description',el).ellipsis();
            }
         });
            }, false);

         //remove bullets from empty book attribute fields
         $('.commerce-product-field-field-dimensions').each(function() {
            if($('.field-items',$(this)).is(':empty')) {
                $(this).addClass('no-bullet');
            }
         });

         //set the video copy links to copy their text
         var swf_path = window.location.origin +'/'+ Drupal.settings.dqtheme.zeroswf;
         ZeroClipboard.config( { moviePath: swf_path } );
         var client = new ZeroClipboard($(".node-video.node-teaser .links .copy a"));


         // Add modifier buttons to cart quantity fields

         links  = '<div class="dq-cart-up"></div>';
         links += '<div class="dq-cart-down"></div>';
         html = '<div class="dq-cart-buttons">'+links+'</div>';

         $('#views-form-commerce-cart-form-default .views-field-edit-quantity .form-item').each(function(){

            $(this).append(html);
            var dqparent = this;
            $('.dq-cart-up',dqparent).click(function() {
                value = parseInt($('input',dqparent).val())+1;
                $('input',dqparent).val(value);
            })
            $('.dq-cart-down',dqparent).click(function() {
                value = parseInt($('input',dqparent).val())-1;
                if(value >= 0) {
                    $('input',dqparent).val(value);
                }
            })
         });
         
         /* TODO
          * Added by Trevor Kjorlien, October 20th, 2017
          *
          * Need to move the Shipping FAQ block to the appropriate shipping section of the checkout form.
          * This should be done programatically instead of by jQuery.
         */ 
         $('body.page-checkout #block-block-14').insertAfter('#edit-customer-profile-shipping legend');
         $('body.page-checkout-shipping #block-block-14').insertAfter('#edit-commerce-shipping legend');
         $('body.page-checkout-review #block-block-14').hide();
         
         // $('#search-api-page-search-form-events-author-search input.form-text').val(authSearchLabel).focus(function(){
         //            if($(this).val() == authSearchLabel){
         //              $(this).val('');
         //            }
         //          }).blur(function(){
         //            if($(this).val()=="") {
         //              $(this).val(authSearchLabel);
         //            }
         //          });
         //
         //          $('#search-api-page-search-form-events-city-search input.form-text').val(citySearchLabel).focus(function(){
         //            if($(this).val() == citySearchLabel){
         //              $(this).val('');
         //            }
         //           }).blur(function(){
         //             if($(this).val()=="") {
         //               $(this).val(citySearchLabel);
         //             }
         //           });

         // Make fake form on Shop page go to full catalog.
         $('a.goto-full-catalog', context).click(function (event) {
           $('#quicktabs-tab-shop_navigation-1').click()
         });
         $('#qt-shop-navigation-reset').click(function(e) {
           $('#views-exposed-form-shop-navigation-block input[type=text]').val("");
         });
         $('input.goto-full-catalog', context).focus(function (event) {
           var name = $(this).attr('name');
           $('#quicktabs-tab-shop_navigation-1').click();
           $('input[id][name=' + name + ']').focus();
         });

         // Make shop navigation sliders fast.
         for (var base in Drupal.ajax) {
           if (Drupal.ajax.hasOwnProperty(base) && /^quicktabs-tab-shop_navigation-/.test(base)) {
              var ajax = Drupal.ajax[base];
              // Use HTTP GET, so Drupal can cache this.
              ajax.options.type = 'GET';
              // Prevent Drupal from doing ID munging, which would make the request too long for a GET.
              ajax.beforeSerialize = function() { };
           }
         }
       }
   };

  // Custom jQuery method. Like replaceWith(), but when applied to a view, it will not replace the exposed filters,
  // only the other parts. This keeps focus in filter textfields.
  function not_filters(e) {
    return e.children().not('.view-filters');
  }
  $.fn.extend({
    dq_views_replaceWith: function (new_content) {
      Drupal.detachBehaviors(this, Drupal.settings);

      // Only replace contents, not filters.
      not_filters(this).replaceWith(not_filters(new_content));
      Drupal.attachBehaviors(not_filters(this), Drupal.settings);
    }
  });

  // AJAX prefetching.
  //
  // Calling prefetch(id) will immediately perform the AJAX request for the Drupal AJAX object with that ID, and cache
  // the result. Future attempts to perform this AJAX request will use the cached value.
  //
  // Note that this will not work well if the value is not cacheable!
  var added_prefetch_transport = false;
  function prefetch(id, callback) {
    // We need a custom AJAX transport to handle caching. Add it if we haven't already added it.
    if (!added_prefetch_transport) {
      $.ajaxTransport('+*', function (options) {
        if (options.cached) {
          return {
            send: function(_, send_callback) {
              // Respond after a previous request finished.
              options.cached.done(function (data, status, xhr) {
                send_callback(xhr.status, xhr.statusText, { text: xhr.responseText }, xhr.getAllResponseHeaders());
              });
            },
            abort: function () { }
          };
        }
      });
      added_prefetch_transport = true;
    }

    // Remove callbacks, we'll add them in the transport.
    var options = $.extend({}, Drupal.ajax[id].options);
    delete options.error;
    delete options.complete;
    delete options.beforeSend;
    delete options.beforeSubmit;
    if (!callback) {
      callback = function() { }
    }
    options.success = callback;

    // Do the prefetch.
    Drupal.ajax[id].options.cached = $.ajax(options);
  }

  // If we have shop navigation, prefetch Full Catalog.
  $(function() {
    var id = 'quicktabs-tab-shop_navigation-1';
    if (Drupal.ajax && Drupal.ajax[id]) {
      prefetch(id, preloadFlexsliderImages);
    }
  });
})(jQuery);
;
// When the page is loaded, no matter what screensize, call the Verify Function.
jQuery(document).ready(function() {

  var menuHandler = null;

  hideAllMenus();

  setupMobileNav();

  // Set the Placeholder for the Exposed AJAX Store locator Filter
  jQuery("#edit-gsl-addressfield-locality").attr("placeholder", "Type your city ");
  jQuery("#edit-keys-1").attr("placeholder", "Search");

});

function setupMobileNav(){
  jQuery('.navbar-toggle').click(function(){
    menuHandler = this;

    // By default, always remove the Overlay
    removeOverlay();
    var buttonIsEnabled = jQuery(this).hasClass("down");

    // And hide all Menus
    hideAllMenus();

    // If the clicked Button is not the same that was enabled before
    // then show the new corresponding menu
    if (!buttonIsEnabled) {
      jQuery(this).addClass("down");
      showMenu('.region-header');
      createOverlay();
    }
  });
}

  // Create Overlay
  function createOverlay() {
    jQuery("<div id='overlay-mobile'></div>").appendTo("body").click(function(){
        jQuery(menuHandler).trigger("click");
    });
  }

  // Remove Overlay
  function removeOverlay() {
    jQuery("#overlay-mobile").remove();
  }

  // Helper function to show Mobile Menus
  function showMenu(menuSelector) {
    jQuery(menuSelector).show();
    jQuery(menuSelector).css('z-index', 11);
  }

  // Helper function to hide Mobile Menus
  function hideMenu(menuSelector) {
    jQuery(menuSelector).hide();
    jQuery(menuSelector).css('z-index', -1);
  }

  // Helper function to hide all Mobile Menus
  function hideAllMenus() {
    hideMenu('.region-header');
    jQuery('.navbar-toggle').removeClass('down');
  }

  function scrollToTheDiv(selector) {
    jQuery('html, body').animate({
        scrollTop: jQuery(selector).offset().top
    }, 500);
  }
;
/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {

    jQuery(document).ready(function() {
        
        $('.node-teaser.node-blog .paragraphs-items > .field > .field-items > .field-item:nth-child(n+3)').css('display','none');
  
    });
    
// Place your code here.


})(jQuery, Drupal, this, this.document);
;
