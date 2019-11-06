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
    var d = await utils.readData()
    var e = await utils.readWeap()
    var uid = "a" + message.author.id

    if (d[uid].jam == true)
    {
      d[uid].jam = false
      await utils.putData(d)

      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

      const msg1 = new RichEmbed()
      .setTitle("Vous êtes en train de désenrayer votre arme...")
      .setImage("https://im4.ezgif.com/tmp/ezgif-4-2ad5d9ec16aa.gif")

      const msg = await message.channel.send(msg1)

      await sleep(4000)

      const msg2 = new RichEmbed()
      .setTitle(`Vous avez désenrayé votre ${e.table[d[uid].Weapon].Name}`)

      msg.edit(msg2)
    } else {
      const msg1 = new RichEmbed()
      .setTitle(`Votre arme n'est pas enrayée`)
      message.channel.send(msg1)
    }

  }
}
