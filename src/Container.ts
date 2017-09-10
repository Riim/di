export class Container {
	_serviceMap: { [key: string]: any };

	constructor() {
		this._serviceMap = Object.create(null);
	}

	register(key: string, service: any): this {
		this._serviceMap[key] = service;
		return this;
	}

	get<T>(constr: Function, args?: Array<any>): T {
		let keys = (constr as any).inject;
		let instances: Array<object> | undefined;

		if (keys) {
			let serviceMap = this._serviceMap;

			instances = new Array(keys.length);

			for (let i = 0, l = keys.length; i < l; i++) {
				let service = serviceMap[keys[i]];

				if (!service) {
					throw new TypeError(`Service "${ keys[i] }" is not registered`);
				}

				instances[i] = (typeof service == 'function' ? this.get(service) : service);
			}
		}

		let instance = Object.create(constr.prototype);
		constr.apply(instance, instances && args ? instances.concat(args) : instances || args || []);
		return instance;
	}
}
