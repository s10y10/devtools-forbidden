import type { Options } from './types';
export default class Forbidden {
    private _message;
    private _debugTime;
    constructor(options?: Options);
    count(e: Function): Function;
    fire(e: Function): void;
    write(): void;
    debug(): void;
}
