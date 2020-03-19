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
var studentsList = [
    { Name: "Sara", Age: 18, Phone: 101010, Language: Language.English },
    { Name: "Robcio", Age: 1, Phone: 1000, Language: Language.Polish }
];
studentsList.push(student);
for (var index = 0; index < studentsList.length; index++) {
    var element = studentsList[index];
    console.log(element);
}
//# sourceMappingURL=arraysAndEnums.js.map