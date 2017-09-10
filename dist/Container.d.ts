export declare class Container {
    _serviceMap: {
        [key: string]: any;
    };
    constructor();
    register(key: string, service: any): this;
    get<T>(constr: Function, args?: Array<any>): T;
}
