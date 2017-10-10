import { Container } from './Container';
import { InjectDecorator } from './InjectDecorator';

let container = new Container();

export {
	Container,
	container,
	InjectDecorator as Inject
};
