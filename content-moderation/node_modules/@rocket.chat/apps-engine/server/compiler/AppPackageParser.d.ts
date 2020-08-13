import { AppCompiler } from './AppCompiler';
import { IParseZipResult } from './IParseZipResult';
export declare class AppPackageParser {
    static uuid4Regex: RegExp;
    private allowedIconExts;
    private appsEngineVersion;
    constructor();
    parseZip(compiler: AppCompiler, zipBase64: string): Promise<IParseZipResult>;
    private getLanguageContent;
    private getIconFile;
    private getEngineVersion;
}
