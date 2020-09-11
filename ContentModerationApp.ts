import {
    IConfigurationExtend,
    IEnvironmentRead,
    IHttp,
    ILogger,
    IPersistence,
    IRead,
} from '@rocket.chat/apps-engine/definition/accessors';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { IMessage, IPreMessageSentPrevent } from '@rocket.chat/apps-engine/definition/messages';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';
import { SettingType } from '@rocket.chat/apps-engine/definition/settings';

export class ContentModerationApp extends App implements IPreMessageSentPrevent {
    public customLogger: ILogger;
    constructor(info: IAppInfo, logger: ILogger) {
        super(info, logger);
        this.customLogger = logger;
    }

    public async executePreMessageSentPrevent(message: IMessage, read: IRead, http: IHttp, persistence: IPersistence): Promise<boolean> {
        // Grabbing image URLs..
        const serverUrl = await read.getEnvironmentReader().getSettings().getById('Content_Moderation_App');
        // const publicUrl = await read.getEnvironmentReader().getSettings().getById('Rocket Chat host URL');
        // const rcHostUrl: string = publicUrl.value;
        const rcHostUrl = await read.getEnvironmentReader().getServerSettings().getValueById('SITE_URL');
        const contentModerationAppUrl: string = serverUrl.value;

        const imageUrl = (message.attachments || []).map((a) => rcHostUrl + a.imageUrl);

        if (imageUrl.length > 0) {
            const json = JSON.stringify({url: imageUrl});
            this.customLogger.log(json);

            const options = {
                headers: {
                    'content-type': 'application/json',
                },
                content: json,
            };
            const response = await http.post(contentModerationAppUrl, options);
            this.customLogger.log(response.content);

            const imageObj = JSON.parse(response.content || '');

            if (imageObj.classification === 'nsfw') {
            read.getNotifier().notifyUser(message.sender, {
                room: message.room,
                sender: message.sender,
                text: 'Your message has been blocked by *Photos & Links Filter* \nIf you think this is a false positive ask your administrator to turn off the app.',
                alias: 'Photos & Links Filter',
                emoji: ':no_entry:',
            });
            return true;
            }
        }

        // Grabbing links from text messages..
        const text = (message.text || '');
        const matches = text.match(/\bhttps?:\/\/\S+/gi);

        if (matches !== null) {
            const json = JSON.stringify({url: matches});
            this.customLogger.log(json);

            const options = {
                headers: {
                    'content-type': 'application/json',
                },
                content: json,
            };

            const response = await http.post(contentModerationAppUrl, options);
            this.customLogger.log(response.content);

            const imageObj = JSON.parse(response.content || '');

            if (imageObj.classification === 'nsfw') {
            read.getNotifier().notifyUser(message.sender, {
                room: message.room,
                sender: message.sender,
                text: 'Your message has been blocked by *Photos & Links Filter*. \nIf you think this is a false positive ask your administrator to turn off the app.',
                alias: 'Photos & Links Filter',
                emoji: ':no_entry:',
            });
            return true;
            }
        }
        return false;
      }
      protected async extendConfiguration(configuration: IConfigurationExtend, environmentRead: IEnvironmentRead): Promise<void> {
        await configuration.settings.provideSetting({
<<<<<<< HEAD
            id: 'Rocket Chat host URL',
            type: SettingType.STRING,
            packageValue: '',
            required: true,
            public: false,
            i18nLabel: 'Rocket Chat host URL',
            i18nDescription: 'Provide the URL where Rocket Chat is hosted ',
            i18nPlaceholder: 'http://rocket-chat:3000',
        });
        await configuration.settings.provideSetting({
=======
>>>>>>> 555c509c782f5d2dcbe8d71696b00ba68f37b7ed
            id: 'Content_Moderation_App',
            type: SettingType.STRING,
            packageValue: '',
            required: true,
            public: false,
            i18nLabel: 'Content Moderation App Host URL',
            i18nDescription: 'Provide the URL where the Flask App is hosted. For stepwise process please follow: https://github.com/RocketChat/Apps.Moderation/blob/master/README.md#configuration ',
            i18nPlaceholder: 'http://moderation-api:5000/predict',
        });
    }
}
