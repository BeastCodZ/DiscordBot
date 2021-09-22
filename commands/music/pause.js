const Discord = require("discord.js");

module.exports = {
    name: "pause",
    category: "music",
    description: "pauses music",
    run: async (client, message, args, ops, colors) => {    
//-----------------------------------------------------------------------------------------------------

let fetched = client.ops.active.get(message.guild.id);
let nosong = new Discord.MessageEmbed()         
		.setColor(`${colors}`)
	    .setAuthor(client.user.username, client.user.avatarURL())
	    .setDescription(`:fox: | **Grr...**, there is nothing to pause | :x:`)
		.setImage(`https://tenor.com/bkq3f.gif`)
	    .setTimestamp()
if(!fetched) return message.channel.send(nosong);
let b = new Discord.MessageEmbed()         
		.setColor(`${colors}`)
	    .setAuthor(client.user.username, client.user.avatarURL())
	    .setDescription(`:fox: | **Krr...**, you are not in the same voice channel | :x:`)
		.setImage(`https://tenor.com/bkq3f.gif`)
	    .setTimestamp()
        if (message.member.voice.channel !== message.guild.me.voice.channel) return message.channel.send(b);
let paused = new Discord.MessageEmbed()         
		.setColor(`${colors}`)
	    .setAuthor(client.user.username, client.user.avatarURL())
	    .setDescription(`:fox: | **Brr...**, The song is already paused | :x:`)
		.setImage(`https://tenor.com/bkq3f.gif`)
	    .setTimestamp()
if (fetched.dispatcher.paused) return message.channel.send(paused);

fetched.dispatcher.pause();
let pause = new Discord.MessageEmbed()         
		.setColor(`${colors}`)
	    .setAuthor(client.user.username, client.user.avatarURL())
	    .setDescription(`:fox: | **Woof...**, The Song has been paused | :white_check_mark:\nSong Name: **${fetched.queue[0].songTitle}**`)
	    .setTimestamp()
message.channel.send(pause);
}
}