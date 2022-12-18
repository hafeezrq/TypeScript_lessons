// Functions

/* Typescript doesn't allow without specifying type of parameters a and b
* const add = (a, b) => {
  return a + b;
};
* But as follows
*/
const add = (a: number, b: number) => {
  // return type is infered or can be suplied here
  return a + b;
};

// return type would be void if function is not returning any thing
const logMessage = (message: any): void => {
  console.log(message);
};

// Use of 'function' keyword, an alternative
let subtract = function (num1: number, num2: number): number {
  return num1 - num2;
};

// Use of type alias in functions
type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = (a, b) => a * b;
// Note: interface can be used instead of type alias
// interfaces better to be used for classes not TS types and functions
interface mathFunction_interface {
  (a: number, b: number): number;
}

// Optional parameters ! optinal parameters must be last ones.
let addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== 'undefined') {
    return a + b + c;
  }
  return a + b;
};
// With default value, only be used if no other value is supplied
// If it is not the last one then we have to give that parameter
// an 'undefined' value otherwise TS gives error.
let sumAll = (a: number, b: number, c = 2): number => {
  return a + b;
};
// Note: default vlaue will not work with type alias and with 'function' keyword

// Rest parameter
const total1 = (...numbers: number[]): number => {
  return numbers.reduce((prev, curr) => prev + curr);
};
total1(1, 2, 3, 4); // will return 10;

// if rest param is not first one as follows
const total2 = (a: number, ...numbers: number[]): number => {
  return numbers.reduce((prev, curr) => prev + curr);
  // return a + numbers.reduce((prev, curr) => prev + curr);
};
total2(1, 2); // returns 2, as a isn't being added. line 58 will return 3

// Type 'never' => reutrn type will be never
const createError = (message: string): never => {
  throw new Error(message);
};

// infinite loop will give return type 'never' as well
const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
  }
};
// Use of 'never' type
const numberOrString = (value: number | string): string => {
  if (typeof value === 'string') {
    return 'string';
  }
  if (typeof value === 'number') return 'number';

  return createError('This should never happened');
};
