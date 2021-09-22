const Discord = require("discord.js");

module.exports = {
    name: "skip",
    category: "music",
    description: "skips music",
    run: async (client, message, args, ops, colors) => {    
//-----------------------------------------------------------------------------------------------------

let fetched = client.ops.active.get(message.guild.id);
		let skip = new Discord.MessageEmbed()         
		.setColor(`${colors}`)
	    .setAuthor(client.user.username, client.user.avatarURL())
	    .setDescription(`:fox: | **Grr...**, there is nothing to skip | :x:`)
		.setImage(`https://tenor.com/bkq3f.gif`)
	    .setTimestamp()
if(!fetched) return message.channel.send(skip);
		let skip5 = new Discord.MessageEmbed()         
		.setColor(`${colors}`)
	    .setAuthor(client.user.username, client.user.avatarURL())
	    .setDescription(`:fox: | **Krr...**, you are not in the same voice channel | :x:`)
		.setImage(`https://tenor.com/bkq3f.gif`)
	    .setTimestamp()
if (message.member.voice.channel !== message.guild.me.voice.channel) return message.channel.send(skip5);
let required = Math.ceil(1);
if (!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];
let skip69 = new Discord.MessageEmbed()         
		.setColor(`${colors}`)
	    .setAuthor(client.user.username, client.user.avatarURL())
	    .setDescription(`:fox: | One time is enough | :x:`)
		.setImage(`https://tenor.com/bkq3f.gif`)
	    .setTimestamp()
if (fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(skip69);
fetched.queue[0].voteSkips.push(message.member.id);
client.ops.active.set(message.guild.id, fetched);

if (fetched.queue[0].voteSkips.length >= required) {
	 const embed1 = new Discord.MessageEmbed()
	 .setColor(`${colors}`)
	.setAuthor(client.user.username, client.user.avatarURL())
	.setDescription(`:fox: | **Woof!...**, Music Has been Skipped | :white_check_mark:`)
	.setTimestamp()
 message.channel.send(embed1);
	}
   return fetched.dispatcher.emit('finish');
message.channel.send(`Successfully voted to skip! ${fetched.queue[0].voteSkips.length}/${required} required`)
}
}