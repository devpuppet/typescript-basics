type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

// type combining two above types
type ElevatedEmployee = Admin & Employee; 

const e1: ElevatedEmployee = {
    name: 'Kamil',
    privileges: ['drop-database'],
    startDate: new Date()
}

console.log(e1);

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric; // Typescript sees that Universal is of type number as this is the intersection of above 2 union types