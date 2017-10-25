export function InjectDecorator(serviceKey: string) {
	return (target: Object, propertyName: string, propertyDesc?: PropertyDescriptor) => {
		let injectDesc = Object.getOwnPropertyDescriptor(target.constructor, 'inject');
		let inject = injectDesc
			? injectDesc.value
			: ((target.constructor as any).inject = Object.create(
					(target.constructor as any).inject || null
				));

		inject[propertyName] = serviceKey;
	};
}
