const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

  const embedeğlence2 = new Discord.RichEmbed()
  .setColor("#FFB900")
  .addField("ƦƛƓЄ ƖMƤƛƦƛƬƠƦԼƲğƲ BOT • Level Sistemi", `▫️ **| **Kısa Bilgi :** Bu özelliklle sunucunuzda ödüllendirmeler yapabilirsiniz \n▫️ **| r!profil** Bu komutla profilinizi görebilirsiniz!. `)
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
  aliases: ['atatürk-yardım'],
  permLevel: 0
};

exports.help = {
  name: 'atatürk-yardım',
  description: 'atatürk-yardım',
  usage: 'atatürk-yardım'
};
