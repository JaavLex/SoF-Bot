const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
  name: "help",
  aliases: ["h"],
  category: "info",
  description: "Gives a list of all the commands",
  usage: "[command | alias]",
  run: async (client, message, args) => {
        if (args[0]) {
          return getCMD(client, message, args[0]);
        } else {
          return getAll(client, message);
        }
    }
  }

function getAll(client, message) {
  const embed = new RichEmbed()
  .setColor("#32CD32")
  .setTitle("**Command list :**")
  .setFooter("Type ~help [commandname] to have more info on a specific command")
  .setThumbnail("http://prod.cloud.rockstargames.com/crews/sc/9018/7471459/publish/emblems/77fabe97530898dcde3178def35477d2a40d8c50_512.png")
  .setTimestamp()

  const commands = (category) => {
      return client.commands
      .filter(cmd => cmd.category === category)
      .map(cmd => `- \`${cmd.name}\``)
      .join("\n");
  }

  const info = client.categories
  .map(cat => stripIndents`**${cat[0].toUpperCase() + cat.slice(1)}** \n${commands(cat)}`)
  .reduce((string, category) => string + "\n" + category);

  return message.channel.send(embed.setDescription(info));
}

function getCMD(client, message, input) {
  const embed = new RichEmbed()

  const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()));

  let info = `No info for command : **${input.toLowerCase()}**`;

  if (!cmd) {
      return message.channel.send(embed.setColor("RED").setDescription(info));
  }

  if (cmd.name) info = `**Command name**: ${cmd.name}`;
  if (cmd.aliases) info += `\n**Aliases**: ${cmd.aliases.map(a => `\`${a}\``).join(", ")}`;
  if (cmd.description) info += `\n**Description**: ${cmd.description}`;
  if (cmd.usage) {
      info += `\n**Usage**: ${cmd.usage}`;
      embed.setFooter(`Syntax: <> = required, [] = optional`);
  }

  return message.channel.send(embed.setColor("GREEN").setDescription(info));
}
