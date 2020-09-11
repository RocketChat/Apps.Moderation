import { ICompilerFile } from '../compiler';
export declare class Utilities {
    static deepClone<T>(item: T): T;
    static deepFreeze<T>(item: any): T;
    static deepCloneAndFreeze<T>(item: T): T;
    static transformModuleForCustomRequire(moduleName: string): string;
    static allowedInternalModuleRequire(moduleName: string): boolean;
    static buildCustomRequire(files: {
        [s: string]: ICompilerFile;
    }, currentPath?: string): (mod: string) => {};
}
