const { Client, RichEmbed, Collection } = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs");

const client = new Client({
  disableEveryone : true
});



client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler =>{
    require(`./handler/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`${client.user.username} is online!`);
    client.user.setPresence({
        status: "online",
        game: {
            name: "Bravo-six going dark... ~help for more info",
            type: "PLAYING"
        }
    })
});

client.on("message", async message => {
    const prefix = "~";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command)
        command.run(client, message, args);
});

client.login(process.env.TOKEN);
