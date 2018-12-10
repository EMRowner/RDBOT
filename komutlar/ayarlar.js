const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

  const embedeğlence2 = new Discord.RichEmbed()
  .setThumbnail("https://cdn.discordapp.com/attachments/519497714799476749/519867342063271979/download.png")
  .setColor("#FFB900")
  .addField("ƝЄƠƝ  ƖMƤƛƦƛƬƠƦԼƲğƲ BOT • Ayarlama Komutları", `▫️ **|  r!sayaç:** Sayaç ayarlarsınız. \n▫️ **| r!mod-log-ayarla** Log ayarlarsınız. \n▫️ **| r!otorol** Otorolayarlarsınız.\n▫️ **| Otorol** Otorol ayarlarsınız \n▫️ **| r!küfür-engelleme** Küfür engelini sunucunuzda açıp kapatırsınız \n▫️ **| r!gkanal** Resimli gelen-giden'nin kanalını seçersiniz.`)
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
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'ayarlar',
  description: 'Ayarlar',
  usage: 'ayarlar'
};
