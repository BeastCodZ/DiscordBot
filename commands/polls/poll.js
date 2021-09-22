const Discord = require("discord.js");

module.exports = {
    name: "poll",
    category: "poll",
    description: "make a poll",
    run: async (client, message, args, colors) => {    
//-----------------------------------------------------------------------------------------------------

	let perm = new Discord.MessageEmbed() 
  .setColor(`${colors}`)
  .setAuthor(client.user.username, client.user.avatarURL())
  .setDescription(`:fox: | **Grr...**, This command require you to have [Administrator] permission | :x:`)
  .setImage(`https://tenor.com/bkq3f.gif`)
  .setTimestamp()
	if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(perm)
let timeend = new Discord.MessageEmbed() 
  .setColor(`${colors}`)
  .setAuthor(client.user.username, client.user.avatarURL())
  .setDescription(`:fox: | There is always a time for a poll to end isn't it? | :x:`)
  .setImage(`https://tenor.com/bkq3f.gif`)
  .setFooter("Prefix: -poll [Time] [Name]")
  .setTimestamp()	
if(!args[0]) return message.channel.send(timeend)
let questionno = new Discord.MessageEmbed() 
  .setColor(`${colors}`)
  .setAuthor(client.user.username, client.user.avatarURL())
  .setDescription(`:fox: | Poll Name? | :x:`)
  .setImage(`https://tenor.com/bkq3f.gif`)
  .setFooter("Prefix: -poll [Time] [Name]")
  .setTimestamp()	
		if(!args[1]) return message.channel.send(questionno)
        let time = args[0];
        let question = args.slice(1).join(" ");
        let regex = new RegExp(/^([0-9]{2}|[0-9]{1})[sSmM]$/);
        if(regex.test(time)) {
            if(time.toLowerCase().endsWith('s')) {
                time = parseInt(time.substring(0, time.indexOf('s')));
                time *= 1000;
            } 
            else if(time.toLowerCase().endsWith('m')) {
                time = parseInt(time.substring(0, time.indexOf('m')));
                time *= 60 * 1000;
            }
            const embed = new Discord.MessageEmbed()
                .setTitle(question)
                .setDescription('React with 👍 or 👎')
                .setTimestamp();
            try {
                const polls = new Map();
                const userVotes = new Map();
                let filter = (reaction, user) => {
                    if(user.bot) return false;
                    if(['👍', '👎'].includes(reaction.emoji.name)) {
                        if(polls.get(reaction.message.id).get(user.id))
                            return false;
                        else {
                            userVotes.set(user.id, reaction.emoji.name);
                            return true;
                        }
                    }
                }
                let msg = await message.channel.send(embed);
                await msg.react('👍');
                await msg.react('👎');
                polls.set(msg.id, userVotes);
                let reactions = await msg.awaitReactions(filter, { time: time });
                let thumbsUp = reactions.get('👍');
                let thumbsDown = reactions.get('👎');
                let thumbsUpResults = 0, thumbsDownResults = 0;
                if(thumbsUp)
                    thumbsUpResults = thumbsUp.users.cache.filter(u => !u.bot).size;
                if(thumbsDown)
                    thumbsDownResults = thumbsDown.users.cache.filter(u => !u.bot).size;
                const resultsEmbed = new Discord.MessageEmbed()
					.setcolor(`${colors}`)
                    .setTitle('Results')
                    .setDescription(`👍 - ${thumbsUpResults} votes\n\n👎 - ${thumbsDownResults} votes\n`);
                await message.channel.send(resultsEmbed);
            }
            catch(err) {
                console.log(err);
}
}
}};