"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function injectDecorator() {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    return function (componentConstr) {
        componentConstr.inject = keys;
    };
}
exports.injectDecorator = injectDecorator;
