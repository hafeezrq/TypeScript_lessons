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
