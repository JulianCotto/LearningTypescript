class newUsers {
    protected _firstName: string = "";
    private _lastName: string = "";

    set firstName(name: string) {
        if (name.trim() === '') {
            throw new Error('Invalid Name');
        }
        this._firstName = name;
    };
    set lastName(name: string) {
        if (name.trim() === '') {
            throw new Error('Invalid Name');
        }
        this._lastName = name;
    };

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    static eid = 'USER'
    static greet() {
        console.log('Hello!');
    }
}

// static properties can be logged before instantiation
console.log(newUsers.eid)
newUsers.greet();
const newJulian = new newUsers();
newJulian.firstName = "Julian";
// newJulian.lastName = ''; // will throw invalid name
newJulian.lastName = "Cotto";
console.log(newJulian.fullName);

class Employee extends newUsers {
    constructor(public jobTitle: string) {
        super(); // if base class takes parameters then pass them here
    }

    work() {
        console.log(`I am ${this._firstName} and I am working as a ${this.jobTitle}`);
    }
}

const newMax = new Employee('Developer');
newMax.work();

// abstract classes should be extended by other classes
// great for creating base classes
abstract class UIElement {
    protected constructor(public identifier: string) {}

    clone (targetLocation: string) {
        // logic to duplicate the UI element
    };
}

class SideDrawerElement extends UIElement {
    constructor(public identifier: string, public position: 'left' | 'right' = 'left') {
        super(identifier);
    }
}