import { IModify, IModifyCreator, IModifyExtender, IModifyUpdater, INotifier, IUIController } from '../../definition/accessors';
import { AppBridges } from '../bridges';
export declare class Modify implements IModify {
    private readonly bridges;
    private readonly appId;
    private creator;
    private updater;
    private extender;
    private notifier;
    private uiController;
    constructor(bridges: AppBridges, appId: string);
    getCreator(): IModifyCreator;
    getUpdater(): IModifyUpdater;
    getExtender(): IModifyExtender;
    getNotifier(): INotifier;
    getUiController(): IUIController;
}
