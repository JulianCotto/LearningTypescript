"use strict";
// specify return type of function
function add(a, b) {
    return a + b;
}
// incorrect type return
// function add1(a: number, b: number): string {
//     return a + b;
// }
// statically typed but is typically inferred
function log(message) {
    console.log(message);
}
function log1(message) {
    console.log(message);
}
log("Julian");
log1("julian");
// defaults to void but can be made type never
function logAndThrow(errorMessage) {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
// log & log1 will execute and not return
// logAndThrow will execute and never return (never stops)
// functions can be stored as a value or const and be
// passed to other functions as types
function performJob(cb) {
    // ...
    cb();
}
// JS arrow function
const logMsg = (msg) => {
    console.log(msg);
};
// define parameter as a function that returns void
function performJob1(cb) {
    // ...
    cb();
}
// define parameter as function that has a string parameter and returns void
function performJob2(cb) {
    cb('job done');
}
performJob2(log);
// using arrow typing
let user3 = {
    name: "Max",
    age: 38,
    greet: () => 'Hello'
};
// user object with method typed
let user4 = {
    name: "Max",
    age: 38,
    greet() {
        console.log('Hello World!');
        return this.name;
    }
};
