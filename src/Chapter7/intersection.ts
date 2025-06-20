type FileData = {
    path: string;
    content: string;
}

type DatabaseData = {
    connectionUrl: string;
    credentials: string;
}

type Status = {
    isOpen: boolean;
    errorMessage? : string;
}

type AcessedFieldData = FileData & Status;
type AccessDatabaseData = DatabaseData & Status;