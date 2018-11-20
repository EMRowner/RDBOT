exports.run = async (bot, message, args) => {
 var request = require('request');
  var Discord = require('discord.js')
 

request('https://api.eggsybot.xyz/ataturk', function (error, response, body) {
    if (error) return console.log('Hata:', error); 
    else if (!error) { 
      var info = JSON.parse(body)
      let embed = new Discord.RichEmbed()
       .setDescription('Atam ❤')
       .setImage(info.link)
       .setColor(0x1D82B6)
        
        message.channel.send(embed); 
    }
});
  
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['atatürk-2'],
  permLevel: 0
};

exports.help = {
  name: 'atatürk-2',
  description: 'atatürk-2',
  usage: 'atatürk-2'
};
