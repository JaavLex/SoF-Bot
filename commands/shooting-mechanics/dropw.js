const { RichEmbed } = require("discord.js");
const utils = require('../../utils.js')

module.exports = {
  name: "dropw",
  aliases: ["d"],
  category: "shooting-mechanics",
  description: "Drop your weapon",
  usage: "~dropw <weapon>",
  run: async (bot,message,args) => {
    d = await utils.readData()
    e = await utils.readWeap()
    console.log(utils.readData())
    console.log(utils.readWeap())
    console.log(d.table.jam)

    if (!args[0] && d.table.Weapon != 0) {
        message.channel.send(`Vous lachez votre ${e.table[d.table.Weapon].Name}`)
        d.table.Weapon = 0
        d.table.Mag = 0
        await utils.putData(d)
    } else {
      message.channel.send(`Vous êtes déjà désarmé!`)
    }
  }
}
