const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {

  client.user.setStatus("dnd");
   var oyun = [
        " ❯ r!yardım | r!davet",
     " ❯ r!sniper",
     "❯ r!öneri",
     "❯ r!mcbaşarım ",
     `❯ 👥${client.users.size} Kullanıcı!`,
        "❯  r!sigara",
        "❯ r!çay",
        "❯ Yeni komutlar gelicek ",
        "❯ 🔥7/24 AKTİF🔥",
      "❯ r!wasted",
        `❯ 🌍${client.guilds.size} Sunucuda hizmet!`,
    ]

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.twitch.tv/babayoutube");
        }, 2 * 2500);
}
