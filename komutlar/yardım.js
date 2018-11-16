const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

  const embedyardim = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .setThumbnail("https://cdn.discordapp.com/attachments/506469375402967060/509039196376399872/RTD_ArkaplanS.PNG")
  .setDescription(`[Bot Davet Linki](  https://discordapp.com/oauth2/authorize?client_id=506420022328164352&scope=bot&permissions=2146958847  ) | ` + `[Destek Sunucusu](  https://discord.gg/dM5Fu4h  ) \n\n**Ping:** ${Math.round(client.ping)}ms!`)
  .setColor("#FFB900")
  .addField("**RTD BOT • Komutlar**", `▫️ **|  +eğlence:** Eğlence komutlarını gösterir. \n▫️ **|   +moderasyon:** Moderasyon komutlarını gösterir. \n▫️ **|  +anakomut:** Temel komutları gösterir. \n▫️ **|  +resimefekt:** Resim Efektleri komutlarını gösterir.`)
  .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
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
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
