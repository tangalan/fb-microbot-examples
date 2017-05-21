// Generated by CoffeeScript 2.0.0-beta2
(function() {
  var MicroBot, bot, config, crypto, fs, hash, qr;

  MicroBot = require('fb-microbot-base');

  config = {
    name: 'QR ot',
    graphVersion: '2.8',
    staticPath: 'www/'
  };

  fs = require('fs');

  qr = require('qr-image');

  crypto = require('crypto');

  hash = function(x) {
    return crypto.createHash('sha1').update(x, 'utf8').digest('hex');
  };

  bot = new MicroBot(config).subscribe([
    {
      type: 'page',
      fields: 'mention'
    }
  ]).addEventFilter(new MicroBot.Filters.MentionEventFilter('mention', {
    verb: 'add'
  }));

  bot.on('mention', async function(mention) {
    var error, filename, link, output, permalink, qrCode;
    try {
      permalink = (await bot.send(bot.graph.post.getPermalink(mention.post_id)));
      filename = hash(permalink + '.png');
      link = `${bot.host}/${filename}`;
      qrCode = (await qr.image(permalink, {
        type: 'png'
      }));
      output = fs.createWriteStream(`www/${filename}`);
      qrCode.pipe(output);
      return (await bot.send(bot.graph.comment.add(mention.post_id, {
        message: `Hey @[${mention.sender_id}], here is your QR code linking to this post:\n`,
        attachment_url: link
      })));
    } catch (error1) {
      error = error1;
      console.error(error);
      return console.trace();
    }
  });

  bot.on('started', function() {
    return console.log('started');
  });

  bot.listen();

}).call(this);

//# sourceMappingURL=index.js.map
