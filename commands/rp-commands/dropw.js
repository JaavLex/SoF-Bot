const { RichEmbed } = require("discord.js");
const utils = require('../../utils.js')

module.exports = {
  name: "dropw",
  aliases: ["d"],
  category: "rp-commands",
  description: "Drop your weapon",
  usage: "~dropw",
  run: async (bot,message,args) => {
    d = await utils.readData()
    e = await utils.readWeap()
    var uid = "a" + message.author.id
    console.log(utils.readData())
    console.log(utils.readWeap())
    console.log(d[uid].jam)

    if (!args[0] && d[uid].Weapon != 0) {
        const msg1 = new RichEmbed()
        .setTitle(`Vous lachez votre ${e.table[d[uid].Weapon].Name}`)
        message.channel.send(msg1)
        d[uid].Weapon = 0
        d[uid].Mag = 0
        await utils.putData(d)
    } else {
      const msg1 = new RichEmbed()
      .setTitle(`Vous êtes déjà désarmé!`)
      message.channel.send(msg1)
    }
  }
}
