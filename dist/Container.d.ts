export declare class Container {
    static _services: {
        [key: string]: any;
    };
    static register(key: string, service: any): typeof Container;
    static get<R>(constr: Function, args?: Array<any>): R;
}
