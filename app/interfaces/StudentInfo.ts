var arraysAndEnums = require('../arraysAndEnums.js');
var Language = require('../constants/Language.js').Language;

interface StudentInfo {
     Name: string,
     Age: number,
     Phone: number,
     Language: string
}

let student: StudentInfo = {
    Name: "John",
    Age: 11,
    Phone: 101010,
    Language: Language.Polish
}

let students = [student];

arraysAndEnums.printStudentsList(students);

export {}