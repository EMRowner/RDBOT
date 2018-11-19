const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

  const embedeğlence2 = new Discord.RichEmbed()
  .setColor("#FFB900")
  .addField("●ER● BOT • Resimefekt Komutları", `▫️ **|  r!wasted:** Profilinize wasted efekti ekler \n▫️ **| r!sniper **Profilinize sniper efekti ekler \n▫️ **| r!kralol **Kralolma GIF i gönderir**  .`)
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
  aliases: ['resimefekt'],
  permLevel: 0
};

exports.help = {
  name: 'resimefekt',
  description: 'resimefekt',
  usage: 'resimefekt'
};
