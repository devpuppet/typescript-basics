@DecoratorClass('<h1>Title</h1><h2>Price</h2>', 'ABC')
class Product {
    @DecoratorProperty
    private _title: string = "Random product";

    constructor(title: string, private _price: number) {
        this._title = title;
    };

    get title() {
        return this._title;
    }

    get price() {
        return this._price;
    }

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
    return function<T extends { new (...args: any[]): { title: string, price: number }}>(originalConstructor: T) {
        return class extends originalConstructor {
            constructor(...originalConstructorArguments: any[]) {
                super(originalConstructorArguments[0], originalConstructorArguments[1]);
                const element = document.getElementById(hookId);
                if (element) {
                element.innerHTML = template;
                element.querySelector('h1').textContent = 'Title: ' + this.title;
                element.querySelector('h2').textContent = 'Price: ' + this.price.toString();
                }
            }
        };
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

const product = new Product('Tooth paste', 1.23);

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjustedDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFunction = originalMethod.bind(this);
            return boundFunction;
        }
    };
    return adjustedDescriptor;
}

class Printer {
    message = 'Printer message';
    
    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const printer = new Printer();
const button = document.querySelector('button');
button.addEventListener('click', printer.showMessage);