# Apps.Moderation
**Rocket.Chat App for Content Moderation**<br>
Due to interactions between large communities among different channels in Rocket Chat, there was a need for support of an optional moderation service for offensive content. The service as of now is limited to image & links moderation which means if someone sends an offensive image or link to Rocket Chat app and the app along with server is deployed and configured then the image will be blocked but not videos.
The dockerised moderation service can be deployed to any server easily since all the major Cloud Providers such as AWS, GCP, Azure, IBM Cloud, etc. provides support to Docker.

![ezgif com-optimize](https://user-images.githubusercontent.com/18248623/89886718-babcff80-dbea-11ea-9c19-afee96f9aff1.gif)


## Quick start for code developers
Prerequisites:

* [Rocket.Chat-Deploy](https://docs.rocket.chat/apps-development/getting-started#installation)<br>
`npm install -g @rocket.chat/apps-cli`
> Depending on the installation & machine while running docker commands you may want to use 'sudo' if you encounter any errors.
From Rocket Chat open Administration -> General -> Apps and make sure the following options are enabled:
 - Enable App development mode 
 - Enable the App Framework
 <br>
Open a Command Line and execute the following code

`git clone https://github.com/RocketChat/Apps.Moderation.git`<br>
`cd Apps.Moderation`<br>
`npm install`

You can now make changes and build with

`rc-apps package`

And to deploy it to a local Rocket.Chat server to test the application

`rc-apps deploy -u RC_USER -p RC_PASSWORD --url=http://localhost:3000`

or to update the installation

`rc-apps deploy -f --update -u RC_USER -p RC_PASSWORD --url=http://localhost:3000`
