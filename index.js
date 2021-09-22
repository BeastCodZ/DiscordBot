const { Client, Collection } = require("discord.js");
const fs = require("fs");
const Youtube = require('simple-youtube-api');
const youtube = new Youtube('AIzaSyCi6eI_js--2VkxJTcoe3uhPJW4A_PlIks')
const client = new Client({
    disableEveryone: true
});
//-----------------------------------------------------------------------------------------
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
//-----------------------------------------------------------------------------------------
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
//-----------------------------------------------------------------------------------------
client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);
    const activities_list = [
    "Dracula || The Perfect Bot", 
    `Dracula || Total Servers | ${client.guilds.cache.size}`,
    `Dracula || Watching ${client.users.cache.size} users`
    ];
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities 
        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 3000); // Runs this every 10 seconds.
});
//-----------------------------------------------------------------------------------------
client.on("message", async message => {
    const prefix = '-';
    const talkedRecently = new Set();
    if (message.author.bot) return;
	if (message.channel.type === 'dm') return;
	if (message.content.indexOf(prefix) !== 0) return;
	if (talkedRecently.has(message.author.id)) return;
	talkedRecently.add(message.author.id);
	setTimeout(() => {
		talkedRecently.delete(message.author.id); // To prevent spam
	}, 2500);
    const args = message.content.slice(prefix.length).trim().split(' ');
    const cmd = args.shift().toLowerCase();
	//-------------------------------------------------------------------------------------- short form for commands
	const sadangry = 'https://tenor.com/bkq3f.gif'
	const colors1 = [
        'FF6600',
		'FF781f',
		'FF7F50',
		'FF9d5c',
		'FFaf7a'
          ];
	      const colors = Math.floor(Math.random() * (colors1.length - 1) + 1); // generates a random number between 1 and the length of the activities 
    //---------------------------------------------------------------------------------------------------------
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) 
        command.run(client, message, colors);
});
//-----------------------------------------------------------------------------------------
const active = new Map();
client.ops = { active } 
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
client.login('NzEyMzY4MTc1NDYzMDA2MjY5.XsQikA.XIgTeKeRUp3wy-TAZnO5Y1th5pU');