function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Max', hobbies: ['Sport'] }, 30);
console.log("Object without 30 (numeric type):");
console.log(mergedObj);
function correctMerge(objA, objB) {
    return Object.assign(objA, objB);
}
const correctMergedObj = correctMerge({ name: 'Max' }, { age: 30 });
console.log("Object with age = 30 (passed as object):");
console.log(correctMergedObj);
//# sourceMappingURL=genericFunction.js.map