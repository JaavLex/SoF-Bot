const { RichEmbed } = require("discord.js");
const utils = require('../../utils.js')

module.exports = {
  name: "pickw",
  aliases: ["p"],
  category: "shooting-mechanics",
  description: "shoot on someone, or something",
  usage: "~pickw <weapon>",
  run: async (bot,message,args) => {
    d = await utils.readData()
    e = await utils.readWeap()
    console.log(utils.readData())
    console.log(utils.readWeap())
    console.log(d.table.jam)

    if (args[0] && !args[1]) {
      if (args[0] == "MP5") {
        d.table.Weapon = 1
        d.table.Mag = e.table[1].Mag
        await utils.putData(d)
        message.channel.send(`Vous avez ramassé une ${e.table[1].Name}`)
      }
    }
  }
}
