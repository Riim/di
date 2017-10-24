"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Container = /** @class */ (function () {
    function Container() {
    }
    Container.register = function (key, service) {
        Container._services[key] = service;
        return Container;
    };
    Container.get = function (constr, args) {
        var keys = constr.inject;
        var inject;
        if (keys) {
            var services = Container._services;
            inject = new Array(keys.length);
            for (var i = 0, l = keys.length; i < l; i++) {
                var service = services[keys[i]];
                if (!service) {
                    throw new TypeError("Service \"" + keys[i] + "\" is not registered");
                }
                inject[i] = typeof service == 'function' ? Container.get(service) : service;
            }
        }
        var instance = Object.create(constr.prototype);
        constr.apply(instance, inject && args ? inject.concat(args) : inject || args || []);
        return instance;
    };
    Container._services = Object.create(null);
    return Container;
}());
exports.Container = Container;
