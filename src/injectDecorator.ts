export function injectDecorator(...keys: Array<string>) {
	return (componentConstr: { [name: string]: any }) => {
		componentConstr.inject = keys;
	};
}
