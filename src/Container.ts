export class Container {
	static _services: { [key: string]: any } = Object.create(null);

	static register(key: string, service: any): typeof Container {
		Container._services[key] = service;
		return Container;
	}

	static get<R>(constr: Function, args?: Array<any>): R {
		let keys = (constr as any).inject;
		let inject: Array<object> | undefined;

		if (keys) {
			let services = Container._services;

			inject = new Array(keys.length);

			for (let i = 0, l = keys.length; i < l; i++) {
				let service = services[keys[i]];

				if (!service) {
					throw new TypeError(`Service "${keys[i]}" is not registered`);
				}

				inject[i] = typeof service == 'function' ? Container.get(service) : service;
			}
		}

		let instance = Object.create(constr.prototype);
		constr.apply(instance, inject && args ? inject.concat(args) : inject || args || []);
		return instance;
	}
}
