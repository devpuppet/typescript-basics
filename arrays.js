var student = {
    Name: "Kamil",
    Age: 30,
    Phone: 123123
};
var studentsList = [
    { Name: "Sara", Age: 18, Phone: 101010 },
    { Name: "Robcio", Age: 1, Phone: 1000 }
];
studentsList.push(student);
for (var index = 0; index < studentsList.length; index++) {
    var element = studentsList[index];
    console.log(element);
}
//# sourceMappingURL=arrays.js.map