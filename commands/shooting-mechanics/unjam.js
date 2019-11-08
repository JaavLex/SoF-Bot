const { RichEmbed } = require("discord.js");
const fs = require("fs");
const utils = require('../../utils.js')

module.exports = {
  name: "unjam",
  aliases: ["u"],
  category: "shooting-mechanics",
  description: "Unjam your gun",
  usage: "~unjam",
  run: async (bot,message,args) => {
    // Getting necessary infos
    var d = await utils.readData()
    var e = await utils.readWeap()
    var uid = "a" + message.author.id

    // Turns jam = true to false and sends .gif imagery to represent the action
    if (d[uid].jam == true && d[uid].ACD == false)
    {
      d[uid].ACD = true
      d[uid].jam = false
      await utils.putData(d)

      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

      const msg1 = new RichEmbed()
      .setTitle("Vous êtes en train de désenrayer votre arme...")
      .setImage("https://i.ibb.co/yhD6J38/Unjam.gif")

      const msg = await message.channel.send(msg1)

      await sleep(10000)

      const msg2 = new RichEmbed()
      .setTitle(`Vous avez désenrayé votre ${e.table[d[uid].Weapon].Name}`)

      d[uid].ACD = false
      await utils.putData(d)

      msg.edit(msg2)
    } else if (d[uid].ACD == true) {

    } else {
      // Can't do the command if weapon is not jammed
      const msg1 = new RichEmbed()
      .setTitle(`Votre arme n'est pas enrayée`)
      message.channel.send(msg1)
    }

  }
}
