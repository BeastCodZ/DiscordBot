const Discord = require("discord.js");
const ytdl = require ("ytdl-core");
const Youtube = require('simple-youtube-api');
const youtube = new Youtube('AIzaSyB81dWgWKPY8epJymeW_dr6Fl47lOjsNJw')

module.exports = {
    name: "play",
    category: "music",
    description: "plays music",
    run: async (client, message, args, ops, colors) => {     
//-----------------------------------------------------------------------------------------------------
let a = new Discord.MessageEmbed()         
		.setColor(`${colors}`)
	    .setAuthor(client.user.username, client.user.avatarURL())
	    .setDescription(`:fox: | **Grr...**, you are not in the voice channel | :x:`)
		.setImage(`https://tenor.com/bkq3f.gif`)
	    .setTimestamp()
if (!message.member.voice.channel) return message.channel.send(a);;
let b = new Discord.MessageEmbed()         
		.setColor(`${colors}`)
	    .setAuthor(client.user.username, client.user.avatarURL())
	    .setDescription(`:fox: | **Hrr...**, What you wanna listen huh? | :x:`)
		.setImage(`https://tenor.com/bkq3f.gif`)
	    .setTimestamp()
if(!args[0]) return message.channel.send(b)
let c = new Discord.MessageEmbed()         
		.setColor(`${colors}`)
	    .setAuthor(client.user.username, client.user.avatarURL())
	    .setDescription(`:fox: | **Brr...**, you are not in my voice channel | :x:`)
		.setImage(`https://tenor.com/bkq3f.gif`)
	    .setTimestamp()
if (!message.guild.me.voice.channel) return message.channel.send(c);
let question = args.slice(0).join(" ");
const videos = await youtube.searchVideos(question)
const video = await youtube.getVideoByID(videos[0].id)

const song = {	

id: video.id,
title: video.title,
url: `https://www.youtube.com/watch?v=${video.id}`
}
 let data = client.ops.active.get(message.guild.id) || {}
let connection = await message.member.voice.channel.join();
if (!data.connection) data.connection = await message.member.voice.channel.join();
if (!data.queue) data.queue = [];
data.guildID = message.guild.id;

//queue
data.queue.push({
	songTitle: song.title,
	requester: message.author.tag,
	url: song.url,
	announceChannel: message.channel.id,
	songId: song.id
});

if (!data.dispatcher) play(client, ops, data);
else {
		let queue = new Discord.MessageEmbed()         
		.setColor(`${colors}`)
	    .setAuthor(client.user.username, client.user.avatarURL())
		.setTitle("Added to queue")
	    .setDescription(`:fox: | Song Name: **${data.queue[0].songTitle}** | :white_check_mark:\n:fox: | Requested By: **${data.queue[0].requester} | :white_check_mark:**`)
		.setImage(`https://i3.ytimg.com/vi/${song.id}/maxresdefault.jpg`)
	    .setTimestamp()
		.setFooter(song.url)
	message.channel.send(queue);
}
client.ops.active.set(message.guild.id, data);

}	
}
async function play(client, ops, data) {
	let playing = new Discord.MessageEmbed()         
		.setColor(`${colors}`)
	    .setAuthor(client.user.username, client.user.avatarURL())
	    .setTitle("Now Playing")
		.setDescription(`:fox: | Song Name: **${data.queue[0].songTitle}** | :white_check_mark:\n:fox: | Requested By: **${data.queue[0].requester} | :white_check_mark:**`)
		.setImage(`https://i3.ytimg.com/vi/${data.queue[0].songId}/maxresdefault.jpg`)
	    .setTimestamp()
		.setFooter(data.queue[0].url)
    client.channels.cache.get(data.queue[0].announceChannel).send(playing)
	data.dispatcher = await data.connection.play(ytdl(data.queue[0].url, { bitrate: 1000000 }));
	 data.dispatcher.guildID = data.guildID;
	 data.dispatcher.once('finish', function() {
		finish(client, ops, this); 
	 });

}

function finish(client, ops, dispatcher) {
    let fetched = client.ops.active.get(dispatcher.guildID);

    fetched.queue.shift();

    if (fetched.queue.length > 0) {
        client.ops.active.set(dispatcher.guildID, fetched);

        play(client, ops, fetched);
    } else {
        client.ops.active.delete(dispatcher.guildID);

}}
