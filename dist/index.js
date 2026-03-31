"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=s(function(O,c){
var N=require('@stdlib/math-base-special-kernel-betaincinv/dist'),a=require('@stdlib/math-base-assert-is-nan/dist');function l(e,r,t){var n;return a(e)||a(r)||a(t)||r<=0||t<=0||e<0||e>1?NaN:(n=N(r/2,t/2,e,1-e),t*n[0]/(r*n[1]))}c.exports=l
});var q=s(function(R,o){
var x=require('@stdlib/utils-constant-function/dist'),y=require('@stdlib/math-base-special-kernel-betaincinv/dist'),u=require('@stdlib/math-base-assert-is-nan/dist');function k(e,r){if(u(e)||u(r)||e<=0||r<=0)return x(NaN);return t;function t(n){var i;return u(n)||n<0||n>1?NaN:(i=y(e/2,r/2,n,1-n),r*i[0]/(e*i[1]))}}o.exports=k
});var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=v(),m=q();B(f,"factory",m);module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
