export declare class Container {
    static _services: {
        [key: string]: any;
    };
    static registerService(key: string, constr: any): typeof Container;
    static get<T>(constr: Function, args?: Array<any>): T;
    static reset(): typeof Container;
}
