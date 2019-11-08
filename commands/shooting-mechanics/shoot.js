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
    e = await utils.readWeap()
    console.log(utils.readData())

    // Rolls
    var jc1 = (Math.floor(Math.random() * 90) + 10);
    var jc2 = 100 - jc1

    var hitchance = (Math.floor(Math.random() * 99) + 1);
    var jamchance = (Math.floor(Math.random() * jc2) + jc1);
    // Player ID
    var uid = "a" + message.author.id
    console.log(uid)
    // Round counter + weapon gets dirty with shots
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }



  async function HitorMiss(str, target, img){
    if (d[uid].Mag > 0){
      d[uid].Mag = d[uid].Mag - 1
      d[uid].jamchance = Math.floor((d[uid].jamchance + 0.2) * 100) / 100
      await utils.putData(d)
    }
    // Removes bullet from the mag each shots
    if (d[uid].Mag < e.table[d[uid].Weapon].Mag && d[uid].Mag > 0) {
      d[uid].MagState = "entamé"
      await utils.putData(d)
    } else if (d[uid].Mag == 0) {
      d[uid].MagState = "vide"
      await utils.putData(d)
    }

    d[uid].ACD = true
    await utils.putData(d)

    const msg1 = new RichEmbed()
    .setTitle(`Vous visez et vous tirez!`)
    .setImage("https://i.ibb.co/LCbFZwV/Shoot.gif")

    const msg = await message.channel.send(msg1)

    await sleep(700)

    const msg2 = new RichEmbed()
    .setTitle(str + target)
    .setImage(img)

    d[uid].ACD = false
    await utils.putData(d)

    msg.edit(msg2)


  }

    if (args[0] && !args[1] && d[uid].Weapon != 0 && d[uid].ACD == false) {
      if (hitchance > d[uid].P && jamchance > d[uid].jamchance && d[uid].jam == false && d[uid].Mag > 0) {
        // Action if you hit your shot
        const user = message.mentions.users.first().id

        var whit = (Math.floor(Math.random() * 99) + 1);

        var hitid = 0;

        var target = ""

        var img = ""

        if (whit < 30) {
          hitid = 3
          img = "https://i.ibb.co/Yjj94T1/Hit-Legshot.png"
        } else if (whit > 30 && whit < 90) {
          hitid = 2
          img = "https://i.ibb.co/0mYYdyn/Hit-Bodyshot.png"
        } else if (whit > 90) {
          hitid = 1
          img = "https://i.ibb.co/G3sj9wD/Hit-Headshot.png"
        }

        if (args[0] == "ennemy")
        {
          if (hitid == 1 || hitid == 2) {
            target = "un ennemi! Vous l'avez tué."
          } else if (hitid == 3) {
            target = "un ennemi! Vous l'avez blessé."
          }

      //  } else {
      //    target = "WORK IN PROGRESS"
      //  }
        } else if (user) {
           var ouid = "a" + user

           target = d[ouid].RPname
         }

        HitorMiss("Vous avez touché, votre tir était sur ", target, img)



      } else if (hitchance < d[uid].P && jamchance > d[uid].jamchance && d[uid].jam == false && d[uid].Mag > 0 && d[uid].ACD == false){
        // Action if you miss your shot
        var target = ""

        var img = "https://i.ibb.co/xSV7Pv7/Missed.jpg"

        if (args[0] == "ennemy")
        {
          target = "un ennemi! Vous l'avez raté!"

        } else {
          target = "WORK IN PROGRESS"
        }

        // else if (user) {
        //   var ouid = "a" + user.id

        //   target = d[ouid].RPname + "! Vous l'avez raté!"
        // }
        HitorMiss("Votre tir était sur ", target, img)
      } else if (jamchance < d[uid].jamchance || d[uid].jam == true && d[uid].ACD == false) {

        // Jams weapon if roll is higher than your jamming chance
        d[uid].jam = true
        utils.putData(d)

        const msg1 = new RichEmbed()
        .setTitle("Votre arme est enrayée")
        .setImage("https://i.ibb.co/Kh0XVZV/Jam.gif")

        message.channel.send(msg1)
      } else if (d[uid].Mag < 1 && d[uid].ACD == false) {

        // Action when weapon is empty
        const msg1 = new RichEmbed()
        .setTitle("*Clic*")
        .setImage("")

        message.channel.send(msg1)
      }
    } else if (d[uid].Weapon = 0 && d[uid].ACD == false) {

      // Rejects command if player doesn't have weapon
      const msg1 = new RichEmbed()
      .setTitle("Tu n'as pas d'arme!!")

      message.channel.send(msg1)
    } else if (d[uid].ACD == true) {

    }
  }
}
