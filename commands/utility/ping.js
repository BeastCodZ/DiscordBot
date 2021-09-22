const Discord = require("discord.js");

module.exports = {
    name: "ping",
    category: "utility",
    description: "Pong!",
    run: async (client, message, args, ops, colors) => {
//----------------------------------------------------------------------------------------
var yourping = new Date().getTime() - message.createdTimestamp
var botping = Math.round(client.ws.ping)
	 const help = new Discord.MessageEmbed()
	.setColor(`${colors}`)
	.setAuthor(client.user.username, client.user.avatarURL())
	.setDescription(`**Pong!**, Your ping is: ${yourping}ms!`)
    .setFooter(`Bot's ping: ${botping}`)
message.channel.send(help);
}
};