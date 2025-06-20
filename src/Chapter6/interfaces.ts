// describe objects and properties that have to do with authentication
// can add more properties to it
interface Authenticatable {
    // authenticatable items must have a string email and password
    email: string;
    password: string;

    // as well as a login and logout method that returns void
    login(): void;
    logout(): void;
}

// cannot add more properties later if declared as a type
type Authenticatable1 = {
    email: string;
    password: string;
    role: string;

    login(): void;
    logout(): void;

}
// both declarations are acceptable implementations

let user11: Authenticatable;
user11 = {
    email: 'test@example.com',
    password: 'abc123',
    role: 'admin',
    login() {
        console.log('User logged in');
    },
    logout() {
        console.log('User logged out');
    }
};

// adding properties to Authenticatable
// declaration merging
interface Authenticatable {
    role: string;
}

// force the class to have a certain shape
class AuthenticatableUser implements Authenticatable {
    constructor(public userName: string, public email: string, public password: string) {}

    login() {
        console.log('User logged in');
    }
    logout() {
        console.log('User logged out');
    }
}

function authenticate(user: Authenticatable) {}

// this is not declaration merging, this is the creation of a new interface that builds on the interface it extends
interface AuthenticatableAdmin extends Authenticatable {
    role: 'admin' | 'superadmin';
}

//

