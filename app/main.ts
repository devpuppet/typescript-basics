import DefaultStudent from "./classes/Student"
var arrays = require("./arraysAndEnums.js");

// instantiate object
let student = new DefaultStudent("Johnson", "John");
console.log(student.getFullName());

// use of generics
let students = arrays.studentsListGeneric;
arrays.printStudentsListGeneric(students);