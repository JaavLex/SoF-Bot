const { RichEmbed } = require("discord.js");
const fs = require("fs");
const utils = require('../../utils.js')

module.exports = {
  name: "roll",
  aliases: ["r"],
  category: "rp-commands",
  description: "roll a dice",
  usage: "~roll [endurance|force|charisme|perception]",
  run: async (bot,message,args) => {
    var d = await utils.readData()
    var roll = (Math.floor(Math.random() * 9) + 1);
    var str = ""
    var test
    var uid = "a" + message.author.id
    console.log(roll, d[uid].E, d[uid].RPname)

    function Roll(str, test)
    {
      // Gives stats and chances end of string
      if (args[0] == "endurance") {
        str = "d'endurance"
        test = d[uid].E
      } else if (args[0] == "force") {
        str = "de force"
        test = d[uid].S
      } else if (args[0] == "charimse") {
        str = "de charisme"
        test = d[uid].C
      } else if (args[0] == "perception") {
        str = "de perception"
        test = d[uid].Ps
      }

      if (test >= roll && roll > 1 && roll < 10)
      {
        // If roll is won
        const msg1 = new RichEmbed()
        .setTitle(`${d[uid].RPname} a réussi son jet ${str}`)
        message.channel.send(msg1)
      } else if (roll == 1) {
        const msg1 = new RichEmbed()
        .setTitle(`${d[uid].RPname} a réussi son jet ${str} **REUSSITE CRITIQUE !!**`)
        message.channel.send(msg1)
      } else if (roll == 10) {
        const msg1 = new RichEmbed()
        .setTitle(`${d[uid].RPname} a réussi son jet ${str} **ECHEC CRITIQUE !!**`)
        message.channel.send(msg1)
      } else {
        // If roll is lost
        const msg1 = new RichEmbed()
        .setTitle(`${d[uid].RPname} a raté son jet ${str}...`)
        message.channel.send(msg1)
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

    } else if (!args[0])  {
      const msg1 = new RichEmbed()
      .setTitle(`${d[uid].RPname} a fait un jet, le résultat est : ${roll} / 10`)
      message.channel.send(msg1)
    }
}
}
