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
    Container.prototype.get = function (constr, args) {
        var keys = constr.inject;
        var instances;
        if (keys) {
            var serviceMap = this._serviceMap;
            instances = new Array(keys.length);
            for (var i = 0, l = keys.length; i < l; i++) {
                var service = serviceMap[keys[i]];
                if (!service) {
                    throw new TypeError("Service \"" + keys[i] + "\" is not registered");
                }
                instances[i] = (typeof service == 'function' ? this.get(service) : service);
            }
        }
        var instance = Object.create(constr.prototype);
        constr.apply(instance, instances && args ? instances.concat(args) : instances || args || []);
        return instance;
    };
    return Container;
}());
exports.Container = Container;
