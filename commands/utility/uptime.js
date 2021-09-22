const Discord = require("discord.js");

module.exports = {
    name: "uptime",
    category: "utility",
    description: "online time of the bot",
    run: async (client, message, args, colors) => {
//----------------------------------------------------------------------------------------
let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;
const a = new Discord.MessageEmbed()
	 .setColor('GREEN')
	.setTitle('Uptime')
	.setAuthor(client.user.username, client.user.avatarURL())
	.setDescription('**The Bot is Running Since**')
	.setDescription(`${days}d ${hours}h ${minutes}m ${seconds}s`)

      message.channel.send(a);
      
      }
}