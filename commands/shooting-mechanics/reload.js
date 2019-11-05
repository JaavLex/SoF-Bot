const { RichEmbed } = require("discord.js");
const utils = require('../../utils.js')

module.exports = {
  name: "reload",
  aliases: ["r"],
  category: "shooting-mechanics",
  description: "Reload your weapon",
  usage: "~reload",
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

    if (!args[0] && d[uid].Weapon != 0) {
        const msg1 = new RichEmbed()
        .setImage("https://im4.ezgif.com/tmp/ezgif-4-132cd2b4b05f.gif")

        const msg = await message.channel.send(msg1)

        await sleep(4100)

        const msg2 = new RichEmbed()
        .setTitle(`Vous avez placé un nouveau magasin dans votre ${e.table[d[uid].Weapon].Name}`)

        msg.edit(msg2)

        d[uid].Mag = e.table[d[uid].Weapon].Mag
        await utils.putData(d)
    } else {
      const msg1 = new RichEmbed()
      .setTitle(`Vous n'avez pas d'arme!`)

      message.channel.send(msg1)
    }
  }
}
