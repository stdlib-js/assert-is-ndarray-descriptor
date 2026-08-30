// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object-like@v0.2.3-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.3-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.3-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-property@v0.2.3-esm/index.mjs";function r(r){return s(r)&&s(r.data)&&s(r.shape)&&s(r.strides)&&t(r.offset)&&e(r.order)&&i(r,"dtype")}export{r as default};
//# sourceMappingURL=index.mjs.map
