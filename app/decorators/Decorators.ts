@DecoratorClass('<h1>Class Decorator</h1>', 'ABC')
class Product {
    @DecoratorProperty
    private _title: string;

    constructor(title: string, private _price: number) {
        this._title = title;
    };

    @DecoratorAccessor
    set price(value: number) {
        if (value <= 0) {
            throw new Error('Price should be positive number');
        }
        this._price = value;
    }

    @DecoratorMethod
    getPriceWithTax(@DecoratorParameter tax: number) {
        return this._price * (1 + tax);
    }
}

function DecoratorClass(template: string, hookId: string) {
    console.log('Class decorator');
    return function(_: Function) {
        const element = document.getElementById(hookId);
        if (element) {
            element.innerHTML = template;
        }
    }
}

function DecoratorProperty(target: any, propertyName: string) {
    console.log('Property decorator');
    console.log(target, propertyName);
}

function DecoratorAccessor(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator');
    console.log(target, name, descriptor);
}

function DecoratorMethod(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Method decorator');
    console.log(target, name, descriptor);
}

function DecoratorParameter(target: string, name: string, position: number) {
    console.log('Parameter decorator');
    console.log(target, name, position);
}