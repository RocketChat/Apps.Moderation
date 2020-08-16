import { IUploadRead } from '../../definition/accessors';
import { IUpload } from '../../definition/uploads';
import { IUploadBridge } from '../bridges/IUploadBridge';
export declare class UploadRead implements IUploadRead {
    private readonly uploadBridge;
    private readonly appId;
    constructor(uploadBridge: IUploadBridge, appId: string);
    getById(id: string): Promise<IUpload>;
    getBuffer(upload: IUpload): Promise<Buffer>;
    getBufferById(id: string): Promise<Buffer>;
}
