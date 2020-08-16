"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class UserUpdater {
    constructor(bridges, appId) {
        this.bridges = bridges;
        this.appId = appId;
    }
    updateStatusText(user, statusText) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.bridges.getUserBridge().update(user, { statusText }, this.appId);
        });
    }
    updateBio(user, bio) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.bridges.getUserBridge().update(user, { bio }, this.appId);
        });
    }
    updateCustomFields(user, customFields) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.bridges.getUserBridge().update(user, { customFields }, this.appId);
        });
    }
}
exports.UserUpdater = UserUpdater;

//# sourceMappingURL=UserUpdater.js.map
