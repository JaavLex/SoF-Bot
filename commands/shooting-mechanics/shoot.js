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
    var hitchance = (Math.floor(Math.random() * 99) + 1);
    var jamchance = (Math.floor(Math.random() * 90) + 10);
    // Player ID
    var uid = "a" + message.author.id
    console.log(uid)
    // Round counter + weapon gets dirty with shots
   async function AmmoCount(){
     // Adds jamchance each shots
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
    }
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }



    if (args[0] && !args[1] && d[uid].Weapon != 0) {
      if (hitchance > d[uid].P && jamchance > d[uid].jamchance && d[uid].jam == false && d[uid].Mag > 0) {
        // Action if you hit your shot
        AmmoCount()
        const msg1 = new RichEmbed()
        .setTitle(`*BAM*`)
        .setImage("http://bestanimations.com/Military/Weapons/gun-animated-gif-4.gif")

        const msg = await message.channel.send(msg1)

        await sleep(700)

        const msg2 = new RichEmbed()
        .setTitle(`Touché!`)
        .setImage("https://st.depositphotos.com/1434993/3064/i/950/depositphotos_30644551-stock-photo-shoot-target-hit-the-heart.jpg")

        msg.edit(msg2)
      } else if (hitchance < d[uid].P && jamchance > d[uid].jamchance && d[uid].jam == false && d[uid].Mag > 0){
        // Action when you miss your shot
        AmmoCount()
        const msg1 = new RichEmbed()
        .setTitle(`*BAM*`)
        .setImage("http://bestanimations.com/Military/Weapons/gun-animated-gif-4.gif")

        const msg = await message.channel.send(msg1)

        await sleep(700)

        const msg2 = new RichEmbed()
        .setTitle(`Raté...`)
        .setImage("https://media.istockphoto.com/photos/target-missed-picture-id166156803")

        msg.edit(msg2)
      } else if (jamchance < d[uid].jamchance || d[uid].jam == true) {

        // Jams weapon if roll is higher than your jamming chance
        d[uid].jam = true
        utils.putData(d)

        const msg1 = new RichEmbed()
        .setTitle("Votre arme est enrayée")
        .setImage("https://cdn8.bigcommerce.com/s-g64i9l/product_images/uploaded_images/bolt-override-jam.jpg")

        message.channel.send(msg1)
      } else if (d[uid].Mag < 1) {

        // Action when weapon is empty
        const msg1 = new RichEmbed()
        .setTitle("*Clic*")
        .setImage("https://www.range365.com/resizer/lknnQzidbuKHl40S9JGWQqi3pDA=/760x506/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/4VQORSTASNQJJDIC2LKYBIXNZM.gif")

        message.channel.send(msg1)
      }
    } else if (d[uid].Weapon = 0) {

      // Rejects command if player doesn't have weapon
      const msg1 = new RichEmbed()
      .setTitle("Tu n'as pas d'arme!!")

      message.channel.send(msg1)
    }
  }
}
