const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

  const embedeğlence2 = new Discord.RichEmbed()
  .setColor("#FFB900")
  .addField("ƝЄƠƝ  ƖMƤƛƦƛƬƠƦԼƲğƲ BOT • Ana Komutları", `▫️ **|  r!bildiri** Bot hakkında önerinizi yapımcıya yollar \n▫️ **| r!davet** Botun davet linklerini gösterir \n▫️ **| r!istatistik** Botun istatistiğini gösterir \n▫️ **| r!kullanıcıbilgim **Komutu kullanan kişinin bilgilerini gösterir \n▫️ **| r!reboot **[Yapımcı Komutu] \n▫️ **| r!sunucubilgi **Sunucu hakkında bilgiri verir \n▫️ **| r!afk** Afk olursunuz \n▫️ **| r!duyuru** Bota duyuru yaptırırsınız \n▫️ **| r!ailemiz** Ailemizi gösterir.`)
  .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedeğlence2);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['anakomut'],
  permLevel: 0
};

exports.help = {
  name: 'anakomut',
  description: 'anakomut',
  usage: 'anakomut'
};
