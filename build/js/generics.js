"use strict";
// Generics: To define strict types for typesafe developer experience
// Generics provide a placeholder, a type of variable
// =================================================== //
//                                                     //
//        Functions with Generics                      //
//                                                     //
// =================================================== //
const echo = (param) => param;
// Dosn't have to be return type!
const isObject = (arg) => {
    return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
};
console.log(isObject(true));
console.log(isObject('John'));
console.log(isObject([1, 2, 3]));
console.log(isObject({ name: 'John' }));
console.log(isObject(null));
// Use with keyof assertion
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObject(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue('Dave'));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: 'Dave' }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObject(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    // process user logic goes here
    return user;
};
console.log(processUser({ id: 1, name: 'Dave' }));
console.log(processUser({ id: 1 }));
// console.log(processUser({ name: 'Dave' })); // Without id gives error.
// A little more complex example
const getUserProperty = (users, key) => {
    return users.map(user => user[key]); // we don't use assertion here
    // and still it works fine because of 'K extends keyof T', i.e use of generic.
};
const usersArray = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496',
            },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
        },
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618',
            },
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains',
        },
    },
];
console.log(getUserProperty(usersArray, 'email'));
console.log(getUserProperty(usersArray, 'username'));
// =================================================== //
//                                                     //
//        Classes with Generics                        //
//                                                     //
// =================================================== //
class stateObject {
    constructor(data) {
        this.data = data;
        this.data = data;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new stateObject('John');
console.log(store.state); // Use getter
store.state = 'Dave';
// store.state = 42; // Gives error because TS infered type(T) is string as we use 'John' in instantiation.
// Alternate: We can do like as follows
// const store = new stateObject<string>('Lily');
const myStore = new stateObject([35]);
console.log(myStore.state);
myStore.state = ['Richard', 55, true];
console.log(myStore.state);
