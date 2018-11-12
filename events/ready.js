const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  client.user.setStatus("dnd");
   var oyun = [
        " ❯ +yardım | +davet",
     " ❯ +sniper",
     "❯ +öneri",
     "❯ +kullanıcıbilgim ",
     "❯ Otorol Aktif!",
        "❯  +yardım",
        "❯ +çay",
        "❯ Yeni komutlar gelicek ",
        "❯ 7/24 AKTİF",
      "❯ +davet",
        "❯ Yenilikler Yakında... +sniper"
    ]

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.twitch.tv/babayoutube");
        }, 2 * 2500);
}