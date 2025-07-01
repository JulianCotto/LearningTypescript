function Logger(logString: string) {
    return function(constructor: Function) {
        console.log("Logger Factory")
        console.log(logString)
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string) {
    console.log("Template Factory")
    return function<T extends {new(...args: any[]): {name: string}} >(
        originalConstructor: T
    ) {
        // runs when the class is instantiated, not when the class is defined
        return class extends originalConstructor {
          constructor(..._: any[]) { // underscore means we know we don't use the parameter so don't fuss
              super();
              console.log("Rendering Template")
              const hookEl = document.getElementById(hookId);
              if (hookEl) {
                  hookEl.innerHTML = template;
                  hookEl.querySelector('h1')!.textContent = this.name;
              }
          }
        };
    };
}

@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'Julian';

    constructor() {
        console.log("Creating Person Object")
    }
}


////////////////
// decorators //
////////////////

// property decorator
function Log(target: any, propertyName: string | Symbol) {
    console.log('Property Decorator');
    console.log(target);
    console.log(propertyName);
}

// accessor decorator
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log("Accessor Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

// method decorator
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log("Method Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

// parameter decorator
function Log4(target: any, name: string | Symbol, position: number) {
    console.log("Parameter Decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}


const Julian = new Person();
console.log(Julian);

class Product {
    // property log
    @Log
    title: string;
    private _price: number;

    // setter/accessor log
    @Log2
    set Price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive!');
        }
        this._price = val;
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    // method log
    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}

const p1 = new Product('Book', 10);
const p2 = new Product('Book', 29);


function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value; // access original method
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            return originalMethod.bind(this);
        }
    };
    return adjDescriptor;
}

class Printer {
    message = 'This Works!';

    @AutoBind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();

const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);

interface ValidatorConfig {
    [property: string]: {
        [validateProp: string]: string[] // [required, positive]
    }
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['required']
    };
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['positive']
    }
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch(validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;


    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);

    if (!validate(createdCourse)) {
        alert('Invalid Input - Please try again');
        return;
    }
    console.log(createdCourse);
});