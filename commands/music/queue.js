const Discord = require("discord.js");

module.exports = {
    name: "queue",
    category: "music",
    description: "see the queue",
    run: async (client, message, args, ops, colors) => {    
//-----------------------------------------------------------------------------------------------------
let fetched = client.ops.active.get(message.guild.id);
let a = new Discord.MessageEmbed()         
		.setColor(`${colors}`)
	    .setAuthor(client.user.username, client.user.avatarURL())
	    .setDescription(`:fox: | **Grr...**, there is nothing in the queue | :x:`)
		.setImage(`https://tenor.com/bkq3f.gif`)
	    .setTimestamp()
if(!fetched) return message.channel.send(a);
let queue = fetched.queue
let nowPlaying = queue[0];
let resp = new Discord.MessageEmbed()         
		.setColor(`${colors}`)
	    .setAuthor(client.user.username, client.user.avatarURL())
	    .setDescription(`**Now Playing**\n:fox: | **Song Name:** ${nowPlaying.songTitle}\n**Requested By:** ${nowPlaying.requester} | :white_check_mark:\n**Queue**\n`)
	    .setTimestamp()
for (var i = 1; i < queue.length; i++) {
let c = new Discord.MessageEmbed()         
		.setColor(`${colors}`)
	    .setAuthor(client.user.username, client.user.avatarURL())
	    .setDescription(`${i}. **Song Name:**${queue[i].songTitle}\n**Requested By:** ${queue[i].requester}\n`)
	    .setTimestamp()
resp += c;
message.channel.send(resp);
}
}
}