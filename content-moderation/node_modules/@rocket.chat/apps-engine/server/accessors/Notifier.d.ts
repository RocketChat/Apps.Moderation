import { IMessageBuilder, INotifier } from '../../definition/accessors';
import { IMessage } from '../../definition/messages';
import { IRoom } from '../../definition/rooms';
import { IUser } from '../../definition/users';
import { IMessageBridge, IUserBridge } from '../bridges';
export declare class Notifier implements INotifier {
    private readonly userBridge;
    private readonly msgBridge;
    private readonly appId;
    constructor(userBridge: IUserBridge, msgBridge: IMessageBridge, appId: string);
    notifyUser(user: IUser, message: IMessage): Promise<void>;
    notifyRoom(room: IRoom, message: IMessage): Promise<void>;
    getMessageBuilder(): IMessageBuilder;
}
