/*************************************
 *                                   *
 *          Utility Types            *
 *                                   *
 *************************************/

// 1: Partial<Type>

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean; // Optional
}

/* In the following we use TS utility Partial to update the wanted
 * properties of the object, not all properties needed to be passed.
 */
const updateAssignment = (
  assignment: Assignment,
  propsTobeUpdated: Partial<Assignment>
): Assignment => {
  return { ...assignment, ...propsTobeUpdated };
};

// In the following the optional prop verified is not given any value.
const assignment1: Assignment = {
  studentId: 'CompSci2001',
  title: 'Final Project',
  grade: 0,
};
// Now we don't pass all props as we just want to update grade only.
console.log(updateAssignment(assignment1, { grade: 95 })); // We get the assignment with grade updated.
const gradedAssignment = updateAssignment(assignment1, { grade: 95 });
// ================================================ //

// 2: Required<Type>

// Required utility makes all prperties required even the optional props.

const recordAssignment = (assignment: Required<Assignment>): Assignment => {
  // all logic will go here to record the assignment
  return assignment;
};
// recordAssignment(assignment1); // Error: as prop 'verified' is not there in assignment1.
recordAssignment({ ...assignment1, verified: true }); // OK: as 'verified' is supplied.
// ========================================= //

// 3: Readonly<Type>

// We can't overwrite properties either, and also eequired all properties otherwise won't work
const verifiedAssignment: Readonly<Assignment> = {
  ...gradedAssignment,
  verified: true,
};

// verifiedAssignment.grade = 85; // Error: it wouldn't work as all properties read-only now.
// ========================================= //

// 4: Record<Keys, Type>

const hexColorMap: Record<string, string> = {
  red: 'FF0000',
  green: '00FF00',
  blue: '0000FF',
};
// Note: hexColorMap has the key names strings and values strings as well

// Or we can use litrals as well, as follows
type Students = 'Sarah' | 'Kelly';
type LettersGrade = 'A' | 'B' | 'C' | 'D' | 'U';
const finalRecord: Record<Students, LettersGrade> = {
  Sarah: 'A',
  Kelly: 'U',
};

// Or Using interfaces, like
interface GradesAchieved {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, GradesAchieved> = {
  Sarah: { assign1: 95, assign2: 90 },
  Kelly: { assign1: 25, assign2: 15 },
};
// ================================================== //

// 5: Pick<Type, Keys> => we can pick some of all properties of an object

// In the following example we pick two properties of Assignment, we created above
type AssignResult = Pick<Assignment, 'studentId' | 'grade'>;
const score: AssignResult = {
  studentId: 'K123',
  grade: 85,
};
// ================================================= //

// 6: Omit<Type, Keys>

// Constructs a type by picking all properties from Type and
// then removing Keys(string literal or union of string literals).
type AssignPreview = Omit<Assignment, 'grade' | 'verified'>;
const priview: AssignPreview = {
  studentId: 'K123',
  title: 'Final Project',
  // we omitted grade and verified.
};
// ================================================ //

// 7: Exclude<UnionType, ExcludedMembers>
type AdjustGrade = Exclude<LettersGrade, 'U'>; // => adjustGrade = 'A' | 'B' | 'C' | 'D'
const theAdjustedGrade: AdjustGrade = 'A';

// 8: Extract<Type, Union>
type HighGrades = Extract<LettersGrade, 'A' | 'B'>; // highGrades = 'A' | 'B'
const theHighGrade: HighGrades = 'A';
// ================================================ //

// 9: NonNullable<Type>
type AllPossibleGrades = 'Dave' | 'John' | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>;
const oneName: NamesOnly = 'Dave'; // Now we can assign only 'Dave' or 'John' only.
// ================================================= //

// 10: ReturnType<Type>

type NewAssignment = { title: string; points: number };
const createNewAssignment = (title: string, points: number): NewAssignment => {
  return { title, points };
};
// Note: If we change the function like follow. It has no return type, may
// be params and return type then we have to change the NewAssignment type as well
const createNewAssignmentV2 = (title: string, points: number) => {
  return { title, points };
};

// But if we declare retuen type after function then no change will be required after
// any change in the function. In the following example NewAssign will be updated with
// ay change in the createNewAssign function.
const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;
// and it wil be use as
const tsAssignmenat: NewAssign = createNewAssign('Utility Type', 100);
console.log(tsAssignmenat);
// ======================================================== //

// 11: Parameters<Type>
// It is tuple
type AssignParams = Parameters<typeof createNewAssign>;
const AssignArgs: AssignParams = ['Generics', 100];
const tsAssignmenat2: NewAssign = createNewAssign(...AssignArgs);
console.log(tsAssignmenat2);
// ======================================================= //

// 12: Awaited<Type> - helps us with the return type of Promise
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      return res.json();
    })
    .catch(err => {
      if (err instanceof Error) {
        console.log(err.message);
      }
    });
  return data;
};
type fetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>; // Return type is User[]
// Note: without Awaited it returns type is Promise
fetchUsers().then(users => console.log(users));
