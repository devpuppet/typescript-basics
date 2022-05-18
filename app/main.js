import DefaultStudent from "./classes/Student";
import { Observable } from "./classes/Obervable";
var arrays = require("./arraysAndEnums.js");
// instantiate object
let student = new DefaultStudent("Johnson", "John");
console.log(student.getFullName());
// use of generics
let students = arrays.studentsListGeneric;
arrays.printStudentsListGeneric(students);
// random types
let style = 'bold';
// generic types
let ob1;
ob1 = new Observable(17);
let ob2;
ob2 = new Observable("Kamil");
let ob3;
ob3 = new Observable(student);
//# sourceMappingURL=main.js.map