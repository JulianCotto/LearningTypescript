
// specify return type of function
function add(a: number, b: number): number {
    return a + b;
}

// incorrect type return
// function add1(a: number, b: number): string {
//     return a + b;
// }

// statically typed but is typically inferred
function log(message: string): void {
    console.log(message);
}
function log1(message: string) {
    console.log(message)
}

log("Julian");
log1("julian")

// defaults to void but can be made type never
function logAndThrow(errorMessage: string): never {
    console.log(errorMessage);
    throw new Error(errorMessage);
}

// log & log1 will execute and not return
// logAndThrow will execute and never return (never stops)

// functions can be stored as a value or const and be
// passed to other functions as types
function performJob(cb: Function) {
    // ...
    cb();
}

// JS arrow function
const logMsg = (msg: string) => {
    console.log(msg);
}

// define parameter as a function that returns void
function performJob1(cb: () => void) {
    // ...
    cb();
}

// define parameter as function that has a string parameter and returns void
function performJob2(cb: (msg: string) => void) {
    cb('job done');
}

performJob2(log);

// objects and methods
type User1 = {
    name: string;
    age: number;
    greet: () => string;
}

// using arrow typing
let user3: User1 = {
    name: "Max",
    age: 38,
    greet: () => 'Hello'
}

// user object with method typed
let user4: User1 = {
    name: "Max",
    age: 38,
    greet() {
        console.log('Hello World!')
        return this.name;
    }
}



