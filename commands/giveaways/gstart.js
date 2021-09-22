const Discord = require("discord.js");
const client = new Discord.Client();
const { GiveawaysManager } = require("discord-giveaways");
const ms = require("ms");

module.exports = {
    name: "gstart",
    category: "Giveaway",
    description: "giveaway start",
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
    .setDescription(`:fox: | **Grr...**, enter time for the giveaway | :x:`)
    .setImage(`https://tenor.com/bkq3f.gif`)
    .setTimestamp()
   if(!args[0]) return message.channel.send(noargs) 
   let noargs1 = new Discord.MessageEmbed() 
   .setColor(`${colors}`)
   .setAuthor(client.user.username, client.user.avatarURL())
   .setDescription(`:fox: | **Grr...**, enter winnercount too | :x:`)
   .setImage(`https://tenor.com/bkq3f.gif`)
   .setTimestamp()
  if(!args[1]) return message.channel.send(noargs1) 
  let noargs2 = new Discord.MessageEmbed() 
  .setColor(`${colors}`)
  .setAuthor(client.user.username, client.user.avatarURL())
  .setDescription(`:fox: | **Grr...**, there is no giveaway without a prize | :x:`)
  .setImage(`https://tenor.com/bkq3f.gif`)
  .setTimestamp()
 if(!args[2]) return message.channel.send(noargs2) 
 message.delete().catch(O_o=>{}); 
        client.giveawaysManager.start(message.channel, {
            time: ms(args[0]),
            winnerCount: parseInt(args[1]),
            prize: args.slice(2).join(" ")
        }).then((gData) => {
            console.log(gData); // {...} (messageid, end date and more)
        })
}};