"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function InjectDecorator() {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    return function (componentConstr) {
        componentConstr.inject = keys;
    };
}
exports.InjectDecorator = InjectDecorator;
