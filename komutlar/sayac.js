 const Discord = require('discord.js')
  const fs = require('fs')
  const ayarlar = require('../ayarlar.json')

  exports.run = async (client, message, args) => {
      if(!args[0]) {
          const embed = new Discord.RichEmbed()
              .setDescription(`Lütfen Sayaç Kanalı Açın Ve Rakam Yazın!`)
    .setColor("#36393F")
              .setTimestamp()
          message.channel.send({embed})
          return
      }

      let profil = JSON.parse(fs.readFileSync("./sayac.json", "utf8"));

      if(args[0] === "sıfırla") {
          if(!profil[message.guild.id]) {
              const embed = new Discord.RichEmbed()
                  .setDescription(`Ayarlanmayan şeyi sıfırlayamazsın!`)
    .setColor("#36393F")
                  .setTimestamp()
              message.channel.send({embed})
              return
          }
          delete profil[message.guild.id].sayi
          delete profil[message.guild.id]
          fs.writeFile("./sayac.json", JSON.stringify(profil), (err) => {
              console.log(err)
          })
          const embed = new Discord.RichEmbed()
              .setDescription(`Sayaç başarıyla sıfırlandı!`)
    .setColor("#36393F")
              .setTimestamp()
          message.channel.send({embed})
          return
      }
  if(isNaN(args[0])) {
          const embed = new Discord.RichEmbed()
              .setDescription(`Lütfen bir sayı yazın!`)
    .setColor("#36393F")
              .setTimestamp()
          message.channel.send({embed})
          return
      }

      if(args[0] <= message.guild.members.size) {
          const embed = new Discord.RichEmbed()
              .setDescription(`Lütfen sunucu sayısından [${message.guild.members.size}] daha yüksek bir değer girin!`)
    .setColor("#36393F")
              .setTimestamp()
          message.channel.send({embed})
          return
      }

      if(!profil[message.guild.id]){
          profil[message.guild.id] = {
              sayi: args[0]
          };
      }

      profil[message.guild.id].sayi = args[0]

      fs.writeFile("./sayac.json", JSON.stringify(profil), (err) => {
          console.log(err)
      })

      const embed = new Discord.RichEmbed()
          .setDescription(`Sayaç başarıyla ${args[0]} olarak ayarlandı!`)
    .setColor("#36393F")
          .setTimestamp()
      message.channel.send({embed})
  }

  exports.conf = {
      enabled: true,
      guildOnly: true,
      aliases: ['sayacayarla', 'sayac', 'sayaç'],
      permLevel: 2
  }

  exports.help = {
      name: 'sayaç',
      description: 'Sayacı ayarlar.',
      usage: 'sayaç [sayı/sıfırla]'
  }
