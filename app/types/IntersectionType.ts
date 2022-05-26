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

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric; // Typescript sees that Universal is of type number as this is the intersection of above 2 union types

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') { // type guard
        return a.toString() + b.toString();
    }
    return a + b;
}

console.log(add('Kamil', 'Kukielka'));

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) { // type guard
        console.log('Privileges: ' + emp.privileges)
    }
    if ('startDate' in emp) { // type guard
        console.log('Start Date: ' + emp.startDate)
    }
}

console.log(printEmployeeInfo({name: 'Kamil', startDate: new Date()}));

class Car {
    drive() {
        console.log("Driving...");
    }
}

class Truck {
    drive() {
        console.log("Driving a truck...");
    }

    loadCargo(amount: number) {
        console.log(`Loading ${amount} cargos....`);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) { // type guard
        vehicle.loadCargo(1);
    }
}

useVehicle(v1);
useVehicle(v2);