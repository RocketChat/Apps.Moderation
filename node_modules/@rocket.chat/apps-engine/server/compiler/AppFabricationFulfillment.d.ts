import { IAppInfo } from '../../definition/metadata';
import { AppLicenseValidationResult } from '../marketplace/license';
import { ProxiedApp } from '../ProxiedApp';
import { ICompilerError } from './ICompilerError';
export declare class AppFabricationFulfillment {
    info: IAppInfo;
    app: ProxiedApp;
    implemented: {
        [int: string]: boolean;
    };
    compilerErrors: Array<ICompilerError>;
    licenseValidationResult: AppLicenseValidationResult;
    storageError: string;
    appUserError: object;
    constructor();
    setAppInfo(information: IAppInfo): void;
    getAppInfo(): IAppInfo;
    setApp(application: ProxiedApp): void;
    getApp(): ProxiedApp;
    setImplementedInterfaces(interfaces: {
        [int: string]: boolean;
    }): void;
    getImplementedInferfaces(): {
        [int: string]: boolean;
    };
    setCompilerErrors(errors: Array<ICompilerError>): void;
    getCompilerErrors(): Array<ICompilerError>;
    setStorageError(errorMessage: string): void;
    setAppUserError(error: object): void;
    getStorageError(): string;
    getAppUserError(): object;
    hasStorageError(): boolean;
    hasAppUserError(): boolean;
    getLicenseValidationResult(): AppLicenseValidationResult;
}
