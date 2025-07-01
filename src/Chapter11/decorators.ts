// class decorator
// ECMAScript decorators require two parameters (target, context)
function logger<T extends new (...args: any[]) => any>(
    target: T,
    ctx: ClassDecoratorContext
) {
    console.log('logger called');
    console.log(target);
    console.log(ctx);

    return class extends target {
        constructor(...args: any[]) {
            super(...args);
            console.log('Class Constructor');
            console.log(this);
        }
    };
}


// method decorator
// solves problems with this keyword, variable assignments and variable access
function autobind(
    target: (...args: any[]) => any,
    ctx: ClassMemberDecoratorContext
) {
    ctx.addInitializer(function (this: any) { // tells typescript which 'this' to refer to
        this[ctx.name] = this[ctx.name].bind(this)
    });

    return function(this: any) {
        console.log("Executing original function")
        target.apply(this);
    };
}

function replacer<T>(initValue: T) {
    // field decorator (target is always undefined in ECMAScript)
    return function replacerDecorator(target: undefined, ctx: ClassFieldDecoratorContext) {
        console.log('Field logger called');
        console.log(target);
        console.log(ctx);

        return(initialValue: any) => {
            console.log(initialValue);
            return initValue;
        }
    }
}




@logger
class Person {
    @replacer('Julian')
    name = 'Max'

    @autobind
    greet() {
        console.log(`Hello, I am ${this.name}`);
    }
}

const Julian = new Person();
const greet = Julian.greet;
// uses autobind to execute the code on the correct 'this' instance
greet();

