import DefaultStudent from "./classes/Student"
import { Style } from "./types/Style";
import { Observable } from "./classes/Obervable";
var arrays = require("./arraysAndEnums.js");

// instantiate object
let student = new DefaultStudent("Johnson", "John");
console.log(student.getFullName());

// use of generics
let students = arrays.studentsListGeneric;
arrays.printStudentsListGeneric(students);

// random types
let style: Style = 'bold';

// generic types
let ob1: Observable<number>;
ob1 = new Observable(17);

let ob2: Observable<string>;
ob2 = new Observable("Kamil");

let ob3: Observable<DefaultStudent>;
ob3 = new Observable(student);