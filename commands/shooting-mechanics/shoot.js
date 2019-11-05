const { RichEmbed } = require("discord.js");
const utils = require('../../utils.js')

module.exports = {
  name: "shoot",
  aliases: ["s"],
  category: "shooting-mechanics",
  description: "shoot on someone, or something",
  usage: "~shoot <target>",
  run: async (bot,message,args) => {
    d = await utils.readData()
    console.log(utils.readData())
    console.log(d.table.jam)
    var hitchance = (Math.floor(Math.random() * 10) + 2);
    var jamchance = (Math.floor(Math.random() * 10) + 1);

    if (args[0] && !args[1]) {
      if (hitchance > 6 && jamchance < 9 && d.table.jam == false) {
        message.channel.send(`Touché! ${hitchance}, ${d.table.Id}`)
      } else if (hitchance < 6 && d.table.jam == false){
        message.channel.send(`Raté... ${hitchance}, ${d.table.Id}`)
      } else if (jamchance > 9 || d.table.jam == true) {
        d.table.jam = true
        utils.putData(d)
        message.channel.send(`Votre arme est enrayée`)
      }
    }
  }
}
