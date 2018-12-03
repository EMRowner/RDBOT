const Discord = require('discord.js');

exports.run = async (client, msg, args) => {
   let radyo = args.slice(0).join(' ');
      if (!radyo[0]) {
       msg.channel.send(":x: | Bir Radyo Seçin: **kralpop** / **powerturk**") 
  }
   
       if (radyo === 'kralpop') {
         const embed = new Discord.RichEmbed()
      .setDescription(`Kral Pop Adlı Radyo \n\n**http://www.canli-radyo.biz/2013/09/kral-pop.html**`)
      .setImage('http://static.radio.net/images/broadcasts/d3/77/12958/c175.png')
       .setColor('RANDOM')
      .setFooter(`Kral Pop | Radyo`, client.user.avatarURL)
    return msg.channel.send(embed);
       }
  if (radyo === 'powerturk') {
         const embed = new Discord.RichEmbed()
      .setDescription(`PowerTurk Adlı Radyo \n\n**http://www.canliradyodinle.fm/power-turk-fm-dinle.html**`)
      .setImage('http://www.canliradyodinle.fm/wp-content/uploads/power-turk-dinle.png')
      .setColor('RANDOM')
      .setFooter(`PowerTurk | Radyo`, client.user.avatarURL)
    return msg.channel.send(embed);
       }
   }   


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'radyo',
  description: 'Radyo',
  usage: 'radyo'
};
