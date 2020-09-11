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
            console.log('****** ' + imageUrl + '  ******');
            const json = JSON.stringify({url: imageUrl});
            this.customLogger.log(json);
            // console.log(json);

            const options = {
                headers: {
                    'content-type': 'application/json',
                },
                content: json,
            };
            const response = await http.post(contentModerationAppUrl, options);
            console.log(response.content );

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
            console.log('****** ' + json + '****** ');
            const options = {
                headers: {
                    'content-type': 'application/json',
                },
                content: json,
            };
            const response = await http.post(contentModerationAppUrl, options);
            console.log(response.content);
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
            id: 'Content_Moderation_App',
            type: SettingType.STRING,
            packageValue: '',
            required: true,
            public: false,
            i18nLabel: 'Content Moderation App Host URL',
            i18nDescription: 'Provide the URL where the Flask is hosted',
            i18nPlaceholder: 'http://moderation-api:5000/predict',
        });
    }
}
