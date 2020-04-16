"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./classes/Student");
var Obervable_1 = require("./classes/Obervable");
var arrays = require("./arraysAndEnums.js");
// instantiate object
var student = new Student_1.default("Johnson", "John");
console.log(student.getFullName());
// use of generics
var students = arrays.studentsListGeneric;
arrays.printStudentsListGeneric(students);
// random types
var style = 'bold';
// generic types
var ob1;
ob1 = new Obervable_1.Observable(17);
var ob2;
ob2 = new Obervable_1.Observable("Kamil");
var ob3;
ob3 = new Obervable_1.Observable(student);
//# sourceMappingURL=main.js.map