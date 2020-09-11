import { IUIKitErrorInteractionParam } from '../accessors/IUIController';
import { IUIKitErrorInteraction, IUIKitInteraction, IUIKitModalInteraction } from './IUIKitInteractionType';
import { IUIKitModalViewParam } from './UIKitInteractionResponder';
export declare function formatModalInteraction(view: IUIKitModalViewParam, context: IUIKitInteraction): IUIKitModalInteraction;
export declare function formatErrorInteraction(errorInteraction: IUIKitErrorInteractionParam, context: IUIKitInteraction): IUIKitErrorInteraction;
