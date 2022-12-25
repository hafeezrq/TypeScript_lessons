// Type aliase for types of TS
type one = string;
type two = string | number;
type three = 'hello';

// Conversion to more or less specific type
let a: one = 'Hello';
let b = a as two; // converts to less specific
let c = a as three; // converts to more specific

// Alternate is use angle brackets <>, not recommended for JSX files.
let d = <one>'World';
let e = <string | number>'World';

// Use of Assertion for narrowing down
const addOrConcat = (
  a: number,
  b: number,
  c: 'add' | 'concat'
): string | number => {
  if (c === 'add') {
    return a + b;
  }
  return '' + a + b;
};

// We use assertion as follows, without assertion (as) gives error
let val: string = addOrConcat(2, 3, 'concat') as string;

// Be careful! TS has no problem with it but instead of a number
// it will return a string.
let nexVal: number = addOrConcat(2, 3, 'concat') as number;

// Assertion useful with DOM!
const el1 = document.querySelector('img'); // TS infered typ of el1 is HTMLImageElement | null
const el2 = document.querySelector('#anId'); // TS infered typ of el2 is Element | null
const el3 = document.getElementById('#anId'); // TS infered typ of el3 is HTMLElement | null

// if we use one of property of the element,
//el1.src // without assertion then TS gives error
// But with assertion like
let el11 = document.querySelector('img') as HTMLImageElement; //use of assertion
el11.src; // no problem because, we say that we know what type of \
//element is there in the page by using assertion

// OR we can assert non-null asserton as follows
let el111 = document.querySelector('img')!; // non-null assertion
el111.src; // TS has no problem as it infers the type as HTLImageElement itself

let el21 = document.getElementById('#anId');
// el21.src // Error! (element possibly null) as infered type is HTMLElement | null

let el212 = document.getElementById('anId') as HTMLImageElement; // use of assertion
el212.src; // now it is ok

// User of angle brackets
let myElement = <HTMLImageElement>document.getElementById('#myId');
myElement.src; // No problem

// 10 as string; conversion type error
10 as unknown; // unknown assertion
10 as unknown as string; // will work, not recommended
