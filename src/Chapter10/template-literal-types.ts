const mainUserName = 'Julian';
const greeting = `Hello ${mainUserName}`;

type ReadPermissions = 'no-read' | 'read';
type WritePermissions = 'no-write' | 'write';

type FilePermissions = `${ReadPermissions}-${WritePermissions}`;

type DataFile = {
    data: string;
    permissions: FilePermissions;
};

type DataFileEventNames = `${keyof DataFile}Changed`

type DataFileEvents = {
    [key in DataFileEventNames]: () => void;
}