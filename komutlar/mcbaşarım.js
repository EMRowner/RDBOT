lient.on("message", async message => {
    if (message.content.toLowerCase() === prefix + "mcbaşarım") {
 let basarim = args.slice(0).join(' ');
 let member = message.mentions.members.first();
 let basarim1 = 'https://www.minecraftskinstealer.com/achievement/a.php?i=3&h=Basarim%20kazanildi!%21&t=' + basarim
 if (basarim.length < 1) return message.channel.send(':no_entry: Ne yazmamı istersin, (Boşluk koymayınız + ekleyeniz.)');
 if (basarim == member) {
    message.reply('Boş başarım yollayamam.')
 } else {
 const mcbasarim = new Discord.RichEmbed()
   .setColor('0x8e44ad')
   .setImage(basarim1)
 message.channel.send(mcbasarim);
 }
}
});
