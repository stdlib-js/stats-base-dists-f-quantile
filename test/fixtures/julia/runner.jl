#!/usr/bin/env julia
#
# @license Apache-2.0
#
# Copyright (c) 2018 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import Distributions: quantile, FDist
import JSON

"""
	gen( p, d1, d2, name )

Generate fixture data and write to file.

# Arguments

* `p`: input value
* `d1`: numerator degrees of freedom
* `d2`: denominator degrees of freedom
* `name::AbstractString`: output filename

# Examples

``` julia
julia> p = rand( 1000 );
julia> d1 = rand( 1000 ) .* 10.0;
julia> d2 = rand( 1000 ) .* 10.0;
julia> gen( p, d1, d2, "data.json" );
```
"""
function gen( p, d1, d2, name )
	z = Array{Float64}( undef, length(p) );
	for i in eachindex(p)
		z[ i ] = quantile( FDist( d1[i], d2[i] ), p[i] );
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("p", p),
		("d1", d1),
		("d2", d2),
		("expected", z)
	]);

	# Based on the script directory, create an output filepath:
	filepath = joinpath( dir, name );

	# Write the data to the output filepath as JSON:
	outfile = open( filepath, "w" );
	write( outfile, JSON.json(data) );
	write( outfile, "\n" );
	close( outfile );
end

# Get the filename:
file = @__FILE__;

# Extract the directory in which this file resides:
dir = dirname( file );

# Large d1 parameter:
p = rand( 1000 );
d1 = ( rand( 1000 ) .* 10.0 ) .+ 10.0;
d2 = rand( 1000 ) .* 10.0;
gen( p, d1, d2, "large_d1.json" );

# Large d2 parameter:
p = rand( 1000 );
d1 = rand( 1000 ) .* 10.0;
d2 = ( rand( 1000 ) .* 10.0 ) .+ 10.0;
gen( p, d1, d2, "large_d2.json" );

# Both large:
p = rand( 1000 );
d2 = ( rand( 1000 ) .* 20.0 ) .+ 10.0;
d2 = ( rand( 1000 ) .* 20.0 ) .+ 10.0;
gen( p, d1, d2, "both_large.json" );
