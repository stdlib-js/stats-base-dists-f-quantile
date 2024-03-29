/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// TypeScript Version: 4.1

/**
* Evaluates the quantile function for an F distribution.
*
* ## Notes
*
* -   If `p < 0` or `p > 1`, the function returns `NaN`.
*
* @param p - input value
* @returns evaluated quantile function
*/
type Unary = ( p: number ) => number;

/**
* Interface for the quantile function of an F distribution.
*/
interface Quantile {
	/**
	* Evaluates the quantile function for an F distribution with numerator degrees of freedom `d1` and denominator degrees of freedom `d2` at a probability `p`.
	*
	* ## Notes
	*
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	* -   If `d1 <= 0` or `d2 <= 0`, the function returns `NaN`.
	*
	* @param p - input value
	* @param d1 - numerator degrees of freedom
	* @param d2 - denominator degrees of freedom
	* @returns evaluated quantile function
	*
	* @example
	* var y = quantile( 0.8, 1.0, 1.0 );
	* // returns ~9.472
	*
	* @example
	* var y = quantile( 0.5, 4.0, 2.0 );
	* // returns ~1.207
	*
	* @example
	* var y = quantile( 1.1, 1.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( -0.2, 1.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( NaN, 1.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.5, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.5, 1.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.5, -1.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.5, 1.0, -1.0 );
	* // returns NaN
	*/
	( p: number, d1: number, d2: number ): number;

	/**
	* Returns a function for evaluating the quantile function for an F distribution with numerator degrees of freedom `d1` and denominator degrees of freedom `d2`.
	*
	* @param d1 - numerator degrees of freedom
	* @param d2 - denominator degrees of freedom
	* @returns quantile function
	*
	* @example
	* var myquantile = quantile.factory( 10.0, 2.0 );
	* var y = myquantile( 0.4 );
	* // returns ~0.994
	*
	* y = myquantile( 0.8 );
	* // returns ~4.382
	*/
	factory( d1: number, d2: number ): Unary;
}

/**
* F distribution quantile function.
*
* @param p - input value
* @param d1 - numerator degrees of freedom
* @param d2 - denominator degrees of freedom
* @returns evaluated quantile function
*
* @example
* var y = quantile( 0.8, 1.0, 1.0 );
* // returns ~9.472
*
* y = quantile( 0.5, 4.0, 2.0 );
* // returns ~1.207
*
* var myquantile = quantile.factory( 10.0, 2.0 );
*
* y = myquantile( 0.2 );
* // returns ~0.527
*
* y = myquantile( 0.8 );
* // returns ~4.382
*/
declare var quantile: Quantile;


// EXPORTS //

export = quantile;
