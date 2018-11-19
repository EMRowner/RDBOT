const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

  const embedeğlence2 = new Discord.RichEmbed()
  .setColor("#FFB900")
  .addField("●ER● BOT • Eğlence Komutları", `▫️ **|  r!8ball ** Sihirli 8ball sorularınızı cevaplar \n▫️ **| r!sigara **sigara yakar \n▫️ **| r!balıktut **Balık tutar \n▫️ **| r!çay Rastgele çay GIF i atar \n▫️ **|** r!fakemesaj Etiketlediğiniz kişinin fake mesajını atar ** \n▫️ **|** r!hesapla Belirtilen işlemi yapar \n▫️ **| r!mcbaşarım Yazılan şeyi Minecraft başarımı yapar ** \n▫️ **| r!reklamlar Reklamlar GIF i atar \n▫️ **| r!slots** Slot oyunu oynatır ** \n▫️ **| r!yaz **İstediğiniz şeyi bota yazdırır ** \n▫️ **| r!espri** Espri yapar   .`)
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
  aliases: ['eğlence'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Eğlence',
  usage: 'eğlence'
};
