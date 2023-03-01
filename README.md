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

# spence

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Spence’s function][spence], also known as the dilogarithm.

<section class="intro">

The dilogarithm is defined as

<!-- <equation class="equation" label="eq:dilogarithm" align="center" raw="\operatorname{Li}_{2}(z) = -\int_{0}^{z}{\ln(1-u) \over u}\,du{\text{, }}z\in \mathbb {C}" alt="Dilogarithm."> -->

<div class="equation" align="center" data-raw-text="\operatorname{Li}_{2}(z) = -\int_{0}^{z}{\ln(1-u) \over u}\,du{\text{, }}z\in \mathbb {C}" data-equation="eq:dilogarithm">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@ea8657e10f42753f63de0b5c7dd8b13b4879409a/lib/node_modules/@stdlib/math/base/special/spence/docs/img/equation_dilogarithm.svg" alt="Dilogarithm.">
    <br>
</div>

<!-- </equation> -->

or also alternatively as

<!-- <equation class="equation" label="eq:dilogarithm_alt" align="center" raw="\int _{1}^{v}{\frac {\ln t}{1-t}}dt=\operatorname {Li} _{2}(1-v)." alt="Alternative definition of dilogarithm."> -->

<div class="equation" align="center" data-raw-text="\int _{1}^{v}{\frac {\ln t}{1-t}}dt=\operatorname {Li} _{2}(1-v)." data-equation="eq:dilogarithm_alt">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@ea8657e10f42753f63de0b5c7dd8b13b4879409a/lib/node_modules/@stdlib/math/base/special/spence/docs/img/equation_dilogarithm_alt.svg" alt="Alternative definition of dilogarithm.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-spence
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var spence = require( '@stdlib/math-base-special-spence' );
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

```javascript
var randu = require( '@stdlib/random-base-randu' );
var spence = require( '@stdlib/math-base-special-spence' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = randu() * 100.0;
    console.log( 'spence( %d ) = %d', x, spence( x ) );
}
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

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-spence.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-spence

[test-image]: https://github.com/stdlib-js/math-base-special-spence/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-spence/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-spence/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-spence?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-spence.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-spence/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-spence/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-spence/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-spence/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-spence/blob/main/branches.md

[spence]: https://en.wikipedia.org/wiki/Spence%27s_function

</section>

<!-- /.links -->
