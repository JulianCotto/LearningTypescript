"use strict";
// makes parameter optional
function generateError(msg) {
    throw new Error(msg);
}
// knowledge coalescing operator (??)
let input = '';
// must be populated string
const didProvideInput = input || false;
// can be empty string
const didProvideInput1 = input !== null && input !== void 0 ? input : false;
console.log("Input:", didProvideInput, "Input:", didProvideInput1);
