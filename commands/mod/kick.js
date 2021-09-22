const Discord = require("discord.js");

module.exports = {
    name: "kick",
    category: "mod",
    description: "kicks the user",
    run: async (client, message, args, colors) => {    
//-----------------------------------------------------------------------------------------------------
let perm = new Discord.MessageEmbed() 
.setColor(`${colors}`)
.setAuthor(client.user.username, client.user.avatarURL())
.setDescription(`:fox: | **Grr...**, This command require you to have [Administrator] permission | :x:`)
.setImage(`https://tenor.com/bkq3f.gif`)
.setTimestamp()
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(perm)
//-----------------------------------------------------------------------------------------------------
if(args[1]){
const reason = `${message.author.tag} | Kicked ${args[0]} | Reason: ${args[1]}`
}
if(!args[1]){
const reason = `${message.author.tag} | Kicked ${args[0]} | Reason: Unspecified`
}
//-----------------------------------------------------------------------------------------------------    
const user = message.mentions.users.first();
  if (user) {
	const member = message.guild.member(user);
	if (member) {
	  member.kick({
		reason: `${reason}`,
	  }).then(() => {
//-----------------------------------------------------------------------------------------------------
		  const gifs = [
		"https://tenor.com/0izk.gif",
		"https://tenor.com/zqBY.gif",
		"https://tenor.com/bkq3f.gif"
		];
		const index = Math.floor(Math.random() * (gifs.length - 1) + 1); // generates a random number between 1 and the length of the activities 
//-----------------------------------------------------------------------------------------------------
		let banned = new Discord.MessageEmbed() 
	.setColor(`${colors}`)
	  .setAuthor(client.user.username, client.user.avatarURL())
	  .setDescription(`:fox: | **Woof!**, ${args[0]}\n**Target Eliminated** | :white_check_mark:`)
	  .setImage(gifs[index])
	  .setTimestamp()
	  message.channel.send(banned)
//-----------------------------------------------------------------------------------------------------		
	  }).catch(err => {
	let error1 = new Discord.MessageEmbed() 
	.setColor(`${colors}`)
	  .setAuthor(client.user.username, client.user.avatarURL())
	  .setDescription(`:fox: | **Hrr...**, ${args[0]} have [Administrator] permission | :x:`)
	  .setImage('')
	  .setTimestamp()
	  message.channel.send(error1)
		console.error(err);
	  });
//-----------------------------------------------------------------------------------------------------
  } else {
	let error3 = new Discord.MessageEmbed() 
	.setColor(`${colors}`)
	  .setAuthor(client.user.username, client.user.avatarURL())
	  .setDescription(`:fox: | **Brr...**, Invalid user | :x:`)
	  .setImage('')
	  .setTimestamp()
	  message.channel.send(error3)
	}
}
}};