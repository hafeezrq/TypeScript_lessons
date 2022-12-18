"use strict";
// Functions
/* Typescript doesn't allow without specifying type of parameters a and b
* const add = (a, b) => {
  return a + b;
};
* But as follows
*/
const add = (a, b) => {
    // return type is infered or can be suplied here
    return a + b;
};
// return type would be void if function is not returning any thing
const logMessage = (message) => {
    console.log(message);
};
// Use of 'function' keyword, an alternative
let subtract = function (num1, num2) {
    return num1 - num2;
};
let multiply = (a, b) => a * b;
// Optional parameters ! optinal parameters must be last ones.
let addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// With default value, only be used if no other value is supplied
// If it is not the last one then we have to give that parameter
// an 'undefined' value otherwise TS gives error.
let sumAll = (a, b, c = 2) => {
    return a + b;
};
// Note: default vlaue will not work with type alias and with 'function' keyword
// Rest parameter
const total1 = (...numbers) => {
    return numbers.reduce((prev, curr) => prev + curr);
};
total1(1, 2, 3, 4); // will return 10;
// if rest param is not first one as follows
const total2 = (a, ...numbers) => {
    return numbers.reduce((prev, curr) => prev + curr);
    // return a + numbers.reduce((prev, curr) => prev + curr);
};
total2(1, 2); // returns 2, as a isn't being added. line 58 will return 3
// Type 'never' => reutrn type will be never
const createError = (message) => {
    throw new Error(message);
};
// infinite loop will give return type 'never' as well
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
    }
};
// Use of 'never' type
const numberOrString = (value) => {
    if (typeof value === 'string') {
        return 'string';
    }
    if (typeof value === 'number')
        return 'number';
    return createError('This should never happened');
};
