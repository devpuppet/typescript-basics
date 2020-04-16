"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Title(title) {
    return function (target, key, descriptor) {
        var original = descriptor.value; // catch the original function
        descriptor.value = function () {
            var result = original.apply(this); // apply original function to 'this' context
            return title + " " + result; // get the result from original function and apply additional logic
        };
        return descriptor;
    };
}
exports.Title = Title;
//# sourceMappingURL=Title.js.map