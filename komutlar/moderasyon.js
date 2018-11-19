const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

  const embedeğlence2 = new Discord.RichEmbed()
  .setColor("#FFB900")
  .addField("•ER• BOT • Moderasyon Komutları", `▫️ **|  r!ban:** İstediğiniz kişiyi banlar \n▫️ **| r!kick **İstediğiniz kişiyi kickler \n▫️ **| r!kilit **Komutun kullanıldığı kanalı belirttiğiniz süreyle kilitler \n▫️ **| r!sustur **İstediğiniz kişiyi susturur \n▫️ **| r!temizle **Belirlenen miktarı siler (max=50) \n▫️ **| r!unban **İstediğiniz kişinin banını kaldırır \n▫️ **| r!uyar **İstediğiniz kişiyi uyarır**.`)
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
  aliases: ['moderasyon'],
  permLevel: 0
};

exports.help = {
  name: 'moderasyon',
  description: 'Moderasyon',
  usage: 'moderasyon'
};
