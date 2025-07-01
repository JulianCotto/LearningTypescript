type StringArray = string[];
// type ElementType<T extends any[]> = T[number];
//
// // cannot use Element type on anything that is not an array
// type Example1 = ElementType<StringArray>;
let text = 1; // not an array
// // type Example2 = ElementType<typeof text>; // creates error because not an array

// even more generic type using conditional type feature
// check whether received type is an array of any
type GetElementType<T> = T extends any[] ? T[number] : never;
type Example3 = GetElementType<StringArray>;
type example4 = GetElementType<typeof text>;

// these are advanced and niche features used mainly in building libraries and frameworks
type FullNamePerson = { // outsourced object check
    firstName: string;
    lastName: string;
}
type FullNameorNothing<T> = T extends FullNamePerson ? string : never // outsourced object output check
// another conditional type example
// this function returns strings but also Error
function getFullName<T extends object>(
    person: T
): FullNameorNothing<T> {
    if ('firstName' in person &&
        'lastName' in person &&
        person.firstName &&
        person.lastName) {
        return `${person.firstName} ${person.lastName}` as FullNameorNothing<T>;
    }

    throw new Error("No First or Last Name detected")
}

// generic and type safe
const name1= getFullName({firstName: 'Max', lastName: 'Mustermann'});
// const name2 = getFullName({});