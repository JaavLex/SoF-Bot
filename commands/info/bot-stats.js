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
      .addField("Bot Version :" , "v1.1.3")
      .addBlankField()
      .addField("Bot creator info :", `TacticsCH#2795`, true)
      .addField("GitHub :", `https://github.com/tacticsch/`, true)
      .setThumbnail("https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1ad2e474538729.5c361fd42e9a6.png")
      .setTimestamp()
    msg.edit(newmsg);
  }
}
