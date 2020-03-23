var arraysAndEnums = require('./arraysAndEnums.js');
// Parameters with types (fixed, defined type)
var students = arraysAndEnums.studentsList;
var printStudents = arraysAndEnums.printStudentsList;
printStudents(students);
// Rest parameters (provide as many arguments as you want, they must be of the same type)
var getNumbers = arraysAndEnums.getNumbers;
getNumbers(1, 11, 2);
getNumbers(1, 15);
// Default parameters (return default value if no value provided)
var info = arraysAndEnums.getInfo;
info("Very happy");
info();
// Anonymous function
var studentName = function (lastName, firstName) {
    return firstName + "..." + lastName;
};
console.log(studentName("John", "Johnson"));
// Arrow function
var studentFullName = function (lastName, firstName) { return firstName + ", " + lastName; };
console.log(studentFullName("Tom", "Thompson"));
//# sourceMappingURL=functions.js.map