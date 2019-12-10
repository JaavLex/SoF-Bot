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

    // Rolls
    var jc1 = (Math.floor(Math.random() * 90) + 10);
    var jc2 = 100 - jc1

    var hitchance = (Math.floor(Math.random() * 99) + 1);
    var jamchance = (Math.floor(Math.random() * jc2) + jc1);
    var hitmult = 1
    // Player ID
    var uid = "a" + message.author.id
    // Round counter + weapon gets dirty with shots
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    if (d[uid].Fullauto == true)
    {
      if (d[uid].RC == true) {
        hitchance = hitchance - 10
      } else {
        hitchance = hitchance - 20
      }
      hitmult = 2
    }

  async function HitorMiss(str, target, img){
    var bullets = 0
    var mess = ``

    if (d[uid].Fullauto == true)
    {
      var nbb = Math.floor(((Math.floor(Math.random() * 99) + 1) /2) /10);
      var img1 = e.table[d[uid].Weapon].Shoot;
      for (var i = 0; i <= nbb; i++)
      {
        if (i < d[uid].Mag) {
          bullets++;
        } else {

        }
      }
      mess = `Vous visez et vous tirez une rafale de ` + bullets + ` balles!`
    } else {
      bullets = 1
      mess = `Vous visez et vous tirez une fois!`
    }

    if (d[uid].Mag > 0){
      d[uid].Mag = d[uid].Mag - bullets
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
    .setTitle(mess)
    .setImage(img1)

    const msg = await message.channel.send(msg1)

    await sleep(700)

    const msg2 = new RichEmbed()
    .setTitle(str + target)
    .setImage(img)

    d[uid].ACD = false
    await utils.putData(d)

    msg.edit(msg2)
  }

    if (args[0] && !args[1] && d[uid].Weapon > 0 && d[uid].ACD == false) {
      if (hitchance > d[uid].P && jamchance > d[uid].jamchance && d[uid].jam == false && d[uid].Mag > 0) {
        // Action if you hit your shot
        const usr = message.mentions.users.first()
        if (usr) {
          const user = message.mentions.users.first().id
          var ouid = "a" + user
        }

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
          HitorMiss("Vous avez touché, votre tir était sur ", target, img)
        } else if (usr && d[ouid].Alive == true) {

           target = d[ouid].RPname

           function narration(title, str, img2) {
             const msg5 = new RichEmbed()
             .setTitle(title)
             .addField(str)
             .setImage(img2)
             message.channel.send(msg5)
           }

           if (hitid == 3){
             // Different outcomes for a legshot
             if ((Math.floor(Math.random() * 9) + 1) < 5) {
               d[ouid].Legs = d[ouid].Legs - (1 * hitmult)
               img2 = "https://i.ibb.co/ySy6TfC/wounded.jpg"
               narration(`Vous êtes blessé!`, `${usr} vous avez reçu une balle dans une de vos jambes, elle n'a rien touché de grave mais vous avez une douleur importante`, img2)
             } else {
               d[ouid].Legs = d[ouid].Legs - (2 * hitmult)
               img2 = "https://i.ibb.co/ySy6TfC/wounded.jpg"
               narration(`Vous êtes blessé!`, `${usr} vous avez reçu une balle dans une de vos jambes, vous avez perdu l'usage de celle-ci... vous boitez`, img2)
             }
             if (d[ouid].Legs < 2) {
               img2 = "https://i.ibb.co/ySy6TfC/wounded.jpg"
               narration(`Vous êtes blessé!`, `${usr} Vos jambes sont trop amochées vous ne pouvez plus marcher...`, img2)
             }
           } else if (hitid == 2) {
             async function hit(div) {
               if (e.table[d[uid].Weapon].Penetration == 1) {
                 d[ouid].Body = d[ouid].Body - (2 / div) * hitmult
               } else if (e.table[d[uid].Weapon].Penetration == 2) {
                 d[ouid].Body = d[ouid].Body - (4 / div) * hitmult
               } else if (e.table[d[uid].Weapon].Penetration == 3) {
                 d[ouid].Body = d[ouid].Body - (6 / div) * hitmult
               }

              await utils.putData(d)
             }
             if (d[ouid].Kevlar < 0) {
               if (d[ouid].Kevlar < e.table[d[uid].Weapon].Penetration) {
                 hit(1.5)
               } else if (d[ouid].Kevlar == e.table[d[uid].Weapon].Penetration) {
                 hit(2)
               } else if (d[ouid].Kevlar > e.table[d[uid].Weapon].Penetration) {
                 hit(3)
              }
             } else {
               hit(1)
             }

             // Different outcomes for a Bodyshot
             if (d[ouid].Body > 5) {
               if (d[ouid].Kevlar > 0) {
                 narration(`Vous êtes touché!`, `${usr} Une balle vous a touché au torse... Vous n'avez rien de trop grave votre gilet pare balle vous a protégé.`)
               } else  {
                 img2 = "https://i.ibb.co/ySy6TfC/wounded.jpg"
                 narration(`Vous êtes blessé!`, `${usr} Une balle vous a touché au torse... Vous n'avez rien de trop grave, mais vous avez une douleur insupportable.`, img2)
                 message.channel.send()
               }
             } else if (d[ouid].Body < 5 && d[ouid].Body > 2) {
               if (d[ouid].Kevlar > 0) {
                 img2 = "https://i.ibb.co/ySy6TfC/wounded.jpg"
                 narration(`Vous êtes blessé!`, `${usr} Une balle vous a touché au torse... Votre gilet vous a protégé mais vous avez des côtes cassées... La douleur est insupportable.`, img2)
               } else  {
                 img2 = "https://i.ibb.co/ySy6TfC/wounded.jpg"
                 narration(`Vous êtes blessé!`, `${usr} Une balle vous a touché au torse... Votre état est assez critique... Vous avez une grosse plaie et vous ne pouvez pas continuer à combattre.`, img2)
               }
             } else if (d[ouid].Body < 2 && d[ouid].Body > 0) {
               if (d[ouid].Kevlar > 0) {
                 img2 = "https://i.ibb.co/ySy6TfC/wounded.jpg"
                 narration(`Vous êtes blessé!`, `${usr} Une balle vous a touché au torse... Votre gilet vous a protégé mais vous êtes trop blessé... Votre état est critique... Vous vous évanouissez.`, img2)
               } else  {
                 img2 = "https://i.ibb.co/ySy6TfC/wounded.jpg"
                 narration(`Vous êtes blessé!`, `${usr} Une balle vous a touché au torse... Votre état est critique! Vous avez une plaie trop importante et vous vous évanouissez...`, img2)
               }
             } else if (d[ouid].Body <= 0) {
               img2 = "https://i.ibb.co/BLcZDmY/Dead.png"
               narration(`Vous êtes mort...`, `${usr} Une balle vous a touché au torse... Vous mourrez, cette fois ci la balle a touché un de vos organes vitaux et votre gilet n'a pas pu l'arrêter...`, img2)
               d[ouid].Alive = false
             }
           } else if (hitid == 1) {
             if (d[ouid].Helm == true) {
               d[ouid].Head = d[ouid].Head - 1
             } else {
               d[ouid].Head = d[ouid].Head - 2
             }
             if (d[ouid].Head == 0) {
               if ((Math.floor(Math.random() * 9) + 1) > 5) {
                 img2 = "https://i.ibb.co/ySy6TfC/wounded.jpg"
                 narration(`Vous êtes blessé!`, `${usr} Une balle vous a touché à la tête, heureusement pour vous ne mourrez pas... Mais votre état est critique. Quelqu'un doit venir vous sauver pour que vous surviviez....`, img2)
               } else {
                 img2 = "https://i.ibb.co/BLcZDmY/Dead.png"
                 narration(`Vous êtes mort...`, `${usr} Une balle vous a touché à la tête, vous tombez au sol et mourrez. La medecine ne pourra pas réparer ça... R.I.P ${usr}`, img2)
                 d[ouid].Alive = false
               }
             } else if (d[ouid].Head > 0) {
               narration(`Vous êtes touché!`, `${usr} Une balle vous a touché à la tête, heureusement pour vous votre casque arrête la balle, vous êtes désorienté dû au choc... Le casque n'arrêtera pas une autre balle...`)
             }
           }
           HitorMiss("Vous avez touché, votre tir était sur ", target, img)
         } else if (usr && d[ouid].Alive == false) {
           target = d[ouid].RPname
           HitorMiss("Vous tirez sur le corps inanimé de ", target, img)
         }
      } else if (hitchance < d[uid].P && jamchance > d[uid].jamchance && d[uid].jam == false && d[uid].Mag > 0 && d[uid].ACD == false){
        // Action if you miss your shot
        var target = ""

        const usr = message.mentions.users.first()

        var img = "https://i.ibb.co/xSV7Pv7/Missed.jpg"

        if (args[0] == "ennemy")
        {
          target = "un ennemi! Vous l'avez raté!"

        }  else if (usr) {
           const user = message.mentions.users.first().id
           var ouid = "a" + user

           target = d[ouid].RPname
         }

        HitorMiss("Vous avez raté votre tir sur ", target, img)
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
      .setTitle("Vous n'avez pas d'arme!!")

      message.channel.send(msg1)
    } else if (d[uid].ACD == true) {
      const msg1 = new RichEmbed()
      .setTitle("Vous êtes en train de faire une autre action...")

      message.channel.send(msg1)
  }
}
}
