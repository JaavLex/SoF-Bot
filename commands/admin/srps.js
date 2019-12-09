const { RichEmbed } = require("discord.js");
const utils = require('../../utils.js')

module.exports = {
  name: "srps",
  aliases: ["srps"],
  category: "admin",
  description: "Sets Role Play sheet, and modifies other values...",
  usage: "~srps <trait> <user>",
  run: async (bot,message,args) => {
    d = await utils.readData()
    e = await utils.readWeap()
    const usr = message.mentions.users.first()
    var uid = "a" + message.author.id
    const filter = m => m.author.id === message.author.id;

    if (usr) {
      const user = message.mentions.users.first().id
      var ouid = "a" + user
    }

    if (message.member.hasPermission("ADMINISTRATOR")) {
      if (args[0] && args[1] && args[2] && !args[3]) {
        switch (args[0]) {
          case "rpname":
            message.channel.send("Veuillez le nom RP dans le prochain message :")
            message.channel.awaitMessages(filter, {max: 1, time: 30000}).then(async collected => {
              if (collected.first().content === "stop") {
                message.reply("Arrêt de la commande.");
              } else {
                var name = collected.first().content.toString()
                d[ouid].RPname = name;
                await utils.putData(d)
              }
            })
            break;
          case "desc":
             message.channel.send("Veuillez écrire la description dans le prochain message :")
             message.channel.awaitMessages(filter, {max: 1, time: 30000}).then(async collected => {
               if (collected.first().content === "stop") {
                 message.reply("Arrêt de la commande.");
               } else {
                 var desc = collected.first().content.toString()
                 d[ouid].Desc = desc;
                 await utils.putData(d)
               }
             })
            break;
          case "rank":
            d[ouid].Rank = args[1]
            break;
          case "picture":
            d[ouid].Picture = args[1]
            break;
          case "endurance":
            if (isNaN(parseInt(args[1])) || parseInt(args[1]) > 10 || parseInt(args[1]) < 1) {
              message.channel.send("Vous devez marquer un nombre entre 1 et 10 pour ce trait!")
            } else {
              d[ouid].E = parseInt(args[1])
            }
            break;
          case "charisme":
            if (isNaN(parseInt(args[1])) || parseInt(args[1]) > 10 || parseInt(args[1]) < 1) {
              message.channel.send("Vous devez marquer un nombre entre 1 et 10 pour ce trait!")
            } else {
              d[ouid].C = parseInt(args[1])
            }
            break;
          case "force":
            if (isNaN(parseInt(args[1])) || parseInt(args[1]) > 10 || parseInt(args[1]) < 1) {
              message.channel.send("Vous devez marquer un nombre entre 1 et 10 pour ce trait!")
            } else {
              d[ouid].S = parseInt(args[1])
            }
            break;
          case "perception":
            if (isNaN(parseInt(args[1])) || parseInt(args[1]) > 10 || parseInt(args[1]) < 1) {
              message.channel.send("Vous devez marquer un nombre entre 1 et 10 pour ce trait!")
            } else {
              d[ouid].Ps = parseInt(args[1])
            }
            break;
          case "precision":
            if (isNaN(parseInt(args[1])) || parseInt(args[1]) > 100 || parseInt(args[1]) < 1) {
              message.channel.send("Vous devez marquer un nombre entre 1 et 100 pour ce trait!")
            } else {
              d[ouid].P = parseInt(args[1])
            }
            break;
          case "recoilcontrol":
            if (d[ouid].RC == true) {
              d[ouid].RC = false
            } else {
              d[ouid].RC = true
            }
            break;
          case "cpup":
            if (d[ouid].cpup == true) {
              d[ouid].cpup = false
            } else {
              d[ouid].cpup = true
            }
            break;
          case "HHP":
              if (isNaN(parseInt(args[1]))) {
                message.channel.send("Vous devez marquer un nombre pour ce trait!")
              } else {
                d[ouid].Head = parseInt(args[1])
              }
            break;
          case "BHP":
              if (isNaN(parseInt(args[1]))) {
                message.channel.send("Vous devez marquer un nombre pour ce trait!")
              } else {
                d[ouid].Body = parseInt(args[1])
              }
            break;
          case "LHP":
              if (isNaN(parseInt(args[1]))) {
                message.channel.send("Vous devez marquer un nombre pour ce trait!")
              } else {
                d[ouid].Legs = parseInt(args[1])
              }
            break;
          default:
            message.channel.send("Votre commande n'est pas valide!!!")
        }
        await utils.putData(d)
      } else {
        message.channel.send("Votre commande n'est pas valide!!!")
      }
    } else {
      message.channel.send("Vous n'avez pas les droits necessaires...")
    }
  }
}
