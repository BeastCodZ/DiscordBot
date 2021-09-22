const Discord = require("discord.js");

module.exports = {
    name: "nuke",
    category: "mod",
    description: "deletes and remakes the channel",
    run: async (client, message, args, colors) => {    
//-----------------------------------------------------------------------------------------------------
let perm = new Discord.MessageEmbed() 
.setColor(`${colors}`)
.setAuthor(client.user.username, client.user.avatarURL())
.setDescription(`:fox: | **Vrr...**, This command require you to have [Administrator] permission | :x:`)
.setImage(`https://tenor.com/bkq3f.gif`)
.setTimestamp()
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(perm)   
    async function wipe() {
        var message_size = 100;
        while (message_size == 100) {
            await message.channel.bulkDelete(100)
        .then(messages => message_size = messages.size)
        .catch((err) => {
          //  message.channel.clone()
           // message.channel.delete()
        })
        }
        let perm = new Discord.MessageEmbed() 
    .setColor(`${colors}`)
    .setAuthor(client.user.username, client.user.avatarURL())
    .setDescription(`:fox: | **Nuked** | :white_check_mark:`)
    .setImage('https://tenor.com/bawdm.gif')
    .setTimestamp()
    }
    wipe()
}}