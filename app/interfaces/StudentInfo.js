"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arraysAndEnums = require('../arraysAndEnums.js');
var Language = require('../constants/Language.js').Language;
var student = {
    Name: "John",
    Age: 11,
    Phone: 101010,
    Language: Language.Polish
};
var students = [student];
arraysAndEnums.printStudentsList(students);
//# sourceMappingURL=StudentInfo.js.map