// makes parameter optional
function generateError(msg?: string) {
    throw new Error(msg);
}

// generateError();
// generateError('Error');

// role is an optional property with the question mark
type User2 = {
    name: string;
    age: number;
    role?: 'admin' | 'guest';
};

// knowledge coalescing operator (??)
let input = '';
// must be populated string
const didProvideInput = input || false;
// can be empty string
const didProvideInput1 = input ?? false;
console.log("Input:", didProvideInput, "Input:", didProvideInput1);
