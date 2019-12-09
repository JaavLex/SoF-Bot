const { RichEmbed } = require("discord.js");
const utils = require('../../utils.js')

module.exports = {
  name: "switchw",
  aliases: ["sw"],
  category: "rp-commands",
  description: "Switch from your primary to you secondary, or holster them...",
  usage: "~switchw [holster]",
  run: async (bot,message,args) => {
    d = await utils.readData()
    e = await utils.readWeap()
    var uid = "a" + message.author.id
    console.log(utils.readData())
    console.log(utils.readWeap())
    console.log(d[uid].jam)

    if (!args[0]) {
      if (e.table[d[uid].Weapon].T == 1) {
        d[uid].Weapon3 = d[uid].Weapon
        d[uid].Weapon = d[uid].Weapon2
        d[uid].Weapon2 = 0
        await utils.putData(d)
        message.channel.send(`Vous prenez votre ${e.table[d[uid].Weapon].Name}`)
      } else if (e.table[d[uid].Weapon].T == 2) {
        d[uid].Weapon2 = d[uid].Weapon
        d[uid].Weapon = d[uid].Weapon3
        d[uid].Weapon3 = 0
        await utils.putData(d)
        message.channel.send(`Vous prenez votre ${e.table[d[uid].Weapon].Name}`)
      } else if (e.table[d[uid].Weapon].T == 0 && e.table[d[uid].Weapon2].T == 0) {
        d[uid].Weapon = d[uid].Weapon3
        d[uid].Weapon3 = 0
        await utils.putData(d)
        message.channel.send(`Vous prenez votre ${e.table[d[uid].Weapon].Name}`)
      } else if (e.table[d[uid].Weapon].T == 0 && e.table[d[uid].Weapon3].T == 0) {
        d[uid].Weapon = d[uid].Weapon2
        d[uid].Weapon2 = 0
        await utils.putData(d)
        message.channel.send(`Vous prenez votre ${e.table[d[uid].Weapon].Name}`)
      } else if (e.table[d[uid].Weapon].T == 0 && e.table[d[uid].Weapon3].T > 0) {
        d[uid].Weapon = d[uid].Weapon3
        d[uid].Weapon3 = 0
        await utils.putData(d)
        message.channel.send(`Vous prenez votre ${e.table[d[uid].Weapon].Name}`)
      } else if (e.table[d[uid].Weapon].T == 0 && e.table[d[uid].Weapon2].T == 0 && e.table[d[uid].Weapon3].T == 0) {
        message.channel.send("Vous n'avez pas d'arme!")
      }
    } else if (args[0] == "holster") {
      if (e.table[d[uid].Weapon].T == 1) {
        d[uid].Weapon3 = d[uid].Weapon
        d[uid].Weapon = 0
        await utils.putData(d)
        message.channel.send(`Vous rangez votre arme...`)
      } else if (e.table[d[uid].Weapon].T == 2) {
        d[uid].Weapon2 = d[uid].Weapon
        d[uid].Weapon = 0
        await utils.putData(d)
        message.channel.send(`Vous rangez votre arme...`)
      } else if (e.table[d[uid].Weapon].T == 0) {
        message.channel.send(`Vous n'avez pas d'arme!`)
      }
    }


  }
}
