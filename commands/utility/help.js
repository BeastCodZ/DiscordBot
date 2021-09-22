const Discord = require("discord.js");

// this is my command handler dont worry about it it's pretty easy to edit
module.exports = {
    name: "help",
    category: "utility",
    description: "help the better one",
    run: async (client, message, args, colors) => {
//----------------------------------------------------------------------------------------
	
        const embed = new Discord.MessageEmbed() 
        .setColor(0xffffff) 
        .setFooter(`AceMultitarefa | The Multi Tasker`)
        .setDescription(`Please React Below for the category of commands\nYou want to see\n \n:warning: for Moderation Commands\n \n:musical_note: for Music commands\n \n:joy: for Fun commands\n \n:tada: for Giveaway commands\n \n:computer: for Utility commands\n \n⚔ to Cancel`)
        
        message.channel.send({embed}).then(msg => {
            msg.react('⚠️').then( r => {
            msg.react('🎵');
            msg.react('😂');
            msg.react('🎉');
            msg.react('💻');
            msg.react('⚔️');
        
           // How to create a filter examples 
            const closeFilter = (reaction, user) => reaction.emoji.name === '⚔️' && user.id === message.author.id
            const modFilter = (reaction, user) => reaction.emoji.name === '⚠️' && user.id === message.author.id
			const musicFilter = (reaction, user) => reaction.emoji.name === '🎵' && user.id === message.author.id
			const joyFilter = (reaction, user) => reaction.emoji.name === '😂' && user.id === message.author.id
			const giveawayFilter = (reaction, user) => reaction.emoji.name === '🎉' && user.id === message.author.id
			const utilityFilter = (reaction, user) => reaction.emoji.name === '💻' && user.id === message.author.id
        
                // actuall createReactionCollector with the filters
            const closemenu = msg.createReactionCollector(closeFilter, {timer: 6000})
            const modmenu = msg.createReactionCollector(modFilter, {timer: 6000})
			const musicmenu = msg.createReactionCollector(musicFilter, {timer: 6000})
			const joymenu = msg.createReactionCollector(joyFilter, {timer: 6000})
			const giveawaymenu = msg.createReactionCollector(giveawayFilter, {timer: 6000})
			const utilitymenu = msg.createReactionCollector(utilityFilter, {timer: 6000})
//-------------------------------------------------------------------			
			// example to do stuff after react
            closemenu.on('collect', (r, u) => {
                embed.setDescription("Close menu!")
                embed.setFooter(`Menu close`)
                msg.edit(embed).then(x => {
                    msg.delete()
                })
            })
//-------------------------------------------------------------------
			modmenu.on('collect', (r, u) => {
			    embed.setDescription('`-kick`:-Kicks a user from the server.\n`-ban`:-Bans a user from the server.\n`-mute`:-Mutes a user in the server.\n`-nuke`:-Deletes the whole channel and then makes a new one as same as the old one.\n`-purge`:- Deletes chats messages (1-100).')
				embed.setFooter('Moderation')
				msg.edit(embed)
				r.users.remove(r.users.cache.filter(u => u === message.author).first())
				})
//-------------------------------------------------------------------
            musicmenu.on('collect', (r, u) => {
                embed.setDescription('`-play`:-Plays you a Song in a voice channel.\n`-pause`:-Pause the playing music.\n`-resume`:-Resumes the paused music.\n`-queue`:- Shows the music queue.\n`-volume`:- Adjusts the volume from 0-200.\n`-leave`:- Leaves the voice channel.\n`-skip`:- Skip the current playing music and switches to the next one in the queue.')
                embed.setFooter("Music")
                msg.edit(embed)
				r.users.remove(r.users.cache.filter(u => u === message.author).first())
			})
//-------------------------------------------------------------------			
			joymenu.on('collect', (r, u) => {
                embed.setDescription('`-dog`:-Sends you a random picture of a dog.\n`-say`:-Make your message said by the bot.\n`-roast`:-Feeling Lazy? Let the bot roast!.\n`-meme`:- Sends you a random meme from the internet.')
				embed.setFooter("Fun")
                msg.edit(embed)
				r.users.remove(r.users.cache.filter(u => u === message.author).first())
			})
//-------------------------------------------------------------------			
            utilitymenu.on('collect', (r, u) => {
                embed.setDescription('`-botinfo`:-Shows the information of the bot.\n`-serverinfo`:-Shows the Server Information\n`-whois`:- Tells you about the user you ping.\n`-invite`:- Sends you a invite link to the support server and invite link of the bot.\n`-uptime`:- Shows you the Bot online time.')
				embed.setFooter("Utility")
                msg.edit(embed)
				r.users.remove(r.users.cache.filter(u => u === message.author).first())
			})
//-------------------------------------------------------------------			
            giveawaymenu.on('collect', (r, u) => {
                embed.setDescription('`-gstart`:-Starts the giveaway.\n`-gdelete`:-Delets an giveaway which is ended or being runned.\n`-greroll`:- Rerolls the winner of the giveaway.')
				embed.setFooter("giveaway")
                msg.edit(embed)
				r.users.remove(r.users.cache.filter(u => u === message.author).first())
			})
//-------------------------------------------------------------------			
          //  modmenu.on('collect', (r, u) => {
            //    embed.setDescription("3")
             //   embed.setFooter(`Menu name or idk`)
              //  msg.edit(embed)
            //})
                // removes the users reaction
				//r.users.remove(r.users.cache.filter(u => u === message.author).first())
                })
            })
          }
};