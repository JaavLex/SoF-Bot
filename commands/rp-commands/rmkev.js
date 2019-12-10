const { RichEmbed } = require("discord.js");
const utils = require('../../utils.js')

module.exports = {
  name: "rmkev",
  aliases: ["rmk"],
  category: "rp-commands",
  description: "Remove kevlar or helmet",
  usage: "~rmkev <helm|kev>",
  run: async (bot,message,args) => {
    d = await utils.readData()
    e = await utils.readWeap()
    var uid = "a" + message.author.id
    console.log(utils.readData())
    console.log(utils.readWeap())
    console.log(d[uid].jam)

    // Sets d.Weapon to 0
    switch (args[0]) {
      case "kev":
          if (d[uid].kevlar > 0) {
            const msg1 = new RichEmbed()
            .setTitle(`Vous enlevez votre kevlar de niveau ${d[uid].kevlar}...`)
            message.channel.send(msg1)
            d[uid].kevlar == 0
            await utils.putData(d)
          } else {
            message.channel.send("Vous n'avez déjà pas de kevlar!")
          }
        break;
      case "helm":
          if (d[uid].Helm == true) {
            const msg2 = new RichEmbed()
            .setTitle(`Vous enlevez votre casque...`)
            message.channel.send(msg2)
            d[uid].Helm == false
            await utils.putData(d)
          } else {
            message.channel.send("Vous n'avez déjà pas de casque!")
          }
        break;
      default:
        message.channel.send("Ce que vous voulez enlever n'existe pas...")
    }
  }
}
