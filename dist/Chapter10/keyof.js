"use strict";
let validKey;
validKey = 'name';
validKey = 'age';
function getProp(obj, key) {
    const val = obj[key];
    if (val === undefined || val === null) {
        throw new Error('Accessing undefined or null value.');
    }
    return val;
}
const user6 = {
    name: 'Max',
    age: 30
};
const data = { id: 1, isStored: false, values: [1, -5, 10] };
const val1 = getProp(user6, 'age');
