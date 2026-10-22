"use strict";var u=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var t=u(function(m,s){
var i=require('@stdlib/assert-is-object-like/dist'),o=require('@stdlib/assert-is-number/dist').isPrimitive,n=require('@stdlib/assert-is-string/dist').isPrimitive,p=require('@stdlib/assert-has-property/dist');function c(r){return i(r)&&i(r.data)&&i(r.shape)&&i(r.strides)&&o(r.offset)&&n(r.order)&&p(r,"dtype")}s.exports=c
});var d=t();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
