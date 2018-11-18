client.on("guildMemberAdd", member => {
    let otorol = JSON.parse(fs.readFileSync("./sunucuyaözelayarlar/otorol.json", "utf8"));
  (function (exports, require, module, __filename, __dirname) { client.on("guildMemberAdd", member => {
    var role = otorol[member.guild.id].role;
  const rol = member.guild.roles.find('name', role);
    if (!rol)
    member.addRole(role);
});
