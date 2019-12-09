const { RichEmbed } = require("discord.js");
const utils = require('../../utils.js')

module.exports = {
  name: "inspectw",
  aliases: ["i"],
  category: "rp-commands",
  description: "Inspect your weapon!",
  usage: "~inspectw",
  run: async (bot,message,args) => {
    d = await utils.readData()
    e = await utils.readWeap()
    var uid = "a" + message.author.id


    // Gives all info from weapons.json
    if (d[uid].Weapon != 0) {
      const msg1 = new RichEmbed()
      .setTitle(`Statistiques de votre arme...`)
      .setImage(e.table[d[uid].Weapon].Image)
      .addField(`Nom de l'arme :`, `${e.table[d[uid].Weapon].Name}`, true)
      .addField(`Calibre :`, `${e.table[d[uid].Weapon].Caliber}`, true)
      .addField(`Type de l'arme :`, `${e.table[d[uid].Weapon].Type}`, true)
      .addField(`Contenance du chargeur :`, `${e.table[d[uid].Weapon].Mag}`, true)
      .addField(`Portée de l'arme :`, `${e.table[d[uid].Weapon].Range}`, true)
      .setTimestamp()
      .setFooter(`${e.table[d[uid].Weapon].Name}`);

      message.channel.send(msg1)


    } else if (d[uid].Weapon == 0) {
      const msg1 = new RichEmbed()
      .setTitle(`Vous n'avez pas d'arme!`)
      message.channel.send(msg1)
    }
  }
}
