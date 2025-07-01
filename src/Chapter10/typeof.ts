const userName1 = 'Peter';

console.log(typeof userName1);

// this will now store "Peter" as a type that can be matched with typeof
type UserName = typeof userName;

const settings = {
    difficulty: 'easy',
    minLevel: 10,
    didStart: false,
    players: ['John', 'Jane']
};

type Settings = typeof settings;

function loadData1(settings: Settings) {
    // ...
}

loadData1(settings);
