"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var v=n(function(z,s){
function q(r){return r===0?1:1+r*(3.297713409852251+r*(4.256971560081218+r*(2.7114985119655346+r*(.8796913117545303+r*(.13384763957830903+r*(.007315890452380947+r*46512858607399003e-21))))))}s.exports=q
});var l=n(function(B,f){
function y(r){return r===0?1:1+r*(3.547713409852251+r*(5.03278880143317+r*(3.6380053334513707+r*(1.4117259775183106+r*(.2829748606025681+r*(.02540437639325444+r*.0006909904889125533))))))}f.exports=y
});var c=n(function(D,p){
var A=require('@stdlib/math-base-assert-is-nan/dist'),a=require('@stdlib/math-base-special-ln/dist'),I=require('@stdlib/constants-float64-pi-squared/dist'),N=v(),P=l(),o=I/6;function g(r){var e,i,t,u;return A(r)||r<0?NaN:r===1?0:r===0?o:(e=0,r>2&&(r=1/r,e|=2),r>1.5?(i=1/r-1,e|=2):r<.5?(i=-r,e|=1):i=r-1,t=-i*N(i)/P(i),e&1&&(t=o-a(r)*a(1-r)-t),e&2&&(u=a(r),t=-(.5*u*u)-t),t)}p.exports=g
});var m=c();module.exports=m;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
