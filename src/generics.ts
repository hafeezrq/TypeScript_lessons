// Generics: To define strict types for typesafe developer experience
// Generics provide a placeholder, a type of variable

// Example
// Following function will eccept any type of parameter.
const echo = <T>(param: T): T => param;

// Dosn't have to be return type!
const isObject = <T>(arg: T): boolean => {
  return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
};

console.log(isObject(true));
console.log(isObject('John'));
console.log(isObject([1, 2, 3]));
console.log(isObject({ name: 'John' }));
console.log(isObject(null));

// Use with keyof assertion
const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObject(arg) && !Object.keys(arg as keyof T).length) {
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

// ===================== //
// Example:  interface with generic

interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObject(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

// Narrowing Generic with keyword extends

interface HasId {
  id: number;
}

const processUser = <T extends HasId>(user: T): T => {
  // process user logic goes here
  return user;
};

console.log(processUser({ id: 1, name: 'Dave' }));
console.log(processUser({ id: 1 }));
// console.log(processUser({ name: 'Dave' })); // Without id gives error.

// A little more complex example
const getUserProperty = <T extends HasId, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
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
