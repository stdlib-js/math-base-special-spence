// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).spence=t()}(this,(function(){"use strict";var n=function(n){return n!=n};var t=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var r=function(){return t&&"symbol"==typeof Symbol.toStringTag},o=Object.prototype.toString,e=o;var i=function(n){return e.call(n)},u=Object.prototype.hasOwnProperty;var f=function(n,t){return null!=n&&u.call(n,t)},a="function"==typeof Symbol?Symbol.toStringTag:"",c=f,y=a,l=o;var p=i,v=function(n){var t,r,o;if(null==n)return l.call(n);r=n[y],t=c(n,y);try{n[y]=void 0}catch(t){return l.call(n)}return o=l.call(n),t?n[y]=r:delete n[y],o},A=r()?v:p,U=A,b="function"==typeof Uint32Array;var d="function"==typeof Uint32Array?Uint32Array:null,m=function(n){return b&&n instanceof Uint32Array||"[object Uint32Array]"===U(n)},w=d;var s=function(){var n,t;if("function"!=typeof w)return!1;try{t=new w(t=[1,3.14,-3.14,4294967296,4294967297]),n=m(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n};var h="function"==typeof Uint32Array?Uint32Array:void 0,N=function(){throw new Error("not implemented")},F=s()?h:N,S=A,g="function"==typeof Float64Array;var j="function"==typeof Float64Array?Float64Array:null,E=function(n){return g&&n instanceof Float64Array||"[object Float64Array]"===S(n)},T=j;var I=function(){var n,t;if("function"!=typeof T)return!1;try{t=new T([1,3.14,-3.14,NaN]),n=E(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n};var x="function"==typeof Float64Array?Float64Array:void 0,O=function(){throw new Error("not implemented")},G=I()?x:O,P=A,V="function"==typeof Uint8Array;var Y="function"==typeof Uint8Array?Uint8Array:null,_=function(n){return V&&n instanceof Uint8Array||"[object Uint8Array]"===P(n)},k=Y;var q=function(){var n,t;if("function"!=typeof k)return!1;try{t=new k(t=[1,3.14,-3.14,256,257]),n=_(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n};var z="function"==typeof Uint8Array?Uint8Array:void 0,B=function(){throw new Error("not implemented")},C=q()?z:B,D=A,H="function"==typeof Uint16Array;var J="function"==typeof Uint16Array?Uint16Array:null,K=function(n){return H&&n instanceof Uint16Array||"[object Uint16Array]"===D(n)},L=J;var M=function(){var n,t;if("function"!=typeof L)return!1;try{t=new L(t=[1,3.14,-3.14,65536,65537]),n=K(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n};var Q,R="function"==typeof Uint16Array?Uint16Array:void 0,W=function(){throw new Error("not implemented")},X={uint16:M()?R:W,uint8:C};(Q=new X.uint16(1))[0]=4660;var Z=52===new X.uint8(Q.buffer)[0],$=F,nn=!0===Z?1:0,tn=new G(1),rn=new $(tn.buffer);var on=function(n){return tn[0]=n,rn[nn]},en=F,un=!0===Z?1:0,fn=new G(1),an=new en(fn.buffer);var cn=function(n,t){return fn[0]=n,an[un]=t>>>0,fn[0]},yn=cn,ln=Number.NEGATIVE_INFINITY;var pn=on,vn=yn,An=n,Un=ln,bn=function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)},dn=function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))},mn=.6931471803691238,wn=1.9082149292705877e-10,sn=1048575;var hn=n,Nn=function(n){var t,r,o,e,i,u,f,a,c,y,l;return 0===n?Un:An(n)||n<0?NaN:(e=0,(r=pn(n))<1048576&&(e-=54,r=pn(n*=0x40000000000000)),r>=2146435072?n+n:(e+=(r>>20)-1023|0,e+=(f=(r&=sn)+614244&1048576|0)>>20|0,u=(n=vn(n,r|1072693248^f))-1,(sn&2+r)<3?0===u?0===e?0:e*mn+e*wn:(i=u*u*(.5-.3333333333333333*u),0===e?u-i:e*mn-(i-e*wn-u)):(f=r-398458|0,a=440401-r|0,o=(y=(l=(c=u/(2+u))*c)*l)*bn(y),i=l*dn(y)+o,(f|=a)>0?(t=.5*u*u,0===e?u-(t-c*(t+i)):e*mn-(t-(c*(t+i)+e*wn)-u)):0===e?u-c*(u-i):e*mn-(c*(u-i)-e*wn-u))))},Fn=9.869604401089358,Sn=function(n){return 0===n?1:1+n*(3.297713409852251+n*(4.256971560081218+n*(2.7114985119655346+n*(.8796913117545303+n*(.13384763957830903+n*(.007315890452380947+46512858607399003e-21*n))))))},gn=function(n){return 0===n?1:1+n*(3.547713409852251+n*(5.03278880143317+n*(3.6380053334513707+n*(1.4117259775183106+n*(.2829748606025681+n*(.02540437639325444+.0006909904889125533*n))))))};return function(n){var t,r,o,e;return hn(n)||n<0?NaN:1===n?0:0===n?Fn/6:(t=0,n>2&&(n=1/n,t|=2),n>1.5?(r=1/n-1,t|=2):n<.5?(r=-n,t|=1):r=n-1,o=-r*Sn(r)/gn(r),1&t&&(o=Fn/6-Nn(n)*Nn(1-n)-o),2&t&&(o=-.5*(e=Nn(n))*e-o),o)}}));
//# sourceMappingURL=bundle.js.map
