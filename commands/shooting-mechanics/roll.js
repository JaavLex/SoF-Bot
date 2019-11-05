const { RichEmbed } = require("discord.js");
const fs = require("fs");
const utils = require('../../utils.js')

module.exports = {
  name: "roll",
  aliases: ["r"],
  category: "shooting-mechanics",
  description: "shoot on someone, or something",
  usage: "~roll",
  run: async (bot,message,args) => {
    var d = await utils.readData()
    var roll = (Math.floor(Math.random() * 10) + 1);
    var str = ""
    var test
    console.log(roll, d.table.E, d.table.RPname)

    function Roll(str, test)
    {
      if (args[0] == "e") {
        str = "d'endurance"
        test = d.table.E
      } else if (args[0] == "s") {
        str = "de force"
        test = d.table.S
      } else if (args[0] == "c") {
        str = "de charisme"
        test = d.table.C
      }

      if (test >= roll)
      {
        message.channel.send(`${d.table.RPname} a réussi son jet ${str}`)
      } else {
        message.channel.send(`${d.table.RPname} a raté son jet ${str}...`)
      }
    }
    if (args[0] && !args[1]) {
      if (args[0] == "e"){
        Roll(str, test)
      } else if (args[0] == "s"){
        Roll(str, test)
      } else if (args[0] == "c"){
        Roll(str, test)
      } else {

      }

    }
}
}
