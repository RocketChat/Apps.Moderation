"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IUIKitInteractionType_1 = require("./IUIKitInteractionType");
const IUIKitView_1 = require("./IUIKitView");
const uuid = require("uuid/v1");
function formatModalInteraction(view, context) {
    if (![IUIKitInteractionType_1.UIKitInteractionType.MODAL_OPEN, IUIKitInteractionType_1.UIKitInteractionType.MODAL_UPDATE, IUIKitInteractionType_1.UIKitInteractionType.MODAL_CLOSE].includes(context.type)) {
        throw new Error(`Invalid type "${context.type}" for modal interaction`);
    }
    const type = context.type;
    return {
        type,
        triggerId: context.triggerId,
        appId: context.appId,
        view: Object.assign({ appId: context.appId, type: IUIKitView_1.UIKitViewType.MODAL, id: view.id ? view.id : uuid() }, view),
    };
}
exports.formatModalInteraction = formatModalInteraction;
function formatErrorInteraction(errorInteraction, context) {
    if (IUIKitInteractionType_1.UIKitInteractionType.ERRORS !== context.type) {
        throw new Error(`Invalid type "${context.type}" for error interaction`);
    }
    return {
        appId: context.appId,
        type: IUIKitInteractionType_1.UIKitInteractionType.ERRORS,
        errors: errorInteraction.errors,
        viewId: errorInteraction.viewId,
        triggerId: context.triggerId,
    };
}
exports.formatErrorInteraction = formatErrorInteraction;

//# sourceMappingURL=UIKitInteractionPayloadFormatter.js.map
