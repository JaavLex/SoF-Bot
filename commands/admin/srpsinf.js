const { RichEmbed } = require("discord.js");
const utils = require('../../utils.js')

module.exports = {
  name: "srpsinf",
  aliases: ["srpsi"],
  category: "admin",
  description: "Infos on srps command...",
  usage: "~srpsinf",
  run: async (bot,message,args) => {
    d = await utils.readData()
    e = await utils.readWeap()
    const usr = message.mentions.users.first()
    var uid = "a" + message.author.id
    const filter = m => m.author.id === message.author.id;

    if (usr) {
      const user = message.mentions.users.first().id
      var ouid = "a" + user
    }

    if (message.member.hasPermission("ADMINISTRATOR")) {
      message.channel.send("Liste des valeurs modifiables :")
      message.channel.send("`rpname` : Nom RP \n `desc` : Description \n `rank` : Rang/Métier RP \n `picture` : Image de fiche \n `endurance` \n `charisme` \n `force` \n `perception` \n `precision` \n `recoilcontrol` : Contrôle du recul \n `cpup` : Si peux ramasser une arme \n `HHP` : Point de vie tête \n `BHP` : Point de vie corps \n `LHP` : Point de vie jambes")
    } else {
      message.channel.send("Vous n'avez pas les droits necessaires...")
    }
  }
}
