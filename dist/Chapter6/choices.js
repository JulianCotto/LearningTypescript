"use strict";
// traditional enum
// enum Roles {
//     Admin,
//     Editor,
//     Guest
// }
// alternative enum using UNION type
let userRole = 'admin'; // the first value is a type and also the allowed value
// ...
userRole = 'editor';
// traditional array type
// let possibleResults = [number, number];
// possibleResults = [-1, 1]
// array literal union type
let possibleResults = [1 | -1, 1, -1];
possibleResults = [1, -1];
function access1(role) { }
