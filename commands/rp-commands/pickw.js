const { RichEmbed } = require("discord.js");
const utils = require('../../utils.js')

module.exports = {
  name: "pickw",
  aliases: ["p"],
  category: "rp-commands",
  description: "Pick up weapon",
  usage: "~pickw <weapon>",
  run: async (bot,message,args) => {
    d = await utils.readData()
    e = await utils.readWeap()
    var uid = "a" + message.author.id
    console.log(utils.readData())
    console.log(utils.readWeap())
    console.log(d[uid].jam)


    // Sets d.Weapon to the Id of the desired weapon
    if (args[0] && !args[1]) {
      switch (args[0]) {
        case "MP5":
            d[uid].Weapon = 1
            d[uid].Mag = e.table[1].Mag
            d[uid].Fullauto = false
            await utils.putData(d)
            const msg1 = new RichEmbed()
            .setTitle(`Vous avez ramassé une ${e.table[1].Name}`)
            message.channel.send(msg1)
          break;
        case "M4":
            d[uid].Weapon = 2
            d[uid].Mag = e.table[2].Mag
            d[uid].Fullauto = false
            await utils.putData(d)
            const msg2 = new RichEmbed()
            .setTitle(`Vous avez ramassé une ${e.table[2].Name}`)
            message.channel.send(msg2)
          break;
        case "Glock":
            d[uid].Weapon = 3
            d[uid].Mag = e.table[3].Mag
            d[uid].Fullauto = false
            await utils.putData(d)
            const msg3 = new RichEmbed()
            .setTitle(`Vous avez ramassé une ${e.table[3].Name}`)
            message.channel.send(msg3)
          break;
        default:

      }
    }
  }
}
