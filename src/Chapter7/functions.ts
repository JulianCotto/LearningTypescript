function getLength(val: any[]) : number; // overload to make ensure the return type on any array is number output
function getLength(val: string) : string; // overload to ensure string input returns string output
function getLength(val: string | any[]) {
    if (typeof val === 'string') {
        const numberOfWords = val.split(" ").length;
        return `${numberOfWords} words`;
    }
    return val.length; // x words
} // use any because we are counting length and don't care about contents

// TypeScript thinks this is a string or a number because of the return type
// this means we cannot use function like .length() in this return value
const numWords = getLength("Does this work?")



const numItems = getLength(["Sports", "Cookies"])

console.log(numWords, numItems);