// can define appuser type like this
    // type AppUser = {
    //     name: string;
    //     age: number;
    //     permissions: {
    //         id: string;
    //         title: string;
    //         description: string;
    //     }[]
    // };

// but if there is already an app user we can derive the structure
const appUser = {
    name: 'Julian',
    age: 32,
    permissions: [{
        id: 'p1',
        title: 'Admin',
        description: 'Admin access'
    }]
}
type AppUser = typeof appUser;

// indexed access type could be copy and pasted from AppUSer like this
    // type Perms = {
    //     id: 'p1',
    //     title: 'Admin',
    //     description: 'Admin access'
    // }[];

// but can be extracted and declared from AppUser object
type Perms = AppUser['permissions'];
    // this creates the same permissions type from the object:
    // Initial type:
    // {name: string, age: number, permissions: {id: string, title: string, description: string}[]}

type Perm = Perms[number]
type Names = string[];
type Name = Names[number];