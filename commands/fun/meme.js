const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports = {
    name: "meme",
    category: "fun",
    description: "sends you meme",
    run: async (client, message, args, Memer, colors) => {    
//----------------------------------------------------------------------------------------------------- 
  const subReddits = [
    "dankmemes"
]
 let random = subReddits[Math.floor(Math.random() * subReddits.length)];
 const img = await randomPuppy(random);
 const meme = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
 .setColor(`${colors}`)
 .setImage(img)
 message.channel.send(meme);
}};