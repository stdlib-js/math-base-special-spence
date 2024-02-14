// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return t!=t}function r(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var n=r();var o=Object.prototype.toString;var e=Object.prototype.hasOwnProperty;function a(t,r){return null!=t&&e.call(t,r)}var i="function"==typeof Symbol?Symbol:void 0,u="function"==typeof i?i.toStringTag:"";var f=n&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e;if(null==t)return o.call(t);n=t[u],r=a(t,u);try{t[u]=void 0}catch(r){return o.call(t)}return e=o.call(t),r?t[u]=n:delete t[u],e}:function(t){return o.call(t)},c="function"==typeof Uint32Array;var l="function"==typeof Uint32Array?Uint32Array:null;var y,v="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var t,r,n;if("function"!=typeof l)return!1;try{r=new l(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(c&&n instanceof Uint32Array||"[object Uint32Array]"===f(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?v:function(){throw new Error("not implemented")};var p=y,b=r();var A=Object.prototype.toString;var m="function"==typeof Symbol?Symbol:void 0,S="function"==typeof m?m.toStringTag:"";var d=b&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o;if(null==t)return A.call(t);n=t[S],r=a(t,S);try{t[S]=void 0}catch(r){return A.call(t)}return o=A.call(t),r?t[S]=n:delete t[S],o}:function(t){return A.call(t)},g="function"==typeof Float64Array;var w="function"==typeof Float64Array?Float64Array:null;var U,h="function"==typeof Float64Array?Float64Array:void 0;U=function(){var t,r,n;if("function"!=typeof w)return!1;try{r=new w([1,3.14,-3.14,NaN]),n=r,t=(g&&n instanceof Float64Array||"[object Float64Array]"===d(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?h:function(){throw new Error("not implemented")};var F=U,s=r();var N=Object.prototype.toString;var T="function"==typeof Symbol?Symbol:void 0,j="function"==typeof T?T.toStringTag:"";var E=s&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o;if(null==t)return N.call(t);n=t[j],r=a(t,j);try{t[j]=void 0}catch(r){return N.call(t)}return o=N.call(t),r?t[j]=n:delete t[j],o}:function(t){return N.call(t)},O="function"==typeof Uint8Array;var I="function"==typeof Uint8Array?Uint8Array:null;var x,G="function"==typeof Uint8Array?Uint8Array:void 0;x=function(){var t,r,n;if("function"!=typeof I)return!1;try{r=new I(r=[1,3.14,-3.14,256,257]),n=r,t=(O&&n instanceof Uint8Array||"[object Uint8Array]"===E(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?G:function(){throw new Error("not implemented")};var P=x,V=r();var Y=Object.prototype.toString;var _="function"==typeof Symbol?Symbol:void 0,k="function"==typeof _?_.toStringTag:"";var q=V&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o;if(null==t)return Y.call(t);n=t[k],r=a(t,k);try{t[k]=void 0}catch(r){return Y.call(t)}return o=Y.call(t),r?t[k]=n:delete t[k],o}:function(t){return Y.call(t)},z="function"==typeof Uint16Array;var B="function"==typeof Uint16Array?Uint16Array:null;var C,D="function"==typeof Uint16Array?Uint16Array:void 0;C=function(){var t,r,n;if("function"!=typeof B)return!1;try{r=new B(r=[1,3.14,-3.14,65536,65537]),n=r,t=(z&&n instanceof Uint16Array||"[object Uint16Array]"===q(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?D:function(){throw new Error("not implemented")};var H,J={uint16:C,uint8:P};(H=new J.uint16(1))[0]=4660;var K=52===new J.uint8(H.buffer)[0],L=!0===K?1:0,M=new F(1),Q=new p(M.buffer);function R(t){return M[0]=t,Q[L]}var W=r();var X=Object.prototype.toString;var Z="function"==typeof Symbol?Symbol:void 0,$="function"==typeof Z?Z.toStringTag:"";var tt=W&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o;if(null==t)return X.call(t);n=t[$],r=a(t,$);try{t[$]=void 0}catch(r){return X.call(t)}return o=X.call(t),r?t[$]=n:delete t[$],o}:function(t){return X.call(t)},rt="function"==typeof Float64Array;var nt="function"==typeof Float64Array?Float64Array:null;var ot,et="function"==typeof Float64Array?Float64Array:void 0;ot=function(){var t,r,n;if("function"!=typeof nt)return!1;try{r=new nt([1,3.14,-3.14,NaN]),n=r,t=(rt&&n instanceof Float64Array||"[object Float64Array]"===tt(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?et:function(){throw new Error("not implemented")};var at=!0===K?1:0,it=new ot(1),ut=new p(it.buffer);var ft=Number.NEGATIVE_INFINITY;var ct=.6931471803691238,lt=1.9082149292705877e-10;function yt(r){var n,o,e,a,i,u,f,c,l,y,v,p;return 0===r?ft:t(r)||r<0?NaN:(i=0,(o=R(r))<1048576&&(i-=54,o=R(r*=0x40000000000000)),o>=2146435072?r+r:(i+=(o>>20)-1023|0,i+=(c=(o&=1048575)+614244&1048576|0)>>20|0,f=(r=function(t,r){return it[0]=t,ut[at]=r>>>0,it[0]}(r,o|1072693248^c))-1,(1048575&2+o)<3?0===f?0===i?0:i*ct+i*lt:(u=f*f*(.5-.3333333333333333*f),0===i?f-u:i*ct-(u-i*lt-f)):(c=o-398458|0,l=440401-o|0,a=(v=(p=(y=f/(2+f))*y)*p)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(v),e=p*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(v),u=e+a,(c|=l)>0?(n=.5*f*f,0===i?f-(n-y*(n+u)):i*ct-(n-(y*(n+u)+i*lt)-f)):0===i?f-y*(f-u):i*ct-(y*(f-u)-i*lt-f))))}function vt(r){var n,o,e,a;return t(r)||r<0?NaN:1===r?0:0===r?1.6449340668482264:(n=0,r>2&&(r=1/r,n|=2),r>1.5?(o=1/r-1,n|=2):r<.5?(o=-r,n|=1):o=r-1,e=-o*function(t){return 0===t?1:1+t*(3.297713409852251+t*(4.256971560081218+t*(2.7114985119655346+t*(.8796913117545303+t*(.13384763957830903+t*(.007315890452380947+46512858607399003e-21*t))))))}(o)/function(t){return 0===t?1:1+t*(3.547713409852251+t*(5.03278880143317+t*(3.6380053334513707+t*(1.4117259775183106+t*(.2829748606025681+t*(.02540437639325444+.0006909904889125533*t))))))}(o),1&n&&(e=1.6449340668482264-yt(r)*yt(1-r)-e),2&n&&(e=-.5*(a=yt(r))*a-e),e)}export{vt as default};
//# sourceMappingURL=mod.js.map