"use strict";
const fileSource = { path: '/path/to/file' };
const dbSource = { connectionUrl: 'mongodb://localhost' };
function loadData(source) {
    // can get creative here to determine if file source or data source
    if ('path' in Source) {
        // source.path; => use to open the file
        return;
    }
    // source.connectionUrl; => to reach out to the DB
}
const fileSource1 = { type: 'file', path: '/path/to/file' };
const dbSource1 = { type: 'db', connectionUrl: 'mongodb://localhost' };
function loadData(source) {
    // can get creative here to determine if file source or data source
    if (Source.type === 'file') {
        // source.path; => use to open the file
        return;
    }
    // Source.connectionUrl; => to reach out to the DB
}
// instanceOf for discrimination of classes
class User {
    constructor(name) {
        this.name = name;
    }
    ;
    join() {
        // ...
    }
}
class Admin {
    constructor(permissions) { }
    ;
    scan() {
        // ...
    }
}
const user = new User('Max');
const admin = new Admin(['ban', 'restore']);
function init(entity) {
    if (entity instanceof User) {
        entity.join(); // if it's the user class, then join
        return;
    }
    entity.scan(); // does not need to be in else because we return above
}
// outsource type checking to its own function
// without declared boolean return, the response is a type predicate "source is FileSource"
// boolean with extra information lets TypeScript know everything that passes through the function is a FileSource
function isFile(source) {
    return source.type === 'file';
}
