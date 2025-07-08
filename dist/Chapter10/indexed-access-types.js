"use strict";
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
};
