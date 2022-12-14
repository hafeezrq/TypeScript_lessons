"use strict";
/*************************************
 *                                   *
 *          Utility Types            *
 *                                   *
 *************************************/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
// ================================================ //
// 2: Required<Type>
// Required utility makes all prperties required even the optional props.
const recordAssignment = (assignment) => {
    // all logic will go here to record the assignment
    return assignment;
};
// recordAssignment(assignment1); // Error: as prop 'verified' is not there in assignment1.
recordAssignment(Object.assign(Object.assign({}, assignment1), { verified: true })); // OK: as 'verified' is supplied.
// ========================================= //
// 3: Readonly<Type>
// We can't overwrite properties either, and also eequired all properties otherwise won't work
const verifiedAssignment = Object.assign(Object.assign({}, gradedAssignment), { verified: true });
// verifiedAssignment.grade = 85; // Error: it wouldn't work as all properties read-only now.
// ========================================= //
// 4: Record<Keys, Type>
const hexColorMap = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF',
};
const finalRecord = {
    Sarah: 'A',
    Kelly: 'U',
};
const gradeData = {
    Sarah: { assign1: 95, assign2: 90 },
    Kelly: { assign1: 25, assign2: 15 },
};
const score = {
    studentId: 'K123',
    grade: 85,
};
const priview = {
    studentId: 'K123',
    title: 'Final Project',
    // we omitted grade and verified.
};
const theAdjustedGrade = 'A';
const theHighGrade = 'A';
const oneName = 'Dave'; // Now we can assign only 'Dave' or 'John' only.
const createNewAssignment = (title, points) => {
    return { title, points };
};
// Note: If we change the function like follow. It has no return type, may
// be params and return type then we have to change the NewAssignment type as well
const createNewAssignmentV2 = (title, points) => {
    return { title, points };
};
// But if we declare retuen type after function then no change will be required after
// any change in the function. In the following example NewAssign will be updated with
// ay change in the createNewAssign function.
const createNewAssign = (title, points) => {
    return { title, points };
};
// and it wil be use as
const tsAssignmenat = createNewAssign('Utility Type', 100);
console.log(tsAssignmenat);
const AssignArgs = ['Generics', 100];
const tsAssignmenat2 = createNewAssign(...AssignArgs);
console.log(tsAssignmenat2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
        return res.json();
    })
        .catch(err => {
        if (err instanceof Error) {
            console.log(err.message);
        }
    });
    return data;
});
// Note: without Awaited it returns type is Promise
fetchUsers().then(users => console.log(users));
