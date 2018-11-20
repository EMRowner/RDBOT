const Discord = require('discord.js');

exports.run = (client, message, args, member) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.channel.send(':x: Duyuruya yazmak için bir şeyler yazınız.');
  let incidentchannel = message.guild.channels.find(`name`, "duyurular");
    if(!incidentchannel) return message.channel.send(":x: **duyurular** kanalını bulamıyorum.");

    incidentchannel.send(`@●ER● BOT | **Duyuru**\n\n- ${mesaj}`);
  message.channel.send(':white_check_mark: Duyuru başarıyla yapıldı.')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuryap', 'duyur'],
  permLevel: 2
};

exports.help = {
  name: 'duyuru',
  description: 'Duyuru',
  usage: 'duyuru <mesaj>'
};
