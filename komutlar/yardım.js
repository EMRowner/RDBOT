const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
  let pages = ['[❯ Tüm Komutlar]\n\n[kn!yardım](https://discord.gg/CsHSKFR)  •  Botun tüm komutlarını gösterir.\n[kn!istatistik](https://discord.gg/CsHSKFR)  • Botun istatistiklerini gönderir.\n[kn!avatar](https://discord.gg/CsHSKFR) •  Kendi avatarınızı veya etiketlediğiniz kişinin avatarını verir.\n[kn!sunucubilgi](https://discord.gg/CsHSKFR)  •  Sunucu hakkında bilgi verir.\n[kn!temizle](https://discord.gg/CsHSKFR) • Belirttiğiniz kadar mesajı siler.\n[kn!bilgi](https://discord.gg/CsHSKFR) • Bot hakkında bilgiler verir. \n[kn!canlıdestek](https://discord.gg/CsHSKFR) • Botun Sahibiyle Canlı Olarak Konuşursunuz.',  '[kn!cowsay](https://discord.gg/CsHSKFR) • Bot Yazdıgınız Şeyi Cowsayla Yazar'];
  let page = 1; // Sayfa 1
 
 
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(message.guild.name,bot.user.avatarURL)
  .setFooter(`© 2018 Kronos | Sayfa ${page} / ${pages.length}`,bot.user.avatarURL)
  .setThumbnail(bot.user.avatarURL)
  .setDescription(pages[page-1])
  .setAuthor(message.guild.name,bot.user.avatarURL)
message.channel.send(embed).then(msg => {
 
    msg.react('⬅').then(r => {
      msg.react('➡')
 
      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
 
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });
 
      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`© 2018 Kronos | Sayfa ${page} / ${pages.length}`,bot.user.avatarURL)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`© 2018 Kronos | Sayfa ${page} / ${pages.length}`,bot.user.avatarURL)
        msg.edit(embed)
      })
 
    })
  })
}
 
module.exports.help = {
  name: "yardım"
}
