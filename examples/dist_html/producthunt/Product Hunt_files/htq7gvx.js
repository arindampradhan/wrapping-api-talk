/*
 * For font license information, see the CSS file loaded by this JavaScript.
 */
if(!window.Typekit)window.Typekit={};window.Typekit.config={"a":"1096263","c":[".tk-proxima-nova","\"proxima-nova\",sans-serif"],"f":"//use.typekit.net/c/7751e8/1w;proxima-nova,2,b5x:P:i4,b5z:P:i6,b61:P:i7,b5w:P:n4,b5y:P:n6,bBh:P:n7/{format}{/extras*}?3bb2a6e53c9684ffdc9a99f0195b2a623b415314be9d609763d29e36df9b6fb34e4e54e38aa2b361eadf9d005c943c0c5d8ab49cb1313b1302b7381bbcf66452d2b75dc923f1d9b4d2d3f33baa3aa2dfffeaf8bbcd6ce17007c702a1d74b7ad3664b4fe374f1715ac1f0d3c7b5d1fe3088197065f7d19abba24969f4f936ef4eff6542956c129721e641bd811197625e2cc9af0f0802ca78965a0e7bf72d8bafe5195d3f046186e21135f6bf0b7bdb2ad6fbdc6d52a923326832e0c4722d4b3309cc9b2fd4d0e1f824b47855d4ffa97b3a6ef0b037163ba7965cce5fc634b0ae2f79f47facd7540f20ea163ad32c124c55dcdc269917137d49932d9fb84feba44d776e9f2c694272a284c33b5cbe1461e6673fa21bddd9888102bd5beebe354c78e31101aff7009080670f2f507ec91c89f17f074aae0d2b093c8e1ae8c86efaa46c0fb155a9f402417b1595085e41561e55f85db2faa372cdeb49b50800af81f966d459efa0607461699b","fi":[139,140,173,174,175,176],"fn":["proxima-nova",["i4","i6","i7","n4","n6","n7"]],"ht":"tk","js":"1.11.9","k":"//use.typekit.net/{id}.js","kt":"htq7gvx","p":"//p.typekit.net/p.gif?s=1&k=htq7gvx&ht=tk&h={host}&f=139.140.173.174.175.176&a=1096263&_={_}","ps":1,"w":"htq7gvx"};
/*{"k":"1.11.9","auto_updating":true}*/
;(function(window,document,undefined){
function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function g(a,b,c){g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return g.apply(null,arguments)}var ca=Date.now||function(){return+new Date};
function da(a,b){this.ma=a;this.W=b||a;this.H=this.W.document}da.prototype.createElement=function(a,b,c){a=this.H.createElement(a);if(b)for(var d in b)b.hasOwnProperty(d)&&("style"==d?a.style.cssText=b[d]:a.setAttribute(d,b[d]));c&&a.appendChild(this.H.createTextNode(c));return a};function ea(a,b,c){a=a.H.getElementsByTagName(b)[0];a||(a=document.documentElement);a&&a.lastChild&&a.insertBefore(c,a.lastChild)}function fa(a,b){function c(){a.H.body?b():setTimeout(c,0)}c()}
function l(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,h=0;h<d.length;h+=1)if(b[e]===d[h]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(h=0;h<c.length;h+=1)if(d[e]===c[h]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function ga(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ha(a){if("string"===typeof a.pa)return a.pa;var b=a.W.location.protocol;"about:"==b&&(b=a.ma.location.protocol);return"https:"==b?"https:":"http:"}function ia(a,b){/^http(s)?:$/.test(b)&&(a.pa=b)}function ja(a){return a.W.location.hostname||a.ma.location.hostname}function ka(a,b,c){b=a.createElement("link",{rel:"stylesheet",href:b});var d=!1;b.onload=function(){d||(d=!0,c&&c(null))};b.onerror=function(){d||(d=!0,c&&c(Error("Stylesheet failed to load")))};ea(a,"head",b)}
function la(a,b,c){var d=a.H.getElementsByTagName("head")[0];if(d){var e=a.createElement("script",{src:b}),f=!1;e.onload=e.onreadystatechange=function(){f||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(f=!0,c&&c(null),e.onload=e.onreadystatechange=null,"HEAD"==e.parentNode.tagName&&d.removeChild(e))};d.appendChild(e);window.setTimeout(function(){f||(f=!0,c&&c(Error("Script load timeout")))},5E3)}}function m(a){this.ta=a}
function p(a,b,c,d){this.l=null!=a?a:null;this.p=null!=b?b:null;this.O=null!=c?c:null;this.h=null!=d?d:null}var ma=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;p.prototype.compare=function(a){return this.l>a.l||this.l===a.l&&this.p>a.p||this.l===a.l&&this.p===a.p&&this.O>a.O?1:this.l<a.l||this.l===a.l&&this.p<a.p||this.l===a.l&&this.p===a.p&&this.O<a.O?-1:0};function q(a,b){return-1===a.compare(b)}function t(a,b){return 0===a.compare(b)||1===a.compare(b)}
function v(a,b){return 0===a.compare(b)}p.prototype.toString=function(){return[this.l,this.p||"",this.O||"",this.h||""].join("")};function w(a){a=ma.exec(a);var b=null,c=null,d=null,e=null;a&&(null!==a[1]&&a[1]&&(b=parseInt(a[1],10)),null!==a[2]&&a[2]&&(c=parseInt(a[2],10)),null!==a[3]&&a[3]&&(d=parseInt(a[3],10)),null!==a[4]&&a[4]&&(e=/^[0-9]+$/.test(a[4])?parseInt(a[4],10):a[4]));return new p(b,c,d,e)}
function x(a,b,c,d,e,f,h,k){this.X=a;this.v=b;this.I=c;this.S=d;this.m=e;this.g=f;this.ba=h;this.A=k}x.prototype.getName=function(){return this.X};function na(a,b){this.b=a;this.R=b}var oa=new x("Unknown",new p,"Unknown",new p,"Unknown",new p,void 0,new m(!1));
na.prototype.parse=function(){var a;if(-1!=this.b.indexOf("MSIE")||-1!=this.b.indexOf("Trident/")){a=y(this);var b=w(z(this)),c=null,d=null,e=null,e=A(this.b,/Trident\/([\d\w\.]+)/,1),f=B(this.R),c=-1!=this.b.indexOf("MSIE")?w(A(this.b,/MSIE ([\d\w\.]+)/,1)):w(A(this.b,/rv:([\d\w\.]+)/,1));""!=e?(d="Trident",e=w(e)):(d="Unknown",e=new p);a=new x("MSIE",c,d,e,a,b,f,new m(!1))}else if(-1!=this.b.indexOf("Opera"))a:if(a="Unknown",b=w(A(this.b,/Presto\/([\d\w\.]+)/,1)),c=w(z(this)),d=B(this.R),null!==
b.l?a="Presto":(-1!=this.b.indexOf("Gecko")&&(a="Gecko"),b=w(A(this.b,/rv:([^\)]+)/,1))),-1!=this.b.indexOf("Opera Mini/"))f=w(A(this.b,/Opera Mini\/([\d\.]+)/,1)),a=new x("OperaMini",f,a,b,y(this),c,d,new m(!1));else{if(-1!=this.b.indexOf("Version/")&&(f=w(A(this.b,/Version\/([\d\.]+)/,1)),null!==f.l)){a=new x("Opera",f,a,b,y(this),c,d,new m(!1));break a}f=w(A(this.b,/Opera[\/ ]([\d\.]+)/,1));a=null!==f.l?new x("Opera",f,a,b,y(this),c,d,new m(!1)):new x("Opera",new p,a,b,y(this),c,d,new m(!1))}else/OPR\/[\d.]+/.test(this.b)?
a=pa(this):/AppleWeb(K|k)it/.test(this.b)?a=pa(this):-1!=this.b.indexOf("Gecko")?(a="Unknown",b=new p,c=w(z(this)),-1!=this.b.indexOf("Firefox")?(a="Firefox",b=w(A(this.b,/Firefox\/([\d\w\.]+)/,1))):-1!=this.b.indexOf("Mozilla")&&(a="Mozilla"),d=w(A(this.b,/rv:([^\)]+)/,1)),a=new x(a,b,"Gecko",d,y(this),c,B(this.R),new m(!1))):a=oa;return a};
function y(a){var b=A(a.b,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!=b)return/BB\d{2}/.test(b)&&(b="BlackBerry"),b;a=A(a.b,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/,1);return""!=a?("Mac_PowerPC"==a?a="Macintosh":"PlayStation"==a&&(a="Linux"),a):"Unknown"}
function z(a){var b=A(a.b,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(b||(b=A(a.b,/Windows Phone( OS)? ([^;)]+)/,2))||(b=A(a.b,/(iPhone )?OS ([\d_]+)/,2)))return b;if(b=A(a.b,/(?:Linux|CrOS|CrKey) ([^;)]+)/,1))for(var b=b.split(/\s/),c=0;c<b.length;c+=1)if(/^[\d\._]+$/.test(b[c]))return b[c];return(a=A(a.b,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}
function pa(a){var b=y(a),c=w(z(a)),d=w(A(a.b,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1)),e="Unknown",f=new p,f="Unknown";/OPR\/[\d.]+/.test(a.b)?e="Opera":-1!=a.b.indexOf("Chrome")||-1!=a.b.indexOf("CrMo")||-1!=a.b.indexOf("CriOS")?e="Chrome":/Silk\/\d/.test(a.b)?e="Silk":"BlackBerry"==b||"Android"==b?e="BuiltinBrowser":-1!=a.b.indexOf("PhantomJS")?e="PhantomJS":-1!=a.b.indexOf("Safari")?e="Safari":-1!=a.b.indexOf("AdobeAIR")?e="AdobeAIR":-1!=a.b.indexOf("PlayStation")&&(e="BuiltinBrowser");"BuiltinBrowser"==
e?f="Unknown":"Silk"==e?f=A(a.b,/Silk\/([\d\._]+)/,1):"Chrome"==e?f=A(a.b,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=a.b.indexOf("Version/")?f=A(a.b,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==e?f=A(a.b,/AdobeAIR\/([\d\.]+)/,1):"Opera"==e?f=A(a.b,/OPR\/([\d.]+)/,1):"PhantomJS"==e&&(f=A(a.b,/PhantomJS\/([\d.]+)/,1));f=w(f);return new x(e,f,"AppleWebKit",d,b,c,B(a.R),new m(536>d.l||536==d.l&&11>d.p))}function A(a,b,c){return(a=a.match(b))&&a[c]?a[c]:""}function B(a){if(a.documentMode)return a.documentMode}
function qa(a){this.Ca=a||"-"}qa.prototype.h=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.Ca)};function ra(a,b){this.e=a;this.s=a.W.document.documentElement;this.Z=b;this.o="wf";this.n=new qa("-");this.xa=!1!==b.events;this.D=!1!==b.classes}function sa(a){if(a.D){var b=ga(a.s,a.n.h(a.o,"active")),c=[],d=[a.n.h(a.o,"loading")];b||c.push(a.n.h(a.o,"inactive"));l(a.s,c,d)}C(a,"inactive")}
function C(a,b,c){if(a.xa&&a.Z[b])if(c)a.Z[b](c.getName(),D(c));else a.Z[b]()}function E(a,b){this.X=a;this.da=4;this.Y="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.Y=c[1],this.da=parseInt(c[2],10))}E.prototype.getName=function(){return this.X};function D(a){return a.Y+a.da}function F(a,b){this.e=a;this.M=b;this.u=this.e.createElement("span",{"aria-hidden":"true"},this.M)}function ta(a){ea(a.e,"body",a.u)}
function ua(a){var b;b=[];for(var c=a.X.split(/,\s*/),d=0;d<c.length;d++){var e=c[d].replace(/['"]/g,"");-1==e.indexOf(" ")?b.push(e):b.push("'"+e+"'")}b=b.join(",");c="normal";"o"===a.Y?c="oblique":"i"===a.Y&&(c="italic");return"display:block;position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+b+";"+("font-style:"+c+";font-weight:"+(a.da+"00")+";")}
F.prototype.remove=function(){var a=this.u;a.parentNode&&a.parentNode.removeChild(a)};function va(a,b,c,d,e,f,h,k){this.ea=a;this.Ba=b;this.e=c;this.w=d;this.M=k||"BESbswy";this.A=e;this.N={};this.ca=f||3E3;this.na=h||null;this.L=this.K=null;a=new F(this.e,this.M);ta(a);for(var n in G)G.hasOwnProperty(n)&&(b=new E(G[n],D(this.w)),b=ua(b),a.u.style.cssText=b,this.N[G[n]]=a.u.offsetWidth);a.remove()}var G={Pa:"serif",Oa:"sans-serif",La:"monospace"};
va.prototype.start=function(){this.K=new F(this.e,this.M);ta(this.K);this.L=new F(this.e,this.M);ta(this.L);this.Ga=ca();var a=new E(this.w.getName()+",serif",D(this.w)),a=ua(a);this.K.u.style.cssText=a;a=new E(this.w.getName()+",sans-serif",D(this.w));a=ua(a);this.L.u.style.cssText=a;wa(this)};function xa(a,b,c){for(var d in G)if(G.hasOwnProperty(d)&&b===a.N[G[d]]&&c===a.N[G[d]])return!0;return!1}
function wa(a){var b=a.K.u.offsetWidth,c=a.L.u.offsetWidth;b===a.N.serif&&c===a.N["sans-serif"]||a.A.ta&&xa(a,b,c)?ca()-a.Ga>=a.ca?a.A.ta&&xa(a,b,c)&&(null===a.na||a.na.hasOwnProperty(a.w.getName()))?ya(a,a.ea):ya(a,a.Ba):za(a):ya(a,a.ea)}function za(a){setTimeout(g(function(){wa(this)},a),25)}function ya(a,b){a.K.remove();a.L.remove();b(a.w)}function Aa(a,b,c,d){this.e=b;this.B=c;this.aa=0;this.ra=this.la=!1;this.ca=d;this.A=a.A}
Aa.prototype.ya=function(a){var b=this.B;b.D&&l(b.s,[b.n.h(b.o,a.getName(),D(a).toString(),"active")],[b.n.h(b.o,a.getName(),D(a).toString(),"loading"),b.n.h(b.o,a.getName(),D(a).toString(),"inactive")]);C(b,"fontactive",a);this.ra=!0;Ba(this)};
Aa.prototype.za=function(a){var b=this.B;if(b.D){var c=ga(b.s,b.n.h(b.o,a.getName(),D(a).toString(),"active")),d=[],e=[b.n.h(b.o,a.getName(),D(a).toString(),"loading")];c||d.push(b.n.h(b.o,a.getName(),D(a).toString(),"inactive"));l(b.s,d,e)}C(b,"fontinactive",a);Ba(this)};function Ba(a){0==--a.aa&&a.la&&(a.ra?(a=a.B,a.D&&l(a.s,[a.n.h(a.o,"active")],[a.n.h(a.o,"loading"),a.n.h(a.o,"inactive")]),C(a,"active")):sa(a.B))}function H(){this.F=this.P=-1}H.prototype.now=function(){return(new Date).getTime()};
H.prototype.start=function(){this.P=this.now();this.F=-1};H.prototype.stop=function(){this.F=this.now()};function Ca(){var a=[{name:"font-family",value:I.c[J+1]}];this.Ea=[I.c[J]];this.ha=a}function Da(a){for(var b=a.Ea.join(","),c=[],d=0;d<a.ha.length;d++){var e=a.ha[d];c.push(e.name+":"+e.value+";")}return b+"{"+c.join("")+"}"}function Ea(a){this.e=a}Ea.prototype.toString=function(){return encodeURIComponent(ja(this.e))};function Fa(a,b){this.q=a;this.r=b}
Fa.prototype.toString=function(){for(var a=[],b=0;b<this.r.length;b++)for(var c=this.r[b],d=c.C(),c=c.C(this.q),e=0;e<d.length;e++){var f;a:{for(f=0;f<c.length;f++)if(d[e]===c[f]){f=!0;break a}f=!1}a.push(f?1:0)}a=a.join("");a=a.replace(/^0+/,"");b=[];for(d=a.length;0<d;d-=4)b.unshift(parseInt(a.slice(0>d-4?0:d-4,d),2).toString(16));return b.join("")};function K(a){this.Ia=a}
K.prototype.h=function(a,b){var c=b||{},d=this.Ia.replace(/\{\/?([^*}]*)(\*?)\}/g,function(a,b,d){return d&&c[b]?"/"+c[b].join("/"):c[b]||""});d.match(/^\/\//)&&(d=(a?"https:":"http:")+d);return d.replace(/\/*\?*($|\?)/,"$1")};function Ga(a,b){for(var c=[],d=0;d<b.length;d++)c.push(b[d].toString());return{format:a,extras:c}}function Ha(a,b){this.J=a;this.U=b;this.ja={};this.ia={}}Ha.prototype.C=function(a){return a?(this.ja[a]||this.U).slice(0):this.U.slice(0)};
function Ia(a,b,c){for(var d=[],e=a.J.split(",")[0].replace(/"|'/g,""),f=a.C(),h,k=[],n={},s=0;s<f.length;s++)h=f[s],0<h.length&&!n[h]&&(n[h]=!0,k.push(h));c=c.qa?c.qa(e,k,d):k;a.ja[b]=c;a.ia[b]=d}function Ka(a,b){for(var c=a.C(b),d=a.ia[b]||[],e=[],f=0;f<c.length;f++)e.push(new E(a.J,c[f]));for(f=0;f<d.length;f++)if(c=d[f].J,c!==a.J)for(var h=d[f].C(),k=0;k<h.length;k++)e.push(new E(c,h[k]));return e}function La(a,b){this.J=a;this.U=b}La.prototype.C=function(){return this.U};
function Ma(a,b,c,d,e){this.Fa=a;this.Aa=b;this.T=c||[];this.va=d||null;this.Ha=e||null}
Ma.prototype.send=function(a,b,c){var d=new K("//p.typekit.net/p.gif?s={service}&k={token}&app={app}&ht={hosting}&h={host}&f={variations}&a={account}&sl={stylesheetLoadTime}&fl={fontLoadTime}&_={_}"),e=encodeURIComponent((window.__adobewebfontsappname__||"").toString().substr(0,20)),f=encodeURIComponent(ja(a)),h=[],k=[];window.Typekit.fonts||(window.Typekit.fonts=[]);for(var k=window.Typekit.fonts,n=0;n<this.T.length;n++){for(var s=!1,r=0;r<k.length;r++)if(this.T[n]===k[r]){s=!0;break}s||(h.push(this.T[n]),
k.push(this.T[n]))}h.length&&Na(d.h("https:"===ha(a),{service:this.Fa,token:this.Ha,app:e,hosting:this.Aa,host:f,variations:h.join("."),account:this.va,stylesheetLoadTime:b,fontLoadTime:c,_:(+new Date).toString()}))};function Na(a){var b=new Image(1,1),c=!1;b.src=a;b.onload=function(){c=!0;b.onload=null};setTimeout(function(){c||(b.src="about:blank",b.onload=null)},3E3)}function Oa(){this.fa=this.ua=this.G=this.V=this.ka=!0}function L(a){return"Windows"===a.m}
function M(a){return L(a)&&v(a.g,new p(5,1))||L(a)&&v(a.g,new p(5,2))||L(a)&&v(a.g,new p(6,0))||L(a)&&t(a.g,new p(6,1))}function N(a){return"Macintosh"===a.m&&(t(a.g,new p(10,4))||null===a.g.l)}function Pa(a,b){return b.ka&&("iPhone"===a.m||"iPod"===a.m)}function Qa(a,b){return Pa(a,b)&&t(a.g,new p(4,2))&&q(a.g,new p(5))}function Ra(a,b){return b.V&&"iPad"===a.m&&t(a.g,new p(4,2))&&q(a.g,new p(5))}function O(a,b){return b.G&&"Android"===a.m}
function Sa(a,b){return O(a,b)&&t(a.g,new p(2,2))&&q(a.g,new p(3,1))}function Ta(a,b){return O(a,b)&&t(a.g,new p(3,1))&&q(a.g,new p(4,1))}function P(a){return"Linux"===a.m||"Ubuntu"===a.m}function Ua(a){return"Safari"===a.getName()&&"AppleWebKit"===a.I||"Unknown"===a.getName()&&"AppleWebKit"===a.I&&("iPhone"===a.m||"iPad"===a.m||"iPod"===a.m)}function Va(a){return"BuiltinBrowser"===a.getName()}function Wa(a){this.qa=a}function Xa(a,b){return b}
var R={Ma:"a",Qa:"d",Ka:"i",Na:"j",Ja:"k",NONE:"x"},S={a:function(a,b){return"Safari"===a.getName()&&"AppleWebKit"===a.I&&t(a.S,new p(525,13))&&q(a.S,new p(534,50))&&(M(a)||N(a))||Va(a)&&(Sa(a,b)||O(a,b)&&t(a.g,new p(4,1)))||b.G&&"Silk"===a.getName()&&q(a.v,new p(2))&&(Sa(a,b)||N)||b.G&&"Silk"===a.getName()&&t(a.v,new p(2))&&O(a,b)&&t(a.g,new p(4,1))||Ua(a)&&(Ra(a,b)||Qa(a,b))||"Chrome"===a.getName()&&t(a.v,new p(6))&&(Ra(a,b)||Qa(a,b))||"AdobeAIR"===a.getName()&&t(a.v,new p(2,5))&&(L(a)&&null===
a.g.l||P(a)||N(a))},d:function(a,b){return"Chrome"===a.getName()&&t(a.v,new p(6))&&(M(a)||P(a)||N(a)||O(a,b)||"CrOS"===a.m||"CrKey"===a.m||b.V&&"iPad"===a.m&&t(a.g,new p(5))||Pa(a,b)&&t(a.g,new p(5)))||"Gecko"===a.I&&1===a.S.compare(new p(1,9,1))&&(M(a)||P(a)||N(a)||O(a,b))||"Safari"===a.getName()&&"AppleWebKit"===a.I&&t(a.S,new p(534,50))&&(M(a)||N(a))||Ua(a)&&(b.V&&"iPad"===a.m&&t(a.g,new p(5))||Pa(a,b)&&t(a.g,new p(5)))||"Opera"===a.getName()&&t(a.v,new p(11,10))&&(M(a)||P(a)||N(a)||O(a,b))||"MSIE"===
a.getName()&&9<=a.ba&&(L(a)&&t(a.g,new p(6,1))||L(a)&&v(a.g,new p(6,0)))||"MSIE"===a.getName()&&b.ua&&"Windows Phone"===a.m&&t(a.g,new p(8))||Va(a)&&(b.fa&&"BlackBerry"===a.m&&t(a.g,new p(10))||P(a))},j:function(a,b){return Va(a)&&Ta(a,b)||b.G&&"Silk"===a.getName()&&t(a.v,new p(2))&&(Ta(a,b)||P(a))},i:function(a){return"MSIE"===a.getName()&&t(a.v,new p(6,0))&&(void 0===a.ba||9>a.ba)&&M(a)},x:function(){return!1}},Ya={};
Ya.i=new Wa(function(a,b,c){for(var d=0;d<b.length;d+=1){var e=b[d],f;f=e;f=a.replace(/(-1|-2)$/,"").slice(0,28)+"-"+f;c.push(new La(f,[e]))}a={};for(e=0;e<b.length;e++)c=b[e],d=c.charAt(1),(a[d]||(a[d]=[])).push(c);c=[[4,3,2,1,5,6,7,8,9],[7,8,9,6,5,4,3,2,1]];d=[];for(e=0;e<c.length;e++){f=c[e];for(var h=0;h<f.length;h++){var k=f[h];if(a[k]){d=d.concat(a[k]);break}}}c=d;d={};a=[];for(e=0;e<c.length;e++)f=c[e],d[f]||(d[f]=!0,a.push(f));c=[];for(d=0;d<b.length;d++)for(e=b[d],f=0;f<a.length;f++)h=a[f],
h==e&&c.push(h);return c});var T={};T.a=T.d=T.j=function(){return[]};T.i=function(a,b,c){return[new Ea(a),new Fa(b,c)]};T.k=function(a){return[new Ea(a)]};function Za(a,b,c){return T[b](a,b,c)}function U(a){this.e=a;this.q="x";this.ga=this.b=null;this.r=[];this.Q=[];this.$=null}U.prototype.supportsConfiguredBrowser=function(){return"x"!==this.q};
U.prototype.init=function(){if(0<this.Q.length){for(var a=[],b=0;b<this.Q.length;b++)a.push(Da(this.Q[b]));var b=this.e,a=a.join(""),c=this.e.createElement("style");c.setAttribute("type","text/css");c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a));ea(b,"head",c)}};
U.prototype.load=function(a,b,c){function d(){}var e=this,f=c||{},h=f.contextPath||".";a=f.timeout;c=!1!==f.events;var k=null,n=new H,s=new H;f.active&&(d=f.active);f.active=function(){s.stop();e.oa&&e.oa.send(e.e,-1!==n.P&&-1!==n.F?n.F-n.P:-1,-1!==s.P&&-1!==s.F?s.F-s.P:-1);d()};k=new ra(this.e,f);if(this.q){for(var f=Ya[this.q]||new Wa(Xa),r=0;r<this.r.length;r++)Ia(this.r[r],this.q,f);this.$&&(f=Za(this.e,this.q,this.r),f=Ga(this.q,f),f.contextPath=h,h=this.$.h("https:"===ha(this.e),f),n.start(),
ka(this.e,h,function(){n.stop();s.start()}));if(c){for(var Q=[],Ja={},u=new Aa(this.b,this.e,k,a),r=0;r<this.r.length;r++)Q=Q.concat(Ka(this.r[r],this.q));for(r=0;r<Q.length;r++)Ja[Q[r].getName()]="BESbswy\ue000\ue001\ue002\ue003\ue004\ue005\ue006";fa(this.e,function(){var a=Q,c={},d=Ja||{};if(0===a.length&&b)sa(u.B);else{u.aa+=a.length;b&&(u.la=b);for(var e=0;e<a.length;e++){var f=a[e],h=d[f.getName()],k=u.B,n=f;k.D&&l(k.s,[k.n.h(k.o,n.getName(),D(n).toString(),"loading")]);C(k,"fontloading",n);
k=null;k=new va(g(u.ya,u),g(u.za,u),u.e,f,u.A,u.ca,c,h);k.start()}}})}}};U.prototype.performOptionalActions=function(){};function $a(a,b,c,d){this.Da=a;this.e=b;this.b=c;this.s=d;this.t=[]}$a.prototype.wa=function(a){this.t.push(a)};$a.prototype.load=function(a,b){var c=a,d=b||{};"string"==typeof c?c=[c]:c&&c.length||(d=c||{},c=[]);d.protocol&&ia(this.e,d.protocol);if(c.length)for(var e=this,f=c.length,h=0;h<c.length;h++)ab(this,c[h],function(){0==--f&&bb(e,d)});else bb(this,d)};
function ab(a,b,c){b=a.Da.h("https:"===ha(a.e),{id:encodeURIComponent(b)});la(a.e,b,c)}function bb(a,b){if(0!=a.t.length){for(var c=new ra(a.e,b),d=!1,e=0;e<a.t.length;e++)a.t[e].init(),d=d||a.t[e].supportsConfiguredBrowser();if(d)for(c.D&&l(c.s,[c.n.h(c.o,"loading")]),C(c,"loading"),c=0;c<a.t.length;c++)d=a.t[c],d.supportsConfiguredBrowser()&&d.load(null,c==a.t.length-1,b);else sa(c);a.t=[]}}var cb=(new na(navigator.userAgent,document)).parse(),db=new da(window);window.Typekit||(window.Typekit={});
if(!window.Typekit.load){var eb=window.Typekit.config||{},fb=null;eb.k&&(fb=new K(eb.k));var V=new $a(fb,db,cb,document.documentElement);window.Typekit.load=function(){V.load.apply(V,arguments)};window.Typekit.addKit=function(){V.wa.apply(V,arguments)}}var gb,W,X,I=window.Typekit.config||{};X=new U(db);X.oa=new Ma(I.ps,I.ht,I.fi,I.a,I.kt);W=new Oa;W.ka=!I.si;W.V=!I.st;W.G=!I.sa;W.ua=!I.sw;W.fa=!I.sb;X.ga=W;I.f&&(gb=new K(I.f),X.$=gb);var J;
if(I.fn)for(J=0;J<I.fn.length;J+=2)X.r.push(new Ha(I.fn[J],I.fn[J+1]));if(I.c)for(J=0;J<I.c.length;J+=2)X.Q.push(new Ca);X.b=cb;var Y;a:{var hb=X.b,ib=new Oa,jb=X.ga||ib,Z;for(Z in R){var $=R[Z];if(S[$]&&S[$](hb,jb)){Y=$;break a}}for(Z in R)if($=R[Z],S[$]&&S[$](hb,ib)){Y="x";break a}Y="k"}X.q=Y;window.Typekit.addKit(X);if(window.WebFont)try{window.Typekit.load()}catch(kb){};
})(this,document);
