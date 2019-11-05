const { RichEmbed } = require("discord.js");
const utils = require('../../utils.js')

module.exports = {
  name: "cleanw",
  aliases: ["c"],
  category: "shooting-mechanics",
  description: "clean your weapon",
  usage: "~cleanw",
  run: async (bot,message,args) => {
    d = await utils.readData()
    e = await utils.readWeap()
    var uid = "a" + message.author.id
    console.log(utils.readData())
    console.log(utils.readWeap())
    console.log(d[uid].jam)

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    if (!args[0] && d[uid].Weapon != 0 && d[uid].jamchance > 35) {

        const msg1 = new RichEmbed()
        .setTitle("Vous démontez votre arme et nettoyez toute les pièces...")
        .setImage("https://media.giphy.com/media/augSlqlrfrvLG/giphy.gif")

        const msg = await message.channel.send(msg1)

        await sleep(4000)
        d[uid].jamchance = d[uid].jamchance - 30
        await utils.putData(d)

        const msg2 = new RichEmbed()
        .setTitle("Votre arme est nettoyée à " + (100 - d[uid].jamchance) + "%")

        msg.edit(msg2)
    } else if (d[uid].Weapon == 0) {
      const msg1 = new RichEmbed()
      .setTitle("Vous n'avez pas d'arme à nettoyer")
      const msg = await message.channel.send(msg1)
    } else if (d[uid].jamchance < 35 && d[uid].Weapon != 0) {
      const msg1 = new RichEmbed()
      .setTitle(`Votre ${e.table[d[uid].Weapon].Name} semble encore trop propre...`)
      const msg = await message.channel.send(msg1)
    }
  }
}
