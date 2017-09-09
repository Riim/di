export class Container {
	_serviceMap: { [key: string]: any };

	constructor() {
		this._serviceMap = Object.create(null);
	}

	register(key: string, service: any): this {
		this._serviceMap[key] = service;
		return this;
	}

	get<T>(constr: Function): T {
		let services = (constr as any).inject;

		if (!services) {
			return new (constr as any)();
		}

		let serviceMap = this._serviceMap;
		let args = new Array(services.length);

		for (let i = 0, l = services.length; i < l; i++) {
			let service = serviceMap[services[i]];

			if (!service) {
				throw new TypeError(`Service "${ service }" is not registered`);
			}

			args[i] = (typeof service == 'function' ? this.get(service) : service);
		}

		let instance = Object.create(constr.prototype);
		constr.apply(instance, args);
		return instance;
	}
}
