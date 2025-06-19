// a will only hold a value of null
let a: null;
a = null;
// a = 'Hi';

// not helpful alone but becomes powerful with unions
let b: null | string;
b = null;
b = 'Hi';

// undefined type
let c: undefined | string;
c = "hi"
c = undefined;
// c = null;