"use strict";
// class Users {
//     name: string;
//     age: number;
//
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }
class Users {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // add properties directly in class definition
        this.hobbies = [];
    }
    greet() {
        console.log(`My Age: ${this.age}`);
    }
}
const max = new Users('Max', 30);
const julian = new Users('Julian', 32);
console.log(max, julian);
