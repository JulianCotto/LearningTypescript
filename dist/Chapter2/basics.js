"use strict";
let userName; // must have an explicit type assignment
userName = "Max";
// initialized with a value,
// TS will use the type of the value as the assigned variable type
let userAge = 38;
function addExample1(a, b) { return a + b; }
;
function addExample2(a, b = 5) { return a + b; }
;
// correct call
console.log(addExample1(1, 2));
// wrong type
// addExample1('1', 2);
// correct call
console.log(addExample2(1));
// wrong call
// addExample2('1');
