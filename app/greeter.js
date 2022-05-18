class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
let user = new Student("Sara", "Dearest", "Puppet");
console.log(greeter(user));
//# sourceMappingURL=greeter.js.map