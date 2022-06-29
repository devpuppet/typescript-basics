var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
    Log
], Product.prototype, "_title", void 0);
__decorate([
    AccessorLog
], Product.prototype, "price", null);
Product = __decorate([
    WithTemplate('<h1>Class Decorator</h1>', 'ABC')
], Product);
function WithTemplate(template, hookId) {
    console.log('Class decorator');
    return function (_) {
        const element = document.getElementById(hookId);
        if (element) {
            element.innerHTML = template;
        }
    };
}
function Log(target, propertyName) {
    console.log('Property decorator');
    console.log(target, propertyName);
}
function AccessorLog(target, name, descriptor) {
    console.log('Accessor decorator');
    console.log(target, name, descriptor);
}
//# sourceMappingURL=PropertyDecorator.js.map