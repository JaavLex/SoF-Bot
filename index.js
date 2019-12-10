const { Client, RichEmbed, Collection } = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs");
const utils = require('./utils.js')

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

// Creates JSON beginning array
client.on('guildMemberAdd', member => {
  async function a() {
    d = await utils.readData()
    e = await utils.readWeap()

    var uid = "a" + member.id

    d[uid] = {
    ACD: false,
    RPname: "",
    Rank: "",
    Picture:"",
    Desc: "",
    Weapon: 0,
    Weapon2: 0,
    Weapon3: 0,
    Fullauto: false,
    Mag: 0,
    MagState: "full",
    E: 0,
    C: 0,
    S: 0,
    Ps: 0,
    P: 0,
    RC: false,
    jam: false,
    jamchance: 0,
    kevlar: 0,
    Helm: false,
    Head: 2,
    Body: 7,
    Legs: 4,
    Alive: true,
    cpup: false
    }

    await utils.putData(d)
  }
  a()
});

// Removes players array
client.on('guildMemberRemove', member => {
  async function b() {
    d = await utils.readData()
    e = await utils.readWeap()

    var uid = "a" + member.id

  delete d[uid]

  await utils.putData(d)
}

b()
});

client.login(process.env.TOKEN);
