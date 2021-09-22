const Discord = require("discord.js");
const fetch = require('node-fetch');

module.exports = {
    name: "dog",
    category: "animal",
    description: "dog picture",
    run: async (client, message, args, colors) => {    
//-----------------------------------------------------------------------------------------------------
    let doggo = await fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(json => json.message);
    let a = new Discord.MessageEmbed()
        .setAuthor(client.user.username, client.user.avatarURL())
        .setColor(`${colors}`)
        .setImage(doggo)
        .setTimestamp();
    message.channel.send(a);

}
};