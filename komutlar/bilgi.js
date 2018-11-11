const Discord = require('discord.js');


exports.run = function(client, message, args) {

    var öneri = args.slice(0).join(' ');
    var guildID = "500778635658133516"; //Buraya mesajın hangi sunucuya gelmesini istiyorsan oraya sunucunun ID sini yaz
    var channelID = "505682797592051722"; //Buraya mesajın hangi kanala gelmesini istiyorsan oraya kanalın ID sini yaz
    
    if (!öneri){
        return message.reply("Bir mesaj belirtin! Doğru kullanım: **+bildiri <mesaj>**"); 
    } else {
        
        var embed = new Discord.RichEmbed()
            .setTimestamp()
            .addField("Eylem:", "Bildiri")
            .addField("Kullanıcı:", message.author.tag)
            .addField("ID", message.author.id)
            .addField("Öneri/Hata", öneri)
        
        client.guilds.get(guildID).channels.get(channelID).send(embed);
        message.channel.send("Bildiriniz alınmıştır! Teşekkür ederiz.");
    };


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öner", "öneri",], 
  permLevel: 0 
};

exports.help = {
  name: 'bildiri', 
  description: "Bot hakkındaki önerilerinizi ya da bulduğunuz hataları bot sahibine ulaştırır.", 
  usage: 'bildiri <mesaj>' 
};

//Saygılarımla (DJ Botçu)