"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Container = /** @class */ (function () {
    function Container() {
    }
    Container.registerService = function (key, service) {
        this._services[key] = service;
        return this;
    };
    Container.get = function (constr, args) {
        var services = this._services;
        var instance = Object.create(constr.prototype);
        var inject = constr.inject;
        for (var name_1 in inject) {
            var service = services[inject[name_1]];
            if (!service) {
                throw new TypeError("Service \"" + name_1 + "\" is not registered");
            }
            instance[name_1] =
                typeof service == 'function'
                    ? service.instance || this.get(service)
                    : service;
        }
        constr.apply(instance, args);
        return instance;
    };
    Container.reset = function () {
        this._services = Object.create(null);
        return this;
    };
    Container._services = Object.create(null);
    return Container;
}());
exports.Container = Container;
