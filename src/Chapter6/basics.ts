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
    // add properties directly in class definition
    readonly hobbies: string[] = [];

    constructor(public name: string, private readonly age: number) {}

    greet() {
        console.log(`My Age: ${this.age}`);
    }
}

const max = new Users('Max', 30);
const julian = new Users('Julian', 32);

console.log(max, julian);