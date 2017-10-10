"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Container_1 = require("./Container");
exports.Container = Container_1.Container;
var InjectDecorator_1 = require("./InjectDecorator");
exports.Inject = InjectDecorator_1.InjectDecorator;
var container = new Container_1.Container();
exports.container = container;
