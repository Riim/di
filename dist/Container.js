"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Container = /** @class */ (function () {
    function Container() {
        this._services = Object.create(null);
    }
    Container.prototype.register = function (key, service) {
        this._services[key] = service;
        return this;
    };
    Container.prototype.get = function (constr, args) {
        var keys = constr.inject;
        var inject;
        if (keys) {
            var services = this._services;
            inject = new Array(keys.length);
            for (var i = 0, l = keys.length; i < l; i++) {
                var service = services[keys[i]];
                if (!service) {
                    throw new TypeError("Service \"" + keys[i] + "\" is not registered");
                }
                inject[i] = (typeof service == 'function' ? this.get(service) : service);
            }
        }
        var instance = Object.create(constr.prototype);
        constr.apply(instance, inject && args ? inject.concat(args) : inject || args || []);
        return instance;
    };
    return Container;
}());
exports.Container = Container;
