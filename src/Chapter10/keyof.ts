type User4 = { name: string; age: number; };
type UserKeys = keyof User4;

let validKey: UserKeys;
validKey = 'name';
validKey = 'age';

function getProp<T extends object, U extends keyof T>(obj: T, key: U){
    const val = obj[key]
    if (val === undefined || val === null) {
        throw new Error('Accessing undefined or null value.')
    }

    return val;
}

const user6 = {
    name: 'Max',
    age: 30
};

const data = {id: 1, isStored: false, values: [1, -5, 10]}
const val1 = getProp(user6, 'age');