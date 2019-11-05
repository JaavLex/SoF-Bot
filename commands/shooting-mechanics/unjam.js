const { RichEmbed } = require("discord.js");
const fs = require("fs");
const utils = require('../../utils.js')

module.exports = {
  name: "unjam",
  aliases: ["u"],
  category: "shooting-mechanics",
  description: "shoot on someone, or something",
  usage: "~unjam <target>",
  run: async (bot,message,args) => {
    var d = await utils.readData()
    d.table.jam = false
    await utils.putData(d)
  }
}
