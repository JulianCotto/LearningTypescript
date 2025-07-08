"use strict";
// both declarations are acceptable implementations
let user11;
user11 = {
    email: 'test@example.com',
    password: 'abc123',
    role: 'admin',
    login() {
        console.log('User logged in');
    },
    logout() {
        console.log('User logged out');
    }
};
// force the class to have a certain shape
function authenticate(user) { }
//
