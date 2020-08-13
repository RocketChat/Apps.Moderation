import { IEnvironmentRead, ILivechatRead, IMessageRead, INotifier, IPersistenceRead, IRead, IRoomRead, IUploadRead, IUserRead } from '../../definition/accessors';
export declare class Reader implements IRead {
    private env;
    private message;
    private persist;
    private room;
    private user;
    private noti;
    private livechat;
    private upload;
    constructor(env: IEnvironmentRead, message: IMessageRead, persist: IPersistenceRead, room: IRoomRead, user: IUserRead, noti: INotifier, livechat: ILivechatRead, upload: IUploadRead);
    getEnvironmentReader(): IEnvironmentRead;
    getMessageReader(): IMessageRead;
    getPersistenceReader(): IPersistenceRead;
    getRoomReader(): IRoomRead;
    getUserReader(): IUserRead;
    getNotifier(): INotifier;
    getLivechatReader(): ILivechatRead;
    getUploadReader(): IUploadRead;
}
