// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-kernel-betaincinv@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";var s=e,i=n;var a=r,d=e,m=n;var o=function(t,e,n){var r;return i(t)||i(e)||i(n)||e<=0||n<=0||t<0||t>1?NaN:n*(r=s(e/2,n/2,t,1-t))[0]/(e*r[1])},l=function(t,e){return m(t)||m(e)||t<=0||e<=0?a(NaN):function(n){var r;if(m(n)||n<0||n>1)return NaN;return r=d(t/2,e/2,n,1-n),e*r[0]/(t*r[1])}};t(o,"factory",l);var c=o;export{c as default,l as factory};
//# sourceMappingURL=index.mjs.map
