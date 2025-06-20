// declare file type and file source
type FileSource = {path: string};
const fileSource: FileSource = {path: '/path/to/file'};

// declare db connection string and connect
type DBSource = {connectionUrl: string};
const dbSource: DBSource = {connectionUrl: 'mongodb://localhost'};

// one of the two type we created are acceptable for source
type Source = FileSource | DBSource;

function loadData(source: Source) {
    // can get creative here to determine if file source or data source
    if('path' in Source) {
        // source.path; => use to open the file
        return;
    }
    // source.connectionUrl; => to reach out to the DB
}

// Discriminated Unions: Using Values to Discriminate
type FileSource1 = {type: 'file'; path: string}; // set type property to type string = 'file'
const fileSource1: FileSource = {type: 'file', path: '/path/to/file'};

type DBSource1 = {type: 'db', connectionUrl: string};
const dbSource1: DBSource = {type: 'db', connectionUrl: 'mongodb://localhost'};

type Source1 = FileSource1 | DBSource1;
function loadData(source: Source) {
    // can get creative here to determine if file source or data source
    if(Source.type === 'file') {
        // source.path; => use to open the file
        return;
    }

    // Source.connectionUrl; => to reach out to the DB
}

// instanceOf for discrimination of classes
class User {
    constructor(public name: string) {};

    join() {
        // ...
    }
}

class Admin {
    constructor(permissions: string[]) {};

    scan() {
        // ...
    }
}

const user = new User('Max');
const admin = new Admin(['ban', 'restore']);

type Entity = User | Admin;

function init(entity: Entity) {
    if(entity instanceof User) {
        entity.join(); // if it's the user class, then join
        return;
    }
    entity.scan(); // does not need to be in else because we return above
}

// outsource type checking to its own function
// without declared boolean return, the response is a type predicate "source is FileSource"
// boolean with extra information lets TypeScript know everything that passes through the function is a FileSource
function isFile(source: Source) {
    return source.type === 'file';
}

