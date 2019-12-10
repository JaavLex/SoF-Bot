module.exports = {
  name: "bot-stats",
  category: "info",
  description: "Returns the server count and member count of the bot.",
  run: async (client, message, args) => {
    const { RichEmbed } = require("discord.js");

    const msg = await message.channel.send(`✍️ Searching stats... ✍️`);
    const newmsg = new RichEmbed()
      .setColor("#ff9900")
      .setTitle("**Info**")
      .addField("Servercount :", `**${client.guilds.size}**`, true)
      .addField("Usercount :", `**${client.users.size}**`, true)
      .addField("Text channels :", `**${client.channels.filter(c => c.type === 'text').size}**`, true)
      .addField("Bot Version :" , "v1.0")
      .addBlankField()
      .addField("Bot creator info :", `TacticsCH#2795`, true)
      .addField("GitHub :", `https://github.com/tacticsch/`, true)
      .setThumbnail("http://prod.cloud.rockstargames.com/crews/sc/9018/7471459/publish/emblems/77fabe97530898dcde3178def35477d2a40d8c50_512.png")
      .setTimestamp()
    msg.edit(newmsg);
  }
}
