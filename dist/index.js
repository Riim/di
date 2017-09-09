"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Container_1 = require("./Container");
exports.Container = Container_1.Container;
var injectDecorator_1 = require("./injectDecorator");
exports.inject = injectDecorator_1.injectDecorator;
var container = new Container_1.Container();
exports.container = container;
