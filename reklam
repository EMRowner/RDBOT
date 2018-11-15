const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('REK-LAM-LAR')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
    .setURL('https://discord.gg/R76Tyf7')
        .setImage(`https://thumbs.gfycat.com/BitesizedVengefulBarebirdbat-small.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "eğlence"
};

exports.help = {
  name: 'reklamlar',
  description: 'reklamlar',
  usage: 'reklamlar'
};
