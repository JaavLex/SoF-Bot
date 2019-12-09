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
    if (args[0] && !args[1] && d[uid].cpup == true) {
      switch (args[0]) {
        case "MP5":
            if (e.table[d[uid].Weapon3].T == 1) {
              d[uid].Weapon = 1
              d[uid].Weapon3 = 0
            } else {
              d[uid].Weapon = 1
            }
            d[uid].Mag = e.table[1].Mag
            d[uid].Fullauto = false
            await utils.putData(d)
            const msg1 = new RichEmbed()
            .setTitle(`Vous avez ramassé une ${e.table[1].Name}`)
            message.channel.send(msg1)
          break;
        case "M4":
            if (e.table[d[uid].Weapon3].T == 1) {
              d[uid].Weapon = 2
              d[uid].Weapon3 = 0
            } else {
              d[uid].Weapon = 2
            }
            d[uid].Mag = e.table[2].Mag
            d[uid].Fullauto = false
            await utils.putData(d)
            const msg2 = new RichEmbed()
            .setTitle(`Vous avez ramassé une ${e.table[2].Name}`)
            message.channel.send(msg2)
          break;
        case "Glock":
            if (e.table[d[uid].Weapon].T == 2) {
              d[uid].Weapon = 3
            } else {
              d[uid].Weapon2 = 3
            }
            d[uid].Mag = e.table[3].Mag
            d[uid].Fullauto = false
            await utils.putData(d)
            const msg3 = new RichEmbed()
            .setTitle(`Vous avez ramassé une ${e.table[3].Name}`)
            message.channel.send(msg3)
          break;
        case "AK74":
            if (e.table[d[uid].Weapon3].T == 1) {
              d[uid].Weapon = 4
              d[uid].Weapon3 = 0
            } else {
              d[uid].Weapon = 4
            }
            d[uid].Mag = e.table[4].Mag
            d[uid].Fullauto = false
            await utils.putData(d)
            const msg4 = new RichEmbed()
            .setTitle(`Vous avez ramassé une ${e.table[4].Name}`)
            message.channel.send(msg4)
          break;
        case "AKM":
            if (e.table[d[uid].Weapon3].T == 1) {
              d[uid].Weapon = 5
              d[uid].Weapon3 = 0
            } else {
              d[uid].Weapon = 5
            }
            d[uid].Weapon = 5
            d[uid].Mag = e.table[5].Mag
            d[uid].Fullauto = false
            await utils.putData(d)
            const msg5 = new RichEmbed()
            .setTitle(`Vous avez ramassé une ${e.table[5].Name}`)
            message.channel.send(msg5)
          break;
        case "Beretta":
              if (e.table[d[uid].Weapon].T == 2) {
                d[uid].Weapon = 6
              } else {
                d[uid].Weapon2 = 6
              }
              d[uid].Mag = e.table[6].Mag
              d[uid].Fullauto = false
              await utils.putData(d)
              const msg6 = new RichEmbed()
              .setTitle(`Vous avez ramassé une ${e.table[6].Name}`)
              message.channel.send(msg6)
            break;
        default:

      }
    } else if (d[uid].cpup == false) {
      message.channel.send("Vous n'avez pas l'autorisation de prendre une arme!")
    }
  }
}
