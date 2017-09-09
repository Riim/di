"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Container = /** @class */ (function () {
    function Container() {
        this._serviceMap = Object.create(null);
    }
    Container.prototype.register = function (key, service) {
        this._serviceMap[key] = service;
        return this;
    };
    Container.prototype.get = function (constr) {
        var services = constr.inject;
        if (!services) {
            return new constr();
        }
        var serviceMap = this._serviceMap;
        var args = new Array(services.length);
        for (var i = 0, l = services.length; i < l; i++) {
            var service = serviceMap[services[i]];
            if (!service) {
                throw new TypeError("Service \"" + service + "\" is not registered");
            }
            args[i] = (typeof service == 'function' ? this.get(service) : service);
        }
        var instance = Object.create(constr.prototype);
        constr.apply(instance, args);
        return instance;
    };
    return Container;
}());
exports.Container = Container;
