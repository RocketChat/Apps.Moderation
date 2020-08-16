"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ModifyCreator_1 = require("./ModifyCreator");
const ModifyExtender_1 = require("./ModifyExtender");
const ModifyUpdater_1 = require("./ModifyUpdater");
const Notifier_1 = require("./Notifier");
const UIController_1 = require("./UIController");
class Modify {
    constructor(bridges, appId) {
        this.bridges = bridges;
        this.appId = appId;
        this.creator = new ModifyCreator_1.ModifyCreator(this.bridges, this.appId);
        this.updater = new ModifyUpdater_1.ModifyUpdater(this.bridges, this.appId);
        this.extender = new ModifyExtender_1.ModifyExtender(this.bridges, this.appId);
        this.notifier = new Notifier_1.Notifier(this.bridges.getUserBridge(), this.bridges.getMessageBridge(), this.appId);
        this.uiController = new UIController_1.UIController(this.appId, this.bridges);
    }
    getCreator() {
        return this.creator;
    }
    getUpdater() {
        return this.updater;
    }
    getExtender() {
        return this.extender;
    }
    getNotifier() {
        return this.notifier;
    }
    getUiController() {
        return this.uiController;
    }
}
exports.Modify = Modify;

//# sourceMappingURL=Modify.js.map
