import Student from "../classes/Student";

export function Title(title: string) {
    return function(target: Student, key: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value; // catch the original function

        descriptor.value = function() { // override original function with new behavior
            const result = original.apply(this); // apply original function to 'this' context
            return `${title} ${result}`; // get the result from original function and apply additional logic
        }

        return descriptor;
    }
}