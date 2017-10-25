"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Container_1 = require("./Container");
function ServiceDecorator(key) {
    return function (target) {
        Container_1.Container.registerService(key, target);
    };
}
exports.ServiceDecorator = ServiceDecorator;
