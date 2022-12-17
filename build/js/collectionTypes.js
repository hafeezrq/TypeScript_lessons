"use strict";
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
let aTuple = ['Dave', 2022, true];
// Objects, Arrays are also objects
let myObject;
let anObject = {
    prop1: 'Name',
    prop2: 45,
};
myObject = []; // good as array is an object
// and we can use type then as follows
let evh = {
    name: 'Eddie',
    isActive: true,
    albums: [1984, 5051, 'OU812'],
};
// How we use the type in function
const greeting = (guitarist) => {
    return `Hello, ${guitarist.name}`;
};
console.log(greeting(evh));
// Enumus
/* Enums are one of the few features TypeScript has which is not
 * a type - level extension of JavaScript.
 * Enums allow a developer to define a set of named constants.
 * Using enums can make it easier to document intent, or create
 * a set of distinct cases.TypeScript provides both numeric and
 * string - based enums.
 *
 */
var Grades;
(function (Grades) {
    Grades[Grades["U"] = 0] = "U";
    Grades[Grades["D"] = 1] = "D";
    Grades[Grades["C"] = 2] = "C";
    Grades[Grades["B"] = 3] = "B";
    Grades[Grades["A"] = 4] = "A";
})(Grades || (Grades = {}));
console.log(Grades.U); // Prints '0' => enumrated!
// We can like U = 1, then it will start counting from 1 => A will be 5
