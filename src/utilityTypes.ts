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
