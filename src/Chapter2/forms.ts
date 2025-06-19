// aims to get HTML element
const inputEL = document.getElementById('user-name');
// will return null if it fails to return an id
// return type could be null in this case, and so an error is thrown
// console.log(inputEl.value);

// type inference can be narrowed down to exclude null
if (!inputEL) {
    throw new Error('Element not found');
}
// console.log(inputEL.value);
// the above can be a redundant and time-consuming
// work-around, exclamation tells TypeScript that this will not return null
const inputEL1 = document.getElementById('user-name')!;
// console.log(inputEL1.value)
// if the ! is used wrong, this will cause a runtime error

// ? operator means you know the value could be null
// console.log(inputEL?.value);

// value errors occur because JS doesn't know what type of element its getting
const inputEL2 = document.getElementById('user-name') as HTMLInputElement | null;
console.log(inputEL2?.value);
console.log(inputEL2?.value);