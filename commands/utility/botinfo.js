const Discord = require("discord.js");
const moment = require('moment');
module.exports = {
    name: "botinfo",
    category: "utility",
    description: "bot info",
    run: async (client, message, args, colors) => {
//----------------------------------------------------------------------------------------
        const members = client.users.cache.size;
        //const channels = client.guild.cache.cache;
		const embed = new Discord.MessageEmbed()
			.setDescription(`**Kurama**`)
			.setColor(`${colors}`)
			.setImage('https://cdn.discordapp.com/attachments/845615006347296798/847344823492542474/lol.jpg')
		message.channel.send(embed);
	}
}