const { RichEmbed } = require("discord.js");
const utils = require('../../utils.js')

module.exports = {
  name: "fireselect",
  aliases: ["fs"],
  category: "shooting-mechanics",
  description: "Change from semi-auto to full-auto or the oposite. (You have less chance to hit something in full auto, but you make more damage)",
  usage: "~fireselect",
  run: async (bot,message,args) => {
    d = await utils.readData()
    e = await utils.readWeap()
    var uid = "a" + message.author.id
    var firestate = ""
    console.log(utils.readData())
    console.log(utils.readWeap())

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Shows info from d.Mag
    if (!args[0] && d[uid].Weapon != 0 && d[uid].ACD == false) {

        d[uid].ACD = true
        await utils.putData(d)



        if (e.table[d[uid].Weapon].Fullauto == true)
        {
          const msg1 = new RichEmbed()
          .setTitle("Vous changez de mode de tir...")
          .setImage("")

          const msg = await message.channel.send(msg1)

          await sleep(1000)

          if (d[uid].Fullauto == true)
          {
            firestate = `semi-auto.`
            d[uid].Fullauto = false
            await utils.putData(d)
          } else {
            firestate = `full-auto.`
            d[uid].Fullauto = true
            await utils.putData(d)
          }


          const msg2 = new RichEmbed()
          .setTitle(`Votre arme est en ` + firestate)
          .setImage("")

          msg.edit(msg2)
        } else if (e.table[d[uid].Weapon].Fullauto == false){
          const msg2 = new RichEmbed()
          .setTitle(`Vous ne pouvez pas changer de mode de tir sur cette arme...`)
          .setImage("")

          await message.channel.send(msg2)
        }


        d[uid].ACD = false
        await utils.putData(d)
    } else if (d[uid].Weapon == 0) {
      // Rejects if unarmed
      const msg1 = new RichEmbed()
      .setTitle("Vous n'avez pas d'arme...")
      message.channel.send(msg1)
    } else if (d[uid].ACD == true) {

    }
  }
}
