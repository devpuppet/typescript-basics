export function Title(title) {
    return function (target, key, descriptor) {
        const original = descriptor.value; // catch the original function
        descriptor.value = function () {
            const result = original.apply(this); // apply original function to 'this' context
            return `${title} ${result}`; // get the result from original function and apply additional logic
        };
        return descriptor;
    };
}
//# sourceMappingURL=Title.js.map