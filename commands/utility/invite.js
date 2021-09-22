const Discord = require("discord.js");
const Gamedig = require('gamedig');

module.exports = {
    name: "invite",
    category: "utility",
    description: "Invite the bot",
    run: async (client, message, args, colors) => {
//----------------------------------------------------------------------------------------
const Embed = new Discord.MessageEmbed()
                .setTitle('Invite Link for the Bot')
                .addField('Invite Link :-', 'https://discord.com/api/oauth2/authorize?client_id=712368175463006269&permissions=8&scope=bot')
                message.channel.send(Embed)
}
};