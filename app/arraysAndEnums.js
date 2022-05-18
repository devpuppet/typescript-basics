var Language;
(function (Language) {
    Language["English"] = "English";
    Language["Polish"] = "Polish";
})(Language || (Language = {}));
;
let student = {
    Name: "Kamil",
    Age: 30,
    Phone: 123123,
    Language: Language.English
};
exports.studentsList = [
    { Name: "Sara", Age: 18, Phone: 101010, Language: Language.English },
    { Name: "Robcio", Age: 1, Phone: 1000, Language: Language.Polish }
];
let studentsListGeneric = [
    { Name: "Sara", Age: 18, Phone: 101010, Language: Language.English },
    { Name: "Robcio", Age: 1, Phone: 1000, Language: Language.Polish }
];
exports.studentsListGeneric = studentsListGeneric;
//studentsList.push(student);
// for (let index = 0; index < studentsList.length; index++) {
//     const element = studentsList[index];
//     console.log(element);
// }
exports.printStudentsList = function printStudentsList(students) {
    students.forEach(student => {
        console.log("Age: " + student.Age
            + " with Name: " + student.Name
            + " has Phone: " + student.Phone
            + " knows language: " + student.Language);
    });
};
exports.printStudentsListGeneric = function printStudentsListGeneric(students) {
    students.forEach(student => {
        console.log("Age: " + student.Age
            + " with Name: " + student.Name
            + " has Phone: " + student.Phone
            + " knows language: " + student.Language);
    });
};
// getStudentsList(studentsList);
// Rest Parameters
exports.getNumbers = function getNumbers(...nums) {
    nums.forEach(number => {
        console.log("Number: " + number);
    });
};
// getNumbers(1,2,3,4,5);
// Default parameter
exports.getInfo = function getInfo(info = "Happy:)") {
    console.log(info);
};
// getInfo();
// getInfo("Happy as well :)");
//# sourceMappingURL=arraysAndEnums.js.map