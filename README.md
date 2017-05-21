# fb-microbot-examples

Repository for example [Workplace By Facebook](https://work.fb.com) bots built using the [fb-microbot-base](https://github.com/georgzoeller/fb-microbot-base) framework.


## 1. QR Bot

```
examples/qr-bot
```

A simple bot which, upon being @mentioned in a comment, will comment on the post with a QR code for it's permalink

### Why?

Office Printouts linking to workplace, driving attention to important topics in email-less environments, etc..


## Usage 


[1](https://raw.githubusercontent.com/georgzoeller/fb-microbot-examples/master/docs/img/qr_bot_1.png)

[2](https://raw.githubusercontent.com/georgzoeller/fb-microbot-examples/master/docs/img/qr_bot_2.png)


### Installation

Clone the repository via git

```
git clone georgzoeller/fb-qr-microbot
```

The following environment variables need to be set or added to a file called ```.env.local``` in the apps root director

The values for these fields can be found in the integrations dashboard

```
FB_PAGE_ACCESS_TOKEN=
FB_APP_ID=
FB_APP_SECRET=
FB_WEBHOOK_HOST=https://my-domain-name
FB_WEBHOOK_PORT= 
FB_WEBHOOK_VERIFY_TOKEN=
```

On heroku, not setting FB_WEBHOOK_PORT will cause the bot to auto acquire $PORT



