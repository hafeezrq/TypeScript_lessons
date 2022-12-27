// Index Signature
/* Index signatures are useful when you creating an object
 * but you don't know the exact name of the object's keys.
 * But you do know the shape of the object and you can declare
 * the types of the keys and types of the values.
 * Another reason is that TS requires an index signature if
 * you try to access the property of object dynamically.
 */

// Example
// Option 1: Regular/Normal Interface
/* interface TransactionObj {
  Pizza: number;
  Books: number;
  Job: number;
} */

// Option 2: If we declare with index signature
// comment out the above regular declared one then all error noted gone.
/* interface TransactionObj {
  [index: string]: number; // index/key => same thing and can't be of type boolean.
} */

// Option 2a: With the knowledge of existing properties of object,
// we want to provide index signature to possibly add more property(ies)
// in future. So the following will require the existing properties
// but could be added more.
interface TransactionObj {
  [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

// Implement the above interface // The regular/normal way (Option 1)
const todaysTransaction: TransactionObj = {
  Pizza: -10,
  Books: -10,
  Job: 50,
};

// Normally the properties are accessed like
console.log(todaysTransaction.Pizza); // Dot notation
console.log(todaysTransaction['Pizza']); // With bracket notation

// Followin is how we access dynamically
let prop: string = 'Pizza';
console.log(todaysTransaction[prop]); // Dynamically accessed => error (with option 1),
// because index signature hasn't been created
// and we trying to access it dynamically.

// Or if we use in the the loop
const todayNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction]; // Same error as dynamically access (with option 1)
  }
  return total;
};

console.log(todayNet(todaysTransaction));

// Some cons of the index signatures!
/* TS can't see in future or predict waht the key(s) would
 * son it doesn't give error in the following as it has
 * no idea about index/key name. TS will return 'undefined'
 * as this key doesn't exist in the object.
 *
 */
console.log(todaysTransaction['Dave']);

// ========================================= //
// Example
interface Student {
  [key: string]: string | number | number[] | undefined; // Needed all types of the existing props.
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: 'Doug',
  GPA: 3.5,
  classes: [100, 200],
};

console.log(student['test']); // without index/key signature it is
// an error to access non-existing prop
// but not with index signature

for (const key in student) {
  console.log(`${key}: ${student[key]}`); // without index signature will give error.
}

// If index signature is not declared then we can use 'keyof' assertion as follows
for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`); // without index signaute OK!
}

// Another interesting use is as follows when we don't know the type of the object
Object.keys(student).map(key => {
  console.log(student[key as keyof typeof student]);
});

// Use in function
const logStudent = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudent(student, 'GPA');
logStudent(student, 'name');
logStudent(student, 'classes');

// ======================================== //

// Example
// Use in type instead of interface
/* interface Incomes {
  [key: string]: number
}
 */

type Streams = 'salary' | 'bonus' | 'sidehustle';
type Incomes = Record<Streams, number | string>;

const monthlyIncomes: Incomes = {
  salary: 5000,
  bonus: 300,
  sidehustle: 200,
};

for (const revnue in monthlyIncomes) {
  console.log(monthlyIncomes[revnue as keyof Incomes]); // Withou use keyof assertion gives error
}
