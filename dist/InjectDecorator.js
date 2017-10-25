"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function InjectDecorator(serviceKey) {
    return function (target, propertyName, propertyDesc) {
        var injectDesc = Object.getOwnPropertyDescriptor(target.constructor, 'inject');
        var inject = injectDesc
            ? injectDesc.value
            : (target.constructor.inject = Object.create(target.constructor.inject || null));
        inject[propertyName] = serviceKey;
    };
}
exports.InjectDecorator = InjectDecorator;
