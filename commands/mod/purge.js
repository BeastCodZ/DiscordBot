const Discord = require("discord.js");
 
 module.exports = {
    name: "purge",
    category: "mod",
    description: "deletes useless chat",
    run: async (client, message, args, colors) => {    
//-----------------------------------------------------------------------------------------------------
    let perm = new Discord.MessageEmbed() 
    .setColor(`${colors}`)
    .setAuthor(client.user.username, client.user.avatarURL())
    .setDescription(`:fox: | **Vrr...**, This command require you to have [Manage Messages] permission | :x:`)
    .setImage(`https://tenor.com/bkq3f.gif`)
    .setTimestamp()  
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(perm)
		const amount = parseInt(args[0]);
//------------------------------------------------------------------------------------------------------------------
        if (amount <= 1 || amount > 100) {
			let invalidnumber = new Discord.MessageEmbed() 
    .setColor(`${colors}`)
    .setAuthor(client.user.username, client.user.avatarURL())
    .setDescription(`:fox: | **Vrr...**, bots can delete only 1-100 messages | :x:`)
    .setImage(`https://tenor.com/bkq3f.gif`)
    .setTimestamp()
        return message.reply(invalidnumber);
        }
//------------------------------------------------------------------------------------------------------------------	
   /*const nomsg = new Discord.MessageEmbed() 
            .setColor(`${colors}`)
            .setAuthor(client.user.username, client.user.avatarURL())
            .setDescription(`:fox: | **Duh**, Enter the amount of messages to delete :neutral_face: | :x:`)
            .setImage(`https://tenor.com/bkq3f.gif`)
            .setTimestamp()
		if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
        return message.channel.send(nomsg)*/
		//if (isNaN(amount)) return message.channel.send("Yeah... That's not a number? I also can't delete 0 messages by the way.")//.then(m => m.delete(5000));
	
		if (isNaN(args[0])) return message.channel.send("no number")
		else message.channel.send("number")
//----------------------------------------------------------------------
 if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
 return message.channel.send("Sorry... I can't delete messages.")
    }
 //-----------------------------------------------------------------------
        message.channel.bulkDelete(amount, true).catch(err => {
	let done = new Discord.MessageEmbed() 
        .setColor(`${colors}`)
        .setAuthor(client.user.username, client.user.avatarURL())
        .setDescription(`:fox: | **Woof...**, Cleaned ${amount} of messages | :white_check_mark:`)
        .setImage('https://tenor.com/buUPV.gif')
        .setTimestamp()
        message.channel.send(done);
        })
 }
 }