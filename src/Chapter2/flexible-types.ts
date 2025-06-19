let age: any = 36;

age = '37';
age = false;
age = {};
age = [];

// better alternative
let age1: string | number = 36;

age1 = '37';
// now producing errors
// age1 = false;
// age1 = {};
// age1 = [];