"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Reader {
    constructor(env, message, persist, room, user, noti, livechat, upload) {
        this.env = env;
        this.message = message;
        this.persist = persist;
        this.room = room;
        this.user = user;
        this.noti = noti;
        this.livechat = livechat;
        this.upload = upload;
    }
    getEnvironmentReader() {
        return this.env;
    }
    getMessageReader() {
        return this.message;
    }
    getPersistenceReader() {
        return this.persist;
    }
    getRoomReader() {
        return this.room;
    }
    getUserReader() {
        return this.user;
    }
    getNotifier() {
        return this.noti;
    }
    getLivechatReader() {
        return this.livechat;
    }
    getUploadReader() {
        return this.upload;
    }
}
exports.Reader = Reader;

//# sourceMappingURL=Reader.js.map
