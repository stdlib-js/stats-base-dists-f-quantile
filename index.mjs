// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-kernel-betaincinv@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";function r(t,s,r){var i;return n(t)||n(s)||n(r)||s<=0||r<=0||t<0||t>1?NaN:r*(i=e(s/2,r/2,t,1-t))[0]/(s*i[1])}function i(t,r){return n(t)||n(r)||t<=0||r<=0?s(NaN):function(s){var i;if(n(s)||s<0||s>1)return NaN;return i=e(t/2,r/2,s,1-s),r*i[0]/(t*i[1])}}t(r,"factory",i);export{r as default,i as factory};
//# sourceMappingURL=index.mjs.map
