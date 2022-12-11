"use strict";
/*
 * Good to be explicit over implicit
 */
let firstName = 'Hafeez'; // TS infered type or called implicit type
let lastName = 'Rehman'; // Explicity type
let meaningOfLife;
let isLoading;
let album;
let album1; // Union/composite type
let re; // of Regular Expression type
// meaningOfLife = '1999'; // Ok for JavaScript but not TS
// if --noEmitError flag is on orr set in tsConfig.json
// then it will not compile into js file otherwise it wiil
// program will work normally.
// follwing are right as album is of type 'any'
album = 23;
album = 'Van H';
album = true;
album1 = 1984; // OK
album1 = 'Van Hellen'; //OK
re = /\w+/g;
const sume = (a, b) => {
    // Type of 'a' and 'b' must be explicit otherwise TS not happy.
    return a + b;
};
