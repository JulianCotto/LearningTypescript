// converting one object type to another object type
type Operations = {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
}

type Results<T> = {
    [key in keyof T]?: number;
}

let mathOperations: Operations = {
    add(a: number, b: number) { return a + b; },
    subtract(a: number, b: number) { return a - b; }
}

let mathResults: Results<Operations> = {
    add: mathOperations.add(1, 2),
    subtract: mathOperations.subtract(5, 2)
}

console.log(mathResults);

