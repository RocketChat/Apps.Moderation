"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uikit_1 = require("../../definition/uikit");
const UIKitInteractionPayloadFormatter_1 = require("../../definition/uikit/UIKitInteractionPayloadFormatter");
class UIController {
    constructor(appId, bridges) {
        this.appId = appId;
        this.uiInteractionBridge = bridges.getUiInteractionBridge();
    }
    openModalView(view, context, user) {
        const interactionContext = Object.assign({}, context, { type: uikit_1.UIKitInteractionType.MODAL_OPEN, appId: this.appId });
        return this.uiInteractionBridge.notifyUser(user, UIKitInteractionPayloadFormatter_1.formatModalInteraction(view, interactionContext), this.appId);
    }
    updateModalView(view, context, user) {
        const interactionContext = Object.assign({}, context, { type: uikit_1.UIKitInteractionType.MODAL_UPDATE, appId: this.appId });
        return this.uiInteractionBridge.notifyUser(user, UIKitInteractionPayloadFormatter_1.formatModalInteraction(view, interactionContext), this.appId);
    }
    setViewError(errorInteraction, context, user) {
        const interactionContext = Object.assign({}, context, { type: uikit_1.UIKitInteractionType.ERRORS, appId: this.appId });
        return this.uiInteractionBridge.notifyUser(user, UIKitInteractionPayloadFormatter_1.formatErrorInteraction(errorInteraction, interactionContext), this.appId);
    }
}
exports.UIController = UIController;

//# sourceMappingURL=UIController.js.map
