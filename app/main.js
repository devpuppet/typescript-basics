"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./classes/Student");
var arrays = require("./arraysAndEnums.js");
// instantiate object
var student = new Student_1.Student("Johnson", "John");
console.log(student.getFullName());
// use of generics
var students = arrays.studentsListGeneric;
arrays.printStudentsListGeneric(students);
//# sourceMappingURL=main.js.map