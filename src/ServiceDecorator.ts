import { Container } from './Container';

export function ServiceDecorator(key: string) {
	return (target: Function) => {
		Container.registerService(key, target);
	};
}
