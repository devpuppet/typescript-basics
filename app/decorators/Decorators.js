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
        this._title = title;
    }
    ;
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
    DecoratorClass('<h1>Class Decorator</h1>', 'ABC')
], Product);
function DecoratorClass(template, hookId) {
    console.log('Class decorator');
    return function (_) {
        const element = document.getElementById(hookId);
        if (element) {
            element.innerHTML = template;
        }
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
//# sourceMappingURL=Decorators.js.map