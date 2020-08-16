export declare class AppLicenseValidationResult {
    private errors;
    private warnings;
    private validated;
    private appId;
    addError(field: string, message: string): void;
    addWarning(field: string, message: string): void;
    readonly hasErrors: boolean;
    readonly hasWarnings: boolean;
    readonly hasBeenValidated: boolean;
    setValidated(validated: boolean): void;
    setAppId(appId: string): void;
    getAppId(): string;
    getErrors(): object;
    getWarnings(): object;
    toJSON(): object;
}
