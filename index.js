// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";function n(n){return n!=n}var t,r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,e=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,f="function"==typeof i?i.toStringTag:"",u=r&&"symbol"==typeof Symbol.toStringTag?function(n){var t,r,i,u,a;if(null==n)return o.call(n);r=n[f],a=f,t=null!=(u=n)&&e.call(u,a);try{n[f]=void 0}catch(t){return o.call(n)}return i=o.call(n),t?n[f]=r:delete n[f],i}:function(n){return o.call(n)},a="function"==typeof Uint32Array,c="function"==typeof Uint32Array?Uint32Array:null,y="function"==typeof Uint32Array?Uint32Array:void 0;t=function(){var n,t,r;if("function"!=typeof c)return!1;try{t=new c(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(a&&r instanceof Uint32Array||"[object Uint32Array]"===u(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?y:function(){throw new Error("not implemented")};var l,p=t,A="function"==typeof Float64Array,v="function"==typeof Float64Array?Float64Array:null,d="function"==typeof Float64Array?Float64Array:void 0;l=function(){var n,t,r;if("function"!=typeof v)return!1;try{t=new v([1,3.14,-3.14,NaN]),r=t,n=(A&&r instanceof Float64Array||"[object Float64Array]"===u(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?d:function(){throw new Error("not implemented")};var U,b=l,m="function"==typeof Uint8Array,w="function"==typeof Uint8Array?Uint8Array:null,s="function"==typeof Uint8Array?Uint8Array:void 0;U=function(){var n,t,r;if("function"!=typeof w)return!1;try{t=new w(t=[1,3.14,-3.14,256,257]),r=t,n=(m&&r instanceof Uint8Array||"[object Uint8Array]"===u(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?s:function(){throw new Error("not implemented")};var h,N=U,F="function"==typeof Uint16Array,S="function"==typeof Uint16Array?Uint16Array:null,g="function"==typeof Uint16Array?Uint16Array:void 0;h=function(){var n,t,r;if("function"!=typeof S)return!1;try{t=new S(t=[1,3.14,-3.14,65536,65537]),r=t,n=(F&&r instanceof Uint16Array||"[object Uint16Array]"===u(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?g:function(){throw new Error("not implemented")};var j,E={uint16:h,uint8:N};(j=new E.uint16(1))[0]=4660;var T=52===new E.uint8(j.buffer)[0],I=!0===T?1:0,x=new b(1),O=new p(x.buffer);function G(n){return x[0]=n,O[I]}var P=!0===T?1:0,V=new b(1),Y=new p(V.buffer),_=1023,k=Number.NEGATIVE_INFINITY,q=.6931471803691238,z=1.9082149292705877e-10,B=0x40000000000000,C=.3333333333333333,D=1048575,H=2146435072,J=1048576,K=1072693248;function L(t){var r,o,e,i,f,u,a,c,y,l,p,A;return 0===t?k:n(t)||t<0?NaN:(f=0,(o=G(t))<J&&(f-=54,o=G(t*=B)),o>=H?t+t:(f+=(o>>20)-_|0,f+=(c=614244+(o&=D)&1048576|0)>>20|0,a=(t=function(n,t){return V[0]=n,Y[P]=t>>>0,V[0]}(t,o|c^K))-1,(D&2+o)<3?0===a?0===f?0:f*q+f*z:(u=a*a*(.5-C*a),0===f?a-u:f*q-(u-f*z-a)):(c=o-398458|0,y=440401-o|0,i=(p=(A=(l=a/(2+a))*l)*A)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(p),e=A*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(p),u=e+i,(c|=y)>0?(r=.5*a*a,0===f?a-(r-l*(r+u)):f*q-(r-(l*(r+u)+f*z)-a)):0===f?a-l*(a-u):f*q-(l*(a-u)-f*z-a))))}var M=9.869604401089358;return function(t){var r,o,e,i;return n(t)||t<0?NaN:1===t?0:0===t?M/6:(r=0,t>2&&(t=1/t,r|=2),t>1.5?(o=1/t-1,r|=2):t<.5?(o=-t,r|=1):o=t-1,e=-o*function(n){return 0===n?1:1+n*(3.297713409852251+n*(4.256971560081218+n*(2.7114985119655346+n*(.8796913117545303+n*(.13384763957830903+n*(.007315890452380947+46512858607399003e-21*n))))))}(o)/function(n){return 0===n?1:1+n*(3.547713409852251+n*(5.03278880143317+n*(3.6380053334513707+n*(1.4117259775183106+n*(.2829748606025681+n*(.02540437639325444+.0006909904889125533*n))))))}(o),1&r&&(e=M/6-L(t)*L(1-t)-e),2&r&&(e=-.5*(i=L(t))*i-e),e)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).spence=t();
//# sourceMappingURL=index.js.map
