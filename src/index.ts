import { Container } from './Container';
import { injectDecorator } from './injectDecorator';

let container = new Container();

export {
	Container,
	container,
	injectDecorator as inject
};
