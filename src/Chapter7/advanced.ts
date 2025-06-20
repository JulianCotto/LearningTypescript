// define object structures that are flexible and allow users to add any property as long as they meet the rules
type dataStorage = {
   [prop: string]: number | boolean;
}; // we want the object to be flexible
// as many properties as needed, as long as they are only numbers or booleans

let store: dataStorage = {};

store.id = 5;
store.isOpen = false;
// store.name = "Julian" // will not work because it's not a number or a boolean

// inferred typeof string array
let roles = ['admin', 'guest', 'editor']
roles.push('user');

// tells TypeScript to be as narrow as possible with type inference
let roles2 = ['admin', 'guest', 'editor'] as const; // now this is a readonly array with the statically defined values
const firstRole = roles2[0];

// using records as an alternative way to store types
let someObj: Record<string, number | boolean>;

// satisfies keyword (a way of writing type safe code or narrowing type as much as possible)
const dataEntries: Record<string, number> = {
   entry1: 0.51,
   entry2: -1.23
} // original implementation
dataEntries.entry3 = 1;
console.log(dataEntries);

// with satisfies
const dataEntries1 = {
   entry1: 0.51,
   entry2: -1.23
} satisfies Record<string, number> // checks whether the assigned data type matches.
// Best used when considering other devs
// and then infers a more specific type based on the whole type
dataEntries1.entry3 = 1;
console.log(dataEntries1);


