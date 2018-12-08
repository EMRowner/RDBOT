const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   var cevaplar = ['**Zihin paraşüt gibidir açık değilse işe yaramaz!**','**Hayat bir bisiklete binmek gibidir. Dengenizi korumak için hareket etmeye devam etmelisiniz.**','**Bütün kurallara uyursanız tüm eğlenceyi kaçırırsınız.**'**Dalgaları durduramazsın, ama sörf yapmayı öğrenebilirsin.**' ];
   var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
   message.reply(cevap);
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [''],
 permLevel: 0 ,
};

exports.help = {
 name: 'özlüsöz',
 description: '',
 usage: 'özlüsöz'
};
