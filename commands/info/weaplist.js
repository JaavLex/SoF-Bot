const { RichEmbed } = require("discord.js");
const utils = require('../../utils.js')

module.exports = {
  name: "weaplist",
  aliases: ["weapl"],
  category: "info",
  description: "Shows a list of available weapons",
  usage: "~weaplist",
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

    const msg = new RichEmbed()
    .setTitle("Liste des armes disponibles :")
    .setFooter("WEAPLIST")

    for(var i = 1; i < e.table.length;i++)
    {
      msg.addField(`Arme N#${i}`, e.table[i].Name, true)
      msg.addField(`Type d'arme`, e.table[i].Type, true)
      msg.addBlankField()
    }

    message.channel.send(msg)
  }
}
