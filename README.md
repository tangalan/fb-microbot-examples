# QR Bot

A simple [Workplace By Facebook](https://work.fb.com) bot that, upon being @mentioned in a comment, will comment on the post with a QR code for it's perma link

## Usecase

Office Printouts linking to workplace, driving attention to important topics.

## Installation


Clone the repository via git

```git clone georgzoeller/fb-qr-microbot```


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






