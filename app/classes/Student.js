"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(lastName, firstName) {
        this.lastName = lastName;
        this.firstName = firstName;
    }
    Student.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Student;
}());
exports.default = Student;
//# sourceMappingURL=Student.js.map