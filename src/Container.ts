export class Container {
	_services: { [key: string]: any };

	constructor() {
		this._services = Object.create(null);
	}

	register(key: string, service: any): this {
		this._services[key] = service;
		return this;
	}

	get<R>(constr: Function, args?: Array<any>): R {
		let keys = (constr as any).inject;
		let inject: Array<object> | undefined;

		if (keys) {
			let services = this._services;

			inject = new Array(keys.length);

			for (let i = 0, l = keys.length; i < l; i++) {
				let service = services[keys[i]];

				if (!service) {
					throw new TypeError(`Service "${ keys[i] }" is not registered`);
				}

				inject[i] = (typeof service == 'function' ? this.get(service) : service);
			}
		}

		let instance = Object.create(constr.prototype);
		constr.apply(instance, inject && args ? inject.concat(args) : inject || args || []);
		return instance;
	}
}
