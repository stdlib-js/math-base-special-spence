<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# spence

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Spence’s function][spence], also known as the dilogarithm.

<section class="intro">

The dilogarithm is defined as

<!-- <equation class="equation" label="eq:dilogarithm" align="center" raw="\operatorname{Li}_{2}(z) = -\int_{0}^{z}{\ln(1-u) \over u}\,du{\text{, }}z\in \mathbb {C}" alt="Dilogarithm."> -->

```math
\mathop{\mathrm{Li}}_{2}(z) = -\int_{0}^{z}{\ln(1-u) \over u}\,du{\text{, }}z\in \mathbb {C}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{Li}_{2}(z) = -\int_{0}^{z}{\ln(1-u) \over u}\,du{\text{, }}z\in \mathbb {C}" data-equation="eq:dilogarithm">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@ea8657e10f42753f63de0b5c7dd8b13b4879409a/lib/node_modules/@stdlib/math/base/special/spence/docs/img/equation_dilogarithm.svg" alt="Dilogarithm.">
    <br>
</div> -->

<!-- </equation> -->

or also alternatively as

<!-- <equation class="equation" label="eq:dilogarithm_alt" align="center" raw="\int _{1}^{v}{\frac {\ln t}{1-t}}dt=\operatorname {Li} _{2}(1-v)." alt="Alternative definition of dilogarithm."> -->

```math
\int _{1}^{v}{\frac {\ln t}{1-t}}dt=\operatorname {Li} _{2}(1-v).
```

<!-- <div class="equation" align="center" data-raw-text="\int _{1}^{v}{\frac {\ln t}{1-t}}dt=\operatorname {Li} _{2}(1-v)." data-equation="eq:dilogarithm_alt">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@ea8657e10f42753f63de0b5c7dd8b13b4879409a/lib/node_modules/@stdlib/math/base/special/spence/docs/img/equation_dilogarithm_alt.svg" alt="Alternative definition of dilogarithm.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
spence = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-spence@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/math-base-special-spence/tags). For example,

```javascript
spence = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-spence@v0.2.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var spence = require( 'path/to/vendor/umd/math-base-special-spence/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-spence@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.spence;
})();
</script>
```

#### spence( x )

Evaluates [Spence’s function][spence], which is alternatively known as the dilogarithm.

```javascript
var v = spence( 3.0 );
// returns ~-1.437

v = spence( 0.0 );
// returns ~1.645

v = spence( NaN );
// returns NaN
```

For negative numbers, the dilogarithm is **not** defined.

```javascript
var v = spence( -4.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-spence@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = randu() * 100.0;
    console.log( 'spence( %d ) = %d', x, spence( x ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-spence.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-spence

[test-image]: https://github.com/stdlib-js/math-base-special-spence/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/math-base-special-spence/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-spence/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-spence?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-spence.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-spence/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-spence/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-spence/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-spence/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-spence/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-spence/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-spence/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-spence/blob/main/branches.md

[spence]: https://en.wikipedia.org/wiki/Spence%27s_function

</section>

<!-- /.links -->
