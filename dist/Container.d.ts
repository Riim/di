export declare class Container {
    static _services: {
        [key: string]: Function;
    };
    static registerService(key: string, constr: Function): typeof Container;
    static get<T>(constr: Function, args?: Array<any>): T;
    static reset(): typeof Container;
}
