const Discord = require("discord.js");
const client = new Discord.Client();
const { GiveawaysManager } = require("discord-giveaways");
const ms = require("ms");

module.exports = {
    name: "greroll",
    category: "giveaway",
    description: "giveaway reroll",
    run: async (client, message, args, colors) => {    
//-----------------------------------------------------------------------------------------------------
    let perm = new Discord.MessageEmbed() 
    .setColor(`${colors}`)
    .setAuthor(client.user.username, client.user.avatarURL())
    .setDescription(`:fox: | **Grr...**, This command require you to have [Administrator] permission | :x:`)
    .setImage(`https://tenor.com/bkq3f.gif`)
    .setTimestamp()

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(perm)
let noargs = new Discord.MessageEmbed() 
    .setColor(`${colors}`)
    .setAuthor(client.user.username, client.user.avatarURL())
    .setDescription(`:fox: | **Grr...**, go get the message id and enter that too | :x:`)
    .setImage(`https://tenor.com/bkq3f.gif`)
    .setTimestamp()
   if(!args[0]) return message.channel.send(noargs) 
    let messageID = args[0];
    client.giveawaysManager.reroll(messageID).then(() => {
    let success = new Discord.MessageEmbed() 
    .setColor(`${colors}`)
    .setAuthor(client.user.username, client.user.avatarURL())
    .setDescription(`:fox: | **Woof!**, Message ID: __${args[0]}__\n**Target Switched** | :white_check_mark:`)
    .setImage('https://giphy.com/gifs/naruto-rasengan-OU6tgBi0YJ4HK')
    .setTimestamp()
        message.channel.send(success);
    }).catch((err) => {
        let invalid = new Discord.MessageEmbed() 
    .setColor(`${colors}`)
    .setAuthor(client.user.username, client.user.avatarURL())
    .setDescription(`:fox: | **Grr...**, there is no giveaway with ${messageID} | :x:`)
    .setImage(`https://tenor.com/bkq3f.gif`)
    .setTimestamp()
        message.channel.send(invalid);
})
    }};