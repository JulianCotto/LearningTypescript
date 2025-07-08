"use strict";
let names = ['John', 'Jane']; // not a generic type
let names2 = ['John', 'Jane']; // not a generic type
let names3 = ['John', 'Jane']; // this is a generic type
let store2 = {};
store2.name = "Max";
// upon instantiation, we can choose a datatype
let store1 = {};
store1.name = "Max";
store1.isInstructor = true;
let nameStore = {};
// this is a way to initialize and decide how to use later
// function merge(a, b) { // we don't know in advance what kind of values we will get here
//     return [a, b];
// }
// we dont want to use any like this
function merge1(a, b) {
    return [a, b];
} // no autocompletion while using any types
// const ids = merge(1, 2)
// generic function
function merge2(a, b) {
    return [a, b];
}
const ids2 = merge2(1, 2);
// multiple generic examples
// const ids3 = merge2(1, 'Max') => wont work and needs another placeohlder
function merge3(a, b) {
    return [a, b];
}
const ids4 = merge3(1, 'Max');
// generics & constraints (psuedocode)
// function mergeObj(a, b) {
//     return {..a, ..b}
// }
function mergeObj(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const mergedObj = mergeObj({ username: 'Max' }, { age: 35 });
console.log(mergedObj);
// constraints and multiple generics
// the type for mergedObj is:
// function mergeObj<{
// username: string;
// age?: undefined;
// } | {
//     age: number;
//     username?: undefined;
// }>(
//     a: {username: string, age?: undefined} | {age: number, username?: undefined},
//     b: {username: string, age?: undefined} | {age: number, username?: undefined},
// ): {username: string, age?: undefined} | {age: number, username?: undefined}
// this is because a single type placeholder was used, but multiple type parameters were passed
// typescript infers that there is a shared object with both username and age
function mergeObj1(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const mergedObj1 = mergeObj1({ username: 'Max' }, { age: 35 });
class User3 {
    constructor(id) {
        this.id = id;
    }
}
const user5 = new User3('i1');
console.log();
