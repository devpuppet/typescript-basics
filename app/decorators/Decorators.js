var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
let Product = class Product {
    constructor(title, _price) {
        this._price = _price;
        this._title = "Random product";
        this._title = title;
    }
    ;
    get title() {
        return this._title;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        if (value <= 0) {
            throw new Error('Price should be positive number');
        }
        this._price = value;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
};
__decorate([
    DecoratorProperty
], Product.prototype, "_title", void 0);
__decorate([
    DecoratorAccessor
], Product.prototype, "price", null);
__decorate([
    DecoratorMethod,
    __param(0, DecoratorParameter)
], Product.prototype, "getPriceWithTax", null);
Product = __decorate([
    DecoratorClass('<h1>Title</h1><h2>Price</h2>', 'ABC')
], Product);
function DecoratorClass(template, hookId) {
    console.log('Class decorator');
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(...originalConstructorArguments) {
                super(originalConstructorArguments[0], originalConstructorArguments[1]);
                const element = document.getElementById(hookId);
                if (element) {
                    element.innerHTML = template;
                    element.querySelector('h1').textContent = 'Title: ' + this.title;
                    element.querySelector('h2').textContent = 'Price: ' + this.price.toString();
                }
            }
        };
    };
}
function DecoratorProperty(target, propertyName) {
    console.log('Property decorator');
    console.log(target, propertyName);
}
function DecoratorAccessor(target, name, descriptor) {
    console.log('Accessor decorator');
    console.log(target, name, descriptor);
}
function DecoratorMethod(target, name, descriptor) {
    console.log('Method decorator');
    console.log(target, name, descriptor);
}
function DecoratorParameter(target, name, position) {
    console.log('Parameter decorator');
    console.log(target, name, position);
}
const product = new Product('Tooth paste', 1.23);
function Autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjustedDescriptor = {
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
    constructor() {
        this.message = 'Printer message';
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const printer = new Printer();
const button = document.querySelector('button');
button.addEventListener('click', printer.showMessage);
const registeredValidators = {};
function Mandatory(target, propName) {
    var _a, _b;
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []), 'required'] });
}
function PositiveNumber(target, propName) {
    var _a, _b;
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []), 'positive'] });
}
function validate(obj) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Mandatory
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector('form');
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title');
    const priceEl = document.getElementById('price');
    const title = titleEl.value;
    const price = +priceEl.value;
    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        throw new Error('Invalid course data, think abou the values you input');
    }
    console.log(createdCourse);
});
//# sourceMappingURL=Decorators.js.map