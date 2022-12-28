"use strict";
/*************************************
 *                                   *
 *          Utility Types            *
 *                                   *
 *************************************/
/* In the following we use TS utility Partial to update the wanted
 * properties of the object, not all properties needed to be passed.
 */
const updateAssignment = (assignment, propsTobeUpdated) => {
    return Object.assign(Object.assign({}, assignment), propsTobeUpdated);
};
// In the following the optional prop verified is not given any value.
const assignment1 = {
    studentId: 'CompSci2001',
    title: 'Final Project',
    grade: 0,
};
// Now we don't pass all props as we just want to update grade only.
console.log(updateAssignment(assignment1, { grade: 95 })); // We get the assignment with grade updated.
const gradedAssignment = updateAssignment(assignment1, { grade: 95 });
