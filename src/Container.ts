export class Container {
	static _services: { [key: string]: Function } = Object.create(null);

	static registerService(key: string, constr: Function): typeof Container {
		this._services[key] = constr;
		return this;
	}

	static get<T>(constr: Function, args?: Array<any>): T {
		let services = this._services;
		let instance = Object.create(constr.prototype);
		let inject = (constr as any).inject;

		for (let name in inject) {
			let service = services[inject[name]];

			if (!service) {
				throw new TypeError(`Service "${name}" is not registered`);
			}

			instance[name] = (service as any).instance || this.get(service);
		}

		constr.apply(instance, args);

		return instance;
	}

	static reset(): typeof Container {
		this._services = Object.create(null);
		return this;
	}
}
