const Discord = require("discord.js");

module.exports = {
    name: "leave",
    category: "music",
    description: "leave voice channel",
    run: async (client, message, args,ops, colors) => {    
//-----------------------------------------------------------------------------------------------------
let b = new Discord.MessageEmbed()         
		.setColor(`${colors}`)
	    .setAuthor(client.user.username, client.user.avatarURL())
	    .setDescription(`:fox: | **Krr...**, you are not in the same voice channel | :x:`)
		.setImage(`https://tenor.com/bkq3f.gif`)
	    .setTimestamp()
        if (message.member.voice.channel !== message.guild.me.voice.channel) return message.channel.send(b);
client.ops.active.delete(message.guild.id);
message.member.voice.channel.leave();
let success = new Discord.MessageEmbed()         
		.setColor(`${colors}`)
	    .setAuthor(client.user.username, client.user.avatarURL())
	    .setDescription(`:fox: | *Woof...**, Cleared the queue and left the channel | :white_check_mark:`)
	    .setTimestamp()
message.channel.send(success);
}
};