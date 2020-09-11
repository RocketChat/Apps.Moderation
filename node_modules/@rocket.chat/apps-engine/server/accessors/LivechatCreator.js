"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LivechatCreator {
    constructor(bridges, appId) {
        this.bridges = bridges;
        this.appId = appId;
    }
    createRoom(visitor, agent) {
        return this.bridges.getLivechatBridge().createRoom(visitor, agent, this.appId);
    }
    createVisitor(visitor) {
        return this.bridges.getLivechatBridge().createVisitor(visitor, this.appId);
    }
    createToken() {
        return (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
    }
}
exports.LivechatCreator = LivechatCreator;

//# sourceMappingURL=LivechatCreator.js.map
