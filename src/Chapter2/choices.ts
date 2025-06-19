// unclear definition
let userRole = 0; // 0 => Admin
let adminRole = 1;
let guestRole = 2;

// to define a list of allowed values
// use enum instead, only available in TS
enum Role {
    Admin,
    User,
    Guest
} // does not require ';' after

// calling values
let userRole1 = Role.User;
let adminRole1 = Role.Admin;
let guestRole1 = Role.Guest;

// calling enums
let userRole2 = 1;
let adminRole2 = 2;
let guestRole2 = 3;

// statically typed and changed later
let userRole3: Role = Role.Admin;
//... some operations
userRole3 = Role.Guest;

// the same code in JS is complicated
// an object is built with different
// identifiers that are also assigned a number

// override defaults and infer the rest
enum Role1 {
    Admin = 1,
    User,
    Guest
}

// will not work now
// let userRole4: Role1 = 0;

// enum is useful when there is a set number of choices
// an alternative that is more popular
// literal types
let newUserRole: 'admin' | 'editor' | 'guest' = 'admin';
newUserRole = 'admin';

// define literal tuple combined with Union type
let possibleResults2: [1 | -1, 1 | -1];
// won't work now
// possibleResults2 = [5, 1]
possibleResults2 = [1, -1];

// adding new values to role is cumbersome and leads to small bugs

// store a type definition under a custom name
type Role2 = 'admin' | 'editor' | 'guest' | 'reader';
type User = {
    name: string;
    age: number;
    role: Role2;
    permissions: string[];
};

let userRole5: Role2 = 'admin';
userRole5 = 'guest';

function access(role2: Role2){
}