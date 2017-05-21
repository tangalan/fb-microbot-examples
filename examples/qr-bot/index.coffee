# --------------------------------------------------------------------------------------------------------
#  Example for a workplace / messenger bot using the MicroBot template
#  This bot, upon being @mentioned in a comment, will respond with a QR code for the parent posts permalink
# --------------------------------------------------------------------------------------------------------

MicroBot = require 'fb-microbot-base'                                          # -- Use microbot template
config   = {name: 'QRBot', graphVersion: '2.8', staticPath: 'www/'}            # -- Set bot config to graph api 2.8,
                                                                               #    serving static files from www/
fs        = require 'fs'
qr        = require 'qr-image'
crypto    = require 'crypto'

hash = (x) -> crypto.createHash('sha1').update(x, 'utf8').digest('hex')               # -- Hash function for filenames

bot = new MicroBot config
  .subscribe [ {type: 'page', fields: 'mention'}]                                     # -- Subscribe to mention webhook
  .addEventFilter new MicroBot.Filters.MentionEventFilter('mention', verb: 'add')     # -- Fire a 'mention' adds


bot.on 'mention', (mention) ->                                                        # -- Handle 'mention'
  try
    permalink = await bot.send bot.graph.post.getPermalink mention.post_id
    filename = hash permalink + '.png'
    link = "#{bot.host}/qr/#{filename}"
    qrCode = await qr.image(permalink, {type: 'png'})
    output = fs.createWriteStream "www/qr/#{filename}"
    qrCode.pipe output

    await bot.send bot.graph.comment.add mention.post_id,
      message: "Hey @[#{mention.sender_id}], here is your QR code linking to this post:\n",
      attachment_url: link

  catch error
    console.error error
    console.trace()

bot.on 'started', ->                                                           # -- Fired when the bot has started up
  console.log 'started'

bot.listen()                                                                   # -- start the bot