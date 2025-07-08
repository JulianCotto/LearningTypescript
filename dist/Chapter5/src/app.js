"use strict";
// const userName = 'Max';
// userName = 'Maximilian';
// let age = 30;
//
// age = 29;
// function adds (a: number, b: number) {
//     let result;
//     result = a + b;
//     return a result;
// }
// if (age > 20) {
//     var isOld = true;
// }
// console.log(isOld);
// console.log(result);
// const add = (a: number, b:number) => {return a + b;}
// const addV2 = (a: number, b:number) => a + b; // only available when there is only a single expression
//
// const printOutput = (output: string | number) => {
//     console.log(output);
// }
// const printOutputV2 = (output: string | number) => console.log(output);
// const printOutputV3: (a: number | string) => void = output => console.log(output);
//
// // printOutput(add(2, 5));
// printOutputV2(addV2(2, 5));
// printOutputV3(addV2(2, 5));
// default values
// const addV3 = (a: number, b: number = 1) => a + b;
// printOutputV3(addV3(5));
//
// // arrays & objects
// const hobbies = ['Sports', 'Cooking'];
// // console.log(hobbies[0]);
// const activeHobbies = ['Hiking']
// spread operator
// activeHobbies.push(...hobbies); // spread operator allows JS to pull all elements of the array as a list of values
// const moreHobbies = ['Gaming', 'Reading', ...activeHobbies];
//
// // spread operator on objects
// const person = {
//     firstName: 'Max',
//     age: 30
// };
//
// const copiedPerson = person; // makes a pointer that points to the object in memory
// const actuallyCopiedPerson = {...person}; // make an actual copy of the object
// rest operators
// in the place where you expect the three values, use the spread operator to merge all incoming parameters
// const add = (...numbers: number[]) => {
//     return numbers.reduce((curResult, curvalue) => {
//         return curResult + curvalue;
//     }, 0);
// };
//
// const addV4 = (...numbers: [number, number, number]) => {
//     return numbers.reduce((curResult, curvalue) => {
//         return curResult + curvalue;
//     }, 0);
// };
//
// const addNumbers = add(5, 19, 2, 3.7)
// console.log(addNumbers);
//
// const addNumbers2 = addV4(5, 19, 2)
// console.log(addNumbers2);
// array and object destructuring
// const {firstName, age} = person;
//
// const {firstName: firstName1, age: age1} = person;
// console.log(userName, age, person);
