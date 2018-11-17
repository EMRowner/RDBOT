const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

  const embedeğlence2 = new Discord.RichEmbed()
  .setColor("#FFB900")
  .addField("RTD BOT • Eğlence Komutları", `▫️ **|  id+ailemiz:** Ailemizi gösterir \n▫️ **| id+bildiri** Bot hakkında önerinizi yapımcıya yollar \n▫️ **| id+davet** Botun davet linklerini gösterir \n▫️ **| id+istatistik** Botun istatistiğini gösterir \n▫️ **| id+kullanıcıbilgim **Komutu kullanan kişinin bilgilerini gösterir \n▫️ **| id+reboot **[Yapımcı Komutu] \n▫️ **| id+Sunucubilgi **Sunucu hakkında bilgiri verir ** .`)
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
