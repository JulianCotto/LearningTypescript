// traditional enum
// enum Roles {
//     Admin,
//     Editor,
//     Guest
// }

// alternative enum using UNION type
let userRole : 'admin' | 'editor' | 'Guest' = 'admin'; // the first value is a type and also the allowed value
// ...
userRole = 'editor';

// traditional array type
// let possibleResults = [number, number];
// possibleResults = [-1, 1]

// array literal union type
let possibleResults = [1 | -1, 1, -1];
possibleResults = [1, -1];

// copy and paste parameters
function access(role: 'admin' | 'editor' | 'guest')

// custom type
type Roles = 'admin' | 'editor' | 'guest' | 'reader';
function access1(role: Roles) {}

// custom object type
type User = {
    name: string;
    age: number;
    role: Roles;
    permissions: string[];
}