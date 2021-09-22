const Discord = require("discord.js");

module.exports = {
    name: "say",
    category: "utility",
    description: "announcement",
    run: async (client, message, args, colors) => {
//----------------------------------------------------------------------------------------

    if(!args[0]) return message.channel.send("What do you want me to say?")
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(`${sayMessage}\n ~${message.author.tag}`)
    console.log(message.author.tag)
    console.log(`said ${sayMessage} in ${message.guild.name}`)
}
};