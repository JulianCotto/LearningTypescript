"use strict";
// type ElementType<T extends any[]> = T[number];
//
// // cannot use Element type on anything that is not an array
// type Example1 = ElementType<StringArray>;
let text = 1; // not an array
// another conditional type example
// this function returns strings but also Error
function getFullName(person) {
    if ('firstName' in person &&
        'lastName' in person &&
        person.firstName &&
        person.lastName) {
        return `${person.firstName} ${person.lastName}`;
    }
    throw new Error("No First or Last Name detected");
}
// generic and type safe
const name1 = getFullName({ firstName: 'Max', lastName: 'Mustermann' });
// const name2 = getFullName({});
