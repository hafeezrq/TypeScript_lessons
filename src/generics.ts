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
