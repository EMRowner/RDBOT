const Discord = require("discord.js");

exports.run = async (client, msg) => {

const radio = {
    "number1": "https://20723.live.streamtheworld.com/NUMBER1FM_SC?type=.mp3",
    "powerturk": "https://listen.powerapp.com.tr/powerturk/mpeg/icecast.audio?/;stream.nsv",
    "power": "https://listen.powerapp.com.tr/powerfm/mpeg/icecast.audio?/;stream.nsv",
    "metrofm": "https://17703.live.streamtheworld.com/METRO_FM_SC?type=.mp3",
    "fenomen": "https://listen.radyofenomen.com/fenomen/128/icecast.audio?/;stream.nsv",
    "slowtürk": "https://radyo.dogannet.tv/slowturk",
   "kralpop": "https://www.kralmuzik.com.tr/radyo/kral-pop"
}
            if (!msg.guild.voiceConnection) {

                if (!msg.member.voiceChannel) return msg.channel.send('❌ | Lütfen Bir Odaya Gir  !')

            }

            let args = msg.content.split(" ").slice(1).join(" ").toLowerCase();

      if (!args) return msg.channel.send('❌ | Bir Radyo Seçin : **number1**, **powerturk**, **power**, **metrofm**, **fenomen**, **slowtürk**, **kralpop (bozuk)**')

        if(!radio[args]) return msg.channel.send('❌ | Lütfen Yandaki Radiolardan Birini Seç : **number1**, **powerturk**, **power**, **metrofm**, **fenomen**, **slowtürk**, **kralpop (bozuk)**')

    msg.member.voiceChannel.join().then(connection => {

    require('https').get(radio[args], (res) => {

            connection.playStream(res);

     let embed = new Discord.RichEmbed()
        .setAuthor(args)
        .setColor(0xFF0000)
        .addField("Radyo", args)
        .addField("Bağlantı", radio[args])
        .setFooter(msg.author.tag);

     msg.channel.send("**İyi Dinlemeler**", embed);

          });

  });

}




exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["radio"],
    permLevel: 0
  };
exports.help = {
    name : "radyo",
    usage: "radyo (kanal)",
    description:"RADYO dinlersiniz"
}
