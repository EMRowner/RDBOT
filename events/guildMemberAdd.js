client.on('guildMemberAdd', member => {
  db.fetch(`autoRole_${member.guild.id)`).then(i => {
 try {
 member.addRole(member.guild.roles.find("name", i))
} catch (e) {
 console.log('Rol veremedim...')
}
})
});
