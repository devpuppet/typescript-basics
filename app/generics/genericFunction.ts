function merge<T, U>(objA: T, objB: U) {
 return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Max', hobbies: ['Sport']}, 30);
console.log("Object without 30 (numeric type):");
console.log(mergedObj);

function correctMerge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const correctMergedObj = correctMerge({name: 'Max'}, {age: 30});
console.log("Object with age = 30 (passed as object):");
console.log(correctMergedObj);