// Generated by CoffeeScript 2.0.0-beta1
(function() {
  var MicroBot, bot, config, fs, qr;

  MicroBot = require('fb-microbot-base');

  config = {
    name: 'QRBot',
    graphVersion: '2.8',
    staticPath: 'www/'
  };

  fs = require('fs');

  qr = require('qr-image');

  bot = new MicroBot(config).subscribe([
    {
      type: 'page',
      fields: 'mention,messages'
    }
  ]);

  bot.on('data', async function(payload) {
    
    //WorkChat = bot.graph.chat;

    console.log(JSON.stringify(payload));
    return;
    //await bot.send WorkChat.sendTextMessage(JSON.stringify(payload));
  
  });

  bot.on('started', function() {
    return console.log('started');
  });

  bot.listen();

}).call(this);

//# sourceMappingURL=index.js.map
