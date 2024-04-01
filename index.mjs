// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi-squared@v0.2.1-esm/index.mjs";function n(n){var r,i,a,d;return t(n)||n<0?NaN:1===n?0:0===n?e/6:(r=0,n>2&&(n=1/n,r|=2),n>1.5?(i=1/n-1,r|=2):n<.5?(i=-n,r|=1):i=n-1,a=-i*function(t){return 0===t?1:1+t*(3.297713409852251+t*(4.256971560081218+t*(2.7114985119655346+t*(.8796913117545303+t*(.13384763957830903+t*(.007315890452380947+46512858607399003e-21*t))))))}(i)/function(t){return 0===t?1:1+t*(3.547713409852251+t*(5.03278880143317+t*(3.6380053334513707+t*(1.4117259775183106+t*(.2829748606025681+t*(.02540437639325444+.0006909904889125533*t))))))}(i),1&r&&(a=e/6-s(n)*s(1-n)-a),2&r&&(a=-.5*(d=s(n))*d-a),a)}export{n as default};
//# sourceMappingURL=index.mjs.map
