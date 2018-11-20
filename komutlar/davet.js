const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
    const pingozel = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('')
    .addField("» Linkler", `[Bot Davet Linki](  https://discordapp.com/oauth2/authorize?client_id=506371036963667979&scope=bot&permissions=2146958847  )` + "**\n**"+`[Destek Sunucusu](  https://discord.gg/9M4v4yR  )` + "**\n**"+`[Discord Bots Linki(Onay Bekliyor)](  https://discordbots.org/bot/506371036963667979  )` + "**\n**"+`[Botumuzun Sitesi](  https://alierdem200670.wixsite.com/idbot  )`, false)
    .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL);
    return message.channel.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['invite'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun davet linkini gönderir.',
  usage: 'davet'
};
