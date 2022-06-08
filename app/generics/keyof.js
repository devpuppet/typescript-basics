function extractAndConvertIncorrect(obj, key) {
    return 'Value: ' + obj[key];
}
// with above implementation of extractAndConvert(), you don't have guarantee that the object passed in contains the 'name' property
console.log(extractAndConvertIncorrect({}, 'name'));
// To guarantee that obj contains 'name' property, we can use generics
// T extends object - any type tha is an object
// U extends keyof T - property of type T
function extractAndConvertCorrect(obj, key) {
    return 'Value: ' + obj[key];
}
console.log(extractAndConvertCorrect({ name: 'Kamil' }, 'name'));
// console.log(extractAndConvertCorrect({name: 'Kamil'}, 'age')); // this won't work because property 'age' doesn't exist in the object
//# sourceMappingURL=keyof.js.map