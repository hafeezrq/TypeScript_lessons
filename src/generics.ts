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
