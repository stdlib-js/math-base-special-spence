/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var abs = require( '@stdlib/math-base-special-abs' );
var PI_SQUARED = require( '@stdlib/constants-float64-pi-squared' );
var EPS = require( '@stdlib/constants-float64-eps' );
var tryRequire = require( '@stdlib/utils-try-require' );


// FIXTURES //

var small = require( './fixtures/python/small.json' );
var medium = require( './fixtures/python/medium.json' );
var large = require( './fixtures/python/large.json' );


// VARIABLES //

var spence = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( spence instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof spence, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function accurately computes the dilogarithm for small positive numbers', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	x = small.x;
	expected = small.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = spence( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = 2.0 * EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function accurately computes the dilogarithm for medium positive numbers', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	x = medium.x;
	expected = medium.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = spence( x[ i ] );
		delta = abs( v - expected[ i ] );

		// NOTE: the tolerance here is larger than for the JavaScript implementation due to compiler optimizations which may be performed resulting in result divergence. For discussion, see https://github.com/stdlib-js/stdlib/pull/2298#discussion_r1624765205
		tol = 8.3 * EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. actual: ' + v + '. expected: ' + expected[ i ] + '. tol: ' + tol + '. Δ: ' + delta + '.' );
	}
	t.end();
});

tape( 'the function accurately computes the dilogarithm for large positive numbers', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	x = large.x;
	expected = large.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = spence( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = 2.0 * EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. actual: ' + v + '. expected: ' + expected[ i ] + '. tol: ' + tol + '. Δ: ' + delta + '.' );
	}
	t.end();
});

tape( 'the function returns `0.0` if provided `1.0` for `x`', opts, function test( t ) {
	var val = spence( 1.0 );
	t.strictEqual( val, 0.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `PI^2/6` if provided `0.0` for `x`', opts, function test( t ) {
	var val = spence( 0.0 );
	t.strictEqual( val, PI_SQUARED / 6.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` for negative numbers', opts, function test( t ) {
	var val;
	var x;

	for ( x = -100; x < 0; x++ ) {
		val = spence( x );
		t.strictEqual( isnan( val ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', opts, function test( t ) {
	var val = spence( NaN );
	t.strictEqual( isnan( val ), true, 'returns expected value' );
	t.end();
});
