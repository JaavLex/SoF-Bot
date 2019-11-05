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

    async function AmmoCount(){
      if (d.table.Mag > 0){
        d.table.Mag = d.table.Mag - 1
        await utils.putData(d)
      }
    }

    if (args[0] && !args[1] && d.table.Weapon != 0) {
      if (hitchance > 6 && jamchance < 9 && d.table.jam == false && d.table.Mag > 0) {
        AmmoCount()
        message.channel.send(`Touché! ${hitchance}`)
      } else if (hitchance < 6 && d.table.jam == false && d.table.Mag > 0){
        AmmoCount()
        message.channel.send(`Raté... ${hitchance}`)
      } else if (jamchance > 9 || d.table.jam == true) {
        d.table.jam = true
        utils.putData(d)
        message.channel.send(`Votre arme est enrayée`)
      } else if (d.table.Mag < 1) {
        message.channel.send(`*Clic* Votre arme est vide`)
      }
    } else if (d.table.Weapon = 0) {
      message.channel.send(`Tu n'as pas d'arme!!`)
    }
  }
}
