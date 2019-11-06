const { RichEmbed } = require("discord.js");
const fs = require("fs");
const utils = require('../../utils.js')

module.exports = {
  name: "roll",
  aliases: ["r"],
  category: "rp-commands",
  description: "roll a dice",
  usage: "~roll <e|s|c>",
  run: async (bot,message,args) => {
    var d = await utils.readData()
    var roll = (Math.floor(Math.random() * 10) + 1);
    var str = ""
    var test
    var uid = "a" + message.author.id
    console.log(roll, d[uid].E, d[uid].RPname)

    function Roll(str, test)
    {
      if (args[0] == "e") {
        str = "d'endurance"
        test = d[uid].E
      } else if (args[0] == "s") {
        str = "de force"
        test = d[uid].S
      } else if (args[0] == "c") {
        str = "de charisme"
        test = d[uid].C
      } else if (args[0] == "p") {
        str = "de perception"
        test = d[uid].Ps
      }

      if (test >= roll)
      {
        const msg1 = new RichEmbed()
        .setTitle(`${d[uid].RPname} a réussi son jet ${str}`)
        message.channel.send(msg1)
      } else {
        const msg1 = new RichEmbed()
        .setTitle(`${d[uid].RPname} a raté son jet ${str}...`)
        cmessage.channel.send(msg1)
      }
    }
    if (args[0] && !args[1]) {
      if (args[0] == "e"){
        Roll(str, test)
      } else if (args[0] == "s"){
        Roll(str, test)
      } else if (args[0] == "c"){
        Roll(str, test)
      } else if (args[0] == "p"){
        Roll(str, test)
      }

    }
}
}
