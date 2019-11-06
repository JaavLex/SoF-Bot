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

    if (args[0] && !args[1]) {
      if (args[0] == "MP5") {

        d[uid].Weapon = 1
        d[uid].Mag = e.table[1].Mag
        await utils.putData(d)
        const msg1 = new RichEmbed()
        .setTitle(`Vous avez ramassé une ${e.table[1].Name}`)
        message.channel.send(msg1)
      }
    }
  }
}
