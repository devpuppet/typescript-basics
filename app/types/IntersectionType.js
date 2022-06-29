const e1 = {
    name: 'Kamil',
    privileges: ['drop-database'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') { // type guard
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add('Kamil', 'Kukielka'));
function printEmployeeInfo(emp) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) { // type guard
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) { // type guard
        console.log('Start Date: ' + emp.startDate);
    }
}
console.log(printEmployeeInfo({ name: 'Kamil', startDate: new Date() }));
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log(`Loading ${amount} cargos....`);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) { // type guard
        vehicle.loadCargo(1);
    }
}
useVehicle(v1);
useVehicle(v2);
//# sourceMappingURL=IntersectionType.js.map