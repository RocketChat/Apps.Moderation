import { Omit } from '../../lib/utils';
import { IUIKitErrorInteractionParam } from '../accessors/IUIController';
import { IUIKitErrorResponse, IUIKitModalResponse, IUIKitResponse } from './IUIKitInteractionType';
import { IUIKitView } from './IUIKitView';
import { IUIKitBaseIncomingInteraction } from './UIKitIncomingInteractionTypes';
export declare type IUIKitModalViewParam = Omit<IUIKitView, 'appId' | 'id' | 'type'> & Partial<Pick<IUIKitView, 'id'>>;
export declare class UIKitInteractionResponder {
    private readonly baseContext;
    constructor(baseContext: IUIKitBaseIncomingInteraction);
    successResponse(): IUIKitResponse;
    errorResponse(): IUIKitResponse;
    openModalViewResponse(viewData: IUIKitModalViewParam): IUIKitModalResponse;
    updateModalViewResponse(viewData: IUIKitModalViewParam): IUIKitModalResponse;
    viewErrorResponse(errorInteraction: IUIKitErrorInteractionParam): IUIKitErrorResponse;
}
