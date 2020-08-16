import { IUserBuilder } from '../../definition/accessors';
import { RocketChatAssociationModel } from '../../definition/metadata';
import { IUser, IUserEmail } from '../../definition/users';
export declare class UserBuilder implements IUserBuilder {
    kind: RocketChatAssociationModel.USER;
    private user;
    constructor(user?: Partial<IUser>);
    setData(data: Partial<IUser>): IUserBuilder;
    setEmails(emails: Array<IUserEmail>): IUserBuilder;
    getEmails(): Array<IUserEmail>;
    setDisplayName(name: string): IUserBuilder;
    getDisplayName(): string;
    setUsername(username: string): IUserBuilder;
    getUsername(): string;
    setRoles(roles: Array<string>): IUserBuilder;
    getRoles(): Array<string>;
    getUser(): Partial<IUser>;
}
