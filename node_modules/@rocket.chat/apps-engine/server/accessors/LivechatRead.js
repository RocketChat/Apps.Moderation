"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LivechatRead {
    constructor(livechatBridge, appId) {
        this.livechatBridge = livechatBridge;
        this.appId = appId;
    }
    /**
     * @deprecated please use the `isOnlineAsync` method instead.
     * In the next major, this method will be `async`
     */
    isOnline(departmentId) {
        console.warn('The `LivechatRead.isOnline` method is deprecated and won\'t behave as intended. Please use `LivechatRead.isOnlineAsync` instead');
        return this.livechatBridge.isOnline(departmentId);
    }
    isOnlineAsync(departmentId) {
        return this.livechatBridge.isOnlineAsync(departmentId);
    }
    getLivechatRooms(visitor, departmentId) {
        return this.livechatBridge.findRooms(visitor, departmentId, this.appId);
    }
    /**
     * @deprecated This method does not adhere to the conversion practices applied
     * elsewhere in the Apps-Engine and will be removed in the next major version.
     * Prefer the alternative methods to fetch visitors.
     */
    getLivechatVisitors(query) {
        return this.livechatBridge.findVisitors(query, this.appId);
    }
    getLivechatVisitorById(id) {
        return this.livechatBridge.findVisitorById(id, this.appId);
    }
    getLivechatVisitorByEmail(email) {
        return this.livechatBridge.findVisitorByEmail(email, this.appId);
    }
    getLivechatVisitorByToken(token) {
        return this.livechatBridge.findVisitorByToken(token, this.appId);
    }
    getLivechatVisitorByPhoneNumber(phoneNumber) {
        return this.livechatBridge.findVisitorByPhoneNumber(phoneNumber, this.appId);
    }
    getLivechatDepartmentByIdOrName(value) {
        return this.livechatBridge.findDepartmentByIdOrName(value, this.appId);
    }
}
exports.LivechatRead = LivechatRead;

//# sourceMappingURL=LivechatRead.js.map
