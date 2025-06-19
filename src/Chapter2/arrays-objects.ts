// inferred type
let hobbies = ['Sports', 'Cooking'];

// string array is expecting a string, not a number
// hobbies.push(10)

// inferred multiple type
let hobbies1 = ['Sports', 10];
hobbies1.push(10)

// statically typed
let users: string[];

// statically typed UNION type
let users1: (string | number)[];
users1 = [1, "Max"];
users1 = [5, 1];
users1 = ["Max", "Anna"];

// alternative array type declaration (generic type)
let users2: Array<string | number>;
users2 = [1, "Max"];
users2 = [5, 1];
users2 = ["Max", "Anna"];

// tuple type
let possibleResults: number[]; // [1, -1]
possibleResults = [1, -1];
possibleResults = [5, 10, 12]; // we want more control over array values

// declaring an array of exactly 2 values of type number
let possibleResults1: [number, number];
possibleResults1 = [1, -1];
// possibleResults1 = [5, 10, 12]; // rejected for array overflow

// inferred object type
let user = {
    name: "Max",
    age: 38
};

// statically typed object with immediate assignment
let user1: {
    name: string;
    age: number | string;
    hobbies: string[]; // extras
    role: {
        description: string;
        id: number;
    }
} = {
    name: "Max",
    age: 38,
    hobbies: ['Sports', 'Cooking'],
    role: {
        description: "Admin",
        id: 5
    }
};

// statically typed and assigned later
let user2: {
    name: string;
    age: number | string;
    hobbies: string[]; // extras
    role: {
        description: string;
        id: number;
    }
};
user2 = user1;

// must not be null type
let val: {} = 'some text'; // does not mean empty object
// means any value that is defined
// let val1: {} = null;
// let val2: {} = undefined;
let val3: {} = false;

const someObj = {}; // this is an empty object in JS

// dont know which keys will be stored
// let data1: {}; // not correct because any data can be assigned besides null or undefined
let data2: Record<string, number | string>; // string keys, with bumber or string values
data2 = {
    entry1: 1,
    entry2: 'someString'
};