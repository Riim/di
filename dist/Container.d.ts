export declare class Container {
    _services: {
        [key: string]: any;
    };
    constructor();
    register(key: string, service: any): this;
    get<R>(constr: Function, args?: Array<any>): R;
}
