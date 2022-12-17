let stringArray = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];

/* stringArray[0] = 23; // No good as TS infered type string
stringArray.push(23); // As above */
stringArray[0] = 'John';

// Following good as TS infered type for guitars array is string|number
guitars[0] = 1984;
guitars[0] = 'John';

// Tuple => is an arry that takes a specific type of data at the specific position and has fixed length.
let aTuple: [string, number, boolean] = ['Dave', 2022, true];

// Objects, Arrays are also objects
let myObject: object;
let anObject = {
  prop1: 'Name',
  prop2: 45,
};
myObject = []; // good as array is an object

// We can create custome types as well, fixed size and types of data at specific position.
type Guitarist = {
  name: string;
  isActive: boolean;
  albums: (string | number)[];
};

// and we can use type then as follows
let evh: Guitarist = {
  name: 'Eddie',
  isActive: true,
  albums: [1984, 5051, 'OU812'],
};

// OR we can declar a type with optional property => infered type is boolean | undefined
type Singer = {
  name: string;
  isActive?: boolean;
  albums: (string | number)[];
};

// How we use the type in function
const greeting = (guitarist: Guitarist) => {
  return `Hello, ${guitarist.name}`;
};

console.log(greeting(evh));

// Interfaces in TS
/* 'Iterface' in TS is almost same as 'type'.
 * Where to use 'interface' and where to 'type'?
 * Mostly the interface will be use for the classes
 * but it works also same as the type as follows
 */

interface Guitarist_interface {
  name: string;
  isActive: boolean;
  albums: (string | number)[];
}

// Enumus
/* Enums are one of the few features TypeScript has which is not
 * a type - level extension of JavaScript.
 * Enums allow a developer to define a set of named constants.
 * Using enums can make it easier to document intent, or create
 * a set of distinct cases.TypeScript provides both numeric and
 * string - based enums.
 *
 */
enum Grades {
  U,
  D,
  C,
  B,
  A,
}

console.log(Grades.U); // Prints '0' => enumrated!
// We can like U = 1, then it will start counting from 1 => A will be 5
