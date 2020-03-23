var Language;
(function (Language) {
    Language["English"] = "English";
    Language["Polish"] = "Polish";
})(Language || (Language = {}));
;
var student = {
    Name: "Kamil",
    Age: 30,
    Phone: 123123,
    Language: Language.English
};
exports.studentsList = [
    { Name: "Sara", Age: 18, Phone: 101010, Language: Language.English },
    { Name: "Robcio", Age: 1, Phone: 1000, Language: Language.Polish }
];
//studentsList.push(student);
// for (let index = 0; index < studentsList.length; index++) {
//     const element = studentsList[index];
//     console.log(element);
// }
exports.printStudentsList = function printStudentsList(students) {
    students.forEach(function (student) {
        console.log("Age: " + student.Age
            + " with Name: " + student.Name
            + " has Phone: " + student.Phone
            + " knows language: " + student.Language);
    });
};
// getStudentsList(studentsList);
// Rest Parameters
exports.getNumbers = function getNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    nums.forEach(function (number) {
        console.log("Number: " + number);
    });
};
// getNumbers(1,2,3,4,5);
// Default parameter
exports.getInfo = function getInfo(info) {
    if (info === void 0) { info = "Happy:)"; }
    console.log(info);
};
// getInfo();
// getInfo("Happy as well :)");
//# sourceMappingURL=arraysAndEnums.js.map