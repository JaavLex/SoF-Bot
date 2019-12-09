const { RichEmbed } = require("discord.js");
const utils = require('../../utils.js')

module.exports = {
  name: "rpinf",
  aliases: ["rpi"],
  category: "rp-commands",
  description: "Shows roleplay sheet info!",
  usage: "~rpinf [otherplayer]",
  run: async (bot,message,args) => {
    d = await utils.readData()
    e = await utils.readWeap()
    var uid = "a" + message.author.id
    const usr = message.mentions.users.first()

    if (usr) {
      const user = message.mentions.users.first().id
      var ouid = "a" + user
      if (d[ouid].Rank == "" || d[ouid].RPname == "" || d[ouid].Desc == "") {
        message.channel.send("Cette fiche n'a pas été complétée...")
      } else {
        const msg1 = new RichEmbed()
        .setTitle(`Ouverture du dossier sur le ${d[ouid].Rank} ${d[ouid].RPname}`)
        .setImage(d[ouid].Picture)
        .addField(`Rang / métier :`, `${d[ouid].Rank}`, true)
        .addField(`Prénom, nom :`, `${d[ouid].RPname}`, true)
        .addField(`Background :`, `${d[ouid].Desc}`)
        .addField(`Endurance :`, `${d[ouid].E}`, true)
        .addField(`Charisme :`, `${d[ouid].C}`, true)
        .addField(`Force :`, `${d[ouid].S}`, true)
        .addField(`Perception :`, `${d[ouid].Ps}`, true)
        .addField(`Contrôle du recul :`, `${d[ouid].RC}`, true)
        .setFooter(`Fiche RP`);

        message.channel.send(msg1)
      }
    } else {
      if (d[uid].Rank == "" || d[uid].RPname == "" || d[uid].Desc == "") {
        message.channel.send("Cette fiche n'a pas été complétée...")
      } else {
        const msg2 = new RichEmbed()
        .setTitle(`Ouverture du dossier sur le ${d[uid].Rank} ${d[uid].RPname}`)
        .setImage(d[uid].Picture)
        .addField(`Rang / métier :`, `${d[uid].Rank}`, true)
        .addField(`Prénom, nom :`, `${d[uid].RPname}`, true)
        .addField(`Background :`, `${d[uid].Desc}`)
        .addField(`Endurance :`, `${d[uid].E}`, true)
        .addField(`Charisme :`, `${d[uid].C}`, true)
        .addField(`Force :`, `${d[uid].S}`, true)
        .addField(`Perception :`, `${d[uid].Ps}`, true)
        .addField(`Contrôle du recul :`, `${d[uid].RC}`, true)
        .setFooter(`Fiche RP`);

        message.channel.send(msg2)
    }

    }

    // Gives all info from weapons.json



  }
}
