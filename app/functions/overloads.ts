function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
function add2(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') { // type guard
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add2('Max', 'Kamil'); 
result.split(' '); // without function overload, we would get an TS error that split() is not a valid function