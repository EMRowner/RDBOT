const Discord = require('discord.js');

exports.run = (client, message, args) => {
  message.channel.send(":x: Bu Komutu Sadece Yapımcım Kullanabilir!");
  if (message.author.id !== "352722884197744640") return //Buraya ID ni yaz
    message.channel.send(`Bot yeniden başlatılıyor...`).then(msg => {
    console.log(`BOT: Bot yeniden başlatılıyor...`);
    process.exit(0);
        })
  };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: 'Botu yeniden başlatır.',
  usage: 'reboot'
};
