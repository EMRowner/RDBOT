const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   var cevaplar = ['Dalgaları durduramazsın, ama sörf yapmayı öğrenebilirsin.','Zihin paraşüt gibidir. Açık değilse işe yaramaz.','Hayat bir bisiklete binmek gibidir. Dengenizi korumak için hareket etmeye devam etmelisiniz.' ];
   var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
   message.reply(cevap);
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['çaypişir', 'caykaynat','çaykaynat'],
 permLevel: 0 ,
};

exports.help = {
 name: 'çay',
 description: 'çay gifi gönderir',
 usage: 'cilgin'
