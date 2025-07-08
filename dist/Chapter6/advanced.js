"use strict";
class newUsers {
    constructor() {
        this._firstName = "";
        this._lastName = "";
    }
    set firstName(name) {
        if (name.trim() === '') {
            throw new Error('Invalid Name');
        }
        this._firstName = name;
    }
    ;
    set lastName(name) {
        if (name.trim() === '') {
            throw new Error('Invalid Name');
        }
        this._lastName = name;
    }
    ;
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
    static greet() {
        console.log('Hello!');
    }
}
newUsers.eid = 'USER';
// static properties can be logged before instantiation
console.log(newUsers.eid);
newUsers.greet();
const newJulian = new newUsers();
newJulian.firstName = "Julian";
// newJulian.lastName = ''; // will throw invalid name
newJulian.lastName = "Cotto";
console.log(newJulian.fullName);
class Employee extends newUsers {
    constructor(jobTitle) {
        super(); // if base class takes parameters then pass them here
        this.jobTitle = jobTitle;
    }
    work() {
        console.log(`I am ${this._firstName} and I am working as a ${this.jobTitle}`);
    }
}
const newMax = new Employee('Developer');
newMax.work();
// abstract classes should be extended by other classes
// great for creating base classes
class UIElement {
    constructor(identifier) {
        this.identifier = identifier;
    }
    clone(targetLocation) {
        // logic to duplicate the UI element
    }
    ;
}
class SideDrawerElement extends UIElement {
    constructor(identifier, position = 'left') {
        super(identifier);
        this.identifier = identifier;
        this.position = position;
    }
}
