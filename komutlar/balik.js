const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Balık Tuttun Balığı Çekiyorsun..').then(message => {
   var baliklar = ['**(Normal)** Sazan Tuttun! 🐟' ,'**(Efsanevi)** Sazan Tuttun! 🐟' ,'**(Efsanevi)** Köpek Balığı Tuttun 🐟' ,'**(Efsanevi)** Uskumru Tuttun! 🐟' ,'**(Normal)** Uskumru Tuttun! 🐟' ,'**(Normal)** Mezgit Tuttun! 🐟' ,'**(Efsanevi)** Mezgit Tuttun! 🐟' ,'**(Efsanevi)** Japon Balığı Tuttun ! 🐟' ,'**(Normal)** Japon Balığı Tuttun ! 🐟' ,'**(Normal)** Hamsi Tuttun! 🐟' ,'**(Efsanevi)** Hamsi Tuttun! 🐟' ,'**(Normal)** Levrek Tuttun! 🐟' ,'**(Efsanevi)** Levrek Tuttun! 🐟' ,'Hiçbirşey Tutamadın Maalesef! 🗑' ,'**(Normal)** Alabalık Tuttun! 🐟' ,'**(Efsanevi)** Alabalık Tuttun! 🐟' ,'Maalesef Balık Oltadan Kaçtı! 🗑' ,'**(Efsanevi)** İstavrit Tuttun! 🐟','**(Normal)** İstavrit Tuttun! 🐟'];
      var balik = baliklar[Math.floor(Math.random() * baliklar.length)];
            message.edit(`${balik}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['balık', 'balıktut', 'balık-tut'],
  permLevel: 0
};

exports.help = {
  name: 'balıktut',
  description: 'Balık Tutarsın.',
  usage: 'balıktut'
};