enum Language { English = "English", Polish = "Polish" };

let student = {
    Name: "Kamil",
    Age: 30,
    Phone: 123123,
    Language: Language.English
};

let studentsList = [
    { Name: "Sara", Age: 18, Phone: 101010, Language: Language.English },
    { Name: "Robcio", Age: 1, Phone: 1000, Language: Language.Polish }
];

studentsList.push(student);

for (let index = 0; index < studentsList.length; index++) {
    const element = studentsList[index];
    console.log(element);
}

