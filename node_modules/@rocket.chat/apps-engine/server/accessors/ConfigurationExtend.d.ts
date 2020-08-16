import { IApiExtend, IConfigurationExtend, IExternalComponentsExtend, IHttpExtend, ISettingsExtend, ISlashCommandsExtend } from '../../definition/accessors';
export declare class ConfigurationExtend implements IConfigurationExtend {
    readonly http: IHttpExtend;
    readonly settings: ISettingsExtend;
    readonly slashCommands: ISlashCommandsExtend;
    readonly api: IApiExtend;
    readonly externalComponents: IExternalComponentsExtend;
    constructor(https: IHttpExtend, sets: ISettingsExtend, cmds: ISlashCommandsExtend, api: IApiExtend, externalComponents: IExternalComponentsExtend);
}
