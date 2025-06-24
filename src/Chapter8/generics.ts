let names = ['John', 'Jane']; // not a generic type
let names2: string[] = ['John', 'Jane']; // not a generic type
let names3: Array<string> = ['John', 'Jane']; // this is a generic type
// generics are about combinations of types and building/describing flexible things

// custome generic
type DataStore<> = {
    [key: string]: string | number;
};

let store2: DataStore = {};
store2.name = "Max"
// store2.isInstructor = true;

// placeholder type for DataStore1 is T
type DataStore1<T> = {
    [key: string]: T;
};

// upon instantiation, we can choose a datatype
let store1: DataStore1<string | boolean> = {};
store1.name = "Max"
store1.isInstructor = true;

let nameStore: DataStore1<string> = {};

// this is a way to initialize and decide how to use later

// function merge(a, b) { // we don't know in advance what kind of values we will get here
//     return [a, b];
// }

// we dont want to use any like this
function merge1(a: any, b: any) { // we don't know in advance what kind of values we will get here
    return [a, b];
} // no autocompletion while using any types

// const ids = merge(1, 2)

// generic function
function merge2<T>(a: T, b: T) {
    return [a, b];
}

const ids2 = merge2(1, 2)

// multiple generic examples
// const ids3 = merge2(1, 'Max') => wont work and needs another placeohlder
function merge3<T, U>(a: T, b: U) {
    return [a, b];
}
const ids4 = merge3(1, 'Max');

// generics & constraints (psuedocode)
// function mergeObj(a, b) {
//     return {..a, ..b}
// }

function mergeObj<T extends object>(a: T, b: T) {
    return {...a, ...b};
}

const mergedObj = mergeObj({username: 'Max'}, {age: 35})
console.log(mergedObj)

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

function mergeObj1<T extends object, U extends object>(a: T, b: T) {
    return {...a, ...b};
}

const mergedObj1 = mergeObj1({username: 'Max'}, {age: 35})

    // now the type of mergedObj1 is an intersection type of the two objects:
    // const mergedObj1: {
    //     username: string
    //     age?: undefined
    // } | {
    //     age: number
    //     username?: undefined
    // }

// generics and classes
// class User3 {
//     constructor(public id: string | number | object) {}
// }

interface Role3<T> {
    // define interface
}

class User3<T> {
    constructor(public id: T) {}
}

const user5 = new User3<string | number | object>('i1');
console.log()