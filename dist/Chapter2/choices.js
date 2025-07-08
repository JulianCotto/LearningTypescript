"use strict";
// unclear definition
let userRole = 0; // 0 => Admin
let adminRole = 1;
let guestRole = 2;
// to define a list of allowed values
// use enum instead, only available in TS
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {})); // does not require ';' after
// calling values
let userRole1 = Role.User;
let adminRole1 = Role.Admin;
let guestRole1 = Role.Guest;
// calling enums
let userRole2 = 1;
let adminRole2 = 2;
let guestRole2 = 3;
// statically typed and changed later
let userRole3 = Role.Admin;
//... some operations
userRole3 = Role.Guest;
// the same code in JS is complicated
// an object is built with different
// identifiers that are also assigned a number
// override defaults and infer the rest
var Role1;
(function (Role1) {
    Role1[Role1["Admin"] = 1] = "Admin";
    Role1[Role1["User"] = 2] = "User";
    Role1[Role1["Guest"] = 3] = "Guest";
})(Role1 || (Role1 = {}));
// will not work now
// let userRole4: Role1 = 0;
// enum is useful when there is a set number of choices
// an alternative that is more popular
// literal types
let newUserRole = 'admin';
newUserRole = 'admin';
// define literal tuple combined with Union type
let possibleResults2;
// won't work now
// possibleResults2 = [5, 1]
possibleResults2 = [1, -1];
let userRole5 = 'admin';
userRole5 = 'guest';
function access(role2) {
}
