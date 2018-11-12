const Discord = require("discord.js");
var Jimp = require('jimp');

exports.run = async (client, message, args) => {
    var user = message.mentions.users.first() || message.author;
    if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));

    Jimp.read(user.avatarURL, (err, image) => {
        image.resize(310, 325)
        image.greyscale()
        image.gaussian(3)
        Jimp.read("https://cdn.glitch.com/b18a2fa6-68cb-49d5-9818-64c50dd0fdab%2FPNGPIX-COM-Crosshair-PNG-Transparent-Image.png?1529363625811", (err, avatar) => {
            avatar.resize(310, 325)
            image.composite(avatar, 2, 0).write(`./img/snip/${client.user.id}-${user.id}.png`);
            setTimeout(function() {
                message.channel.send(new Discord.Attachment(`./img/snip/${client.user.id}-${user.id}.png`));
            }, 1000);
    });

});
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'sniper',
    description: 'Profilinize (Sniper) efekti ekler.',
    usage: 'sniper'
  };

