const Discord = require("discord.js");

module.exports = {
    name: "volume",
    category: "music",
    description: "volume changer",
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
        let novolume = new Discord.MessageEmbed()
        .setColor(`${colors}`)
        .setAuthor(client.user.username, client.user.avatarURL())
	    .setDescription(`:fox: | **Krr...**, how much volume huh? | :x:`)
	    .setTimestamp()
if(!args[0]) return message.channel.send(novolume)
if (message.member.voice.channel !== message.guild.me.voice.channel) return message.channel.send(skip5);
        let volumelimit = new Discord.MessageEmbed()
        .setColor(`${colors}`)
        .setAuthor(client.user.username, client.user.avatarURL())
	    .setDescription(`:fox: | Minimum Volume: 0 | :x:\n:fox: | Maximum Volume: 200 | :x:`)
	    .setTimestamp()
if (isNaN(args[0]) || args[0] > 200 || args[0] < 0) return message.channel.send(volumelimit);
fetched.dispatcher.setVolume(args[0]/100);
let volumed = new Discord.MessageEmbed()
        .setColor(`${colors}`)
        .setAuthor(client.user.username, client.user.avatarURL())
	    .setDescription(`:fox: | **Woof!..**, Volume has been set to ${args[0]} | :white_check_mark:`)
	    .setTimestamp()
message.channel.send(volumed);
}
}
