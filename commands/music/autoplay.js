const player = require('discord-player');


module.exports = {
  name: "autoplay",
  aliases: ['auto'],
  category: 'Music',
  utilisation: '{prefix}autoplay',
  description: "Plays the song automatically after the queue get ends",
  execute: async (client, message, args) => {
const queue = client.player.getQueue(message);

		const voice = message.member.voice.channel;
		if (!voice){
			return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);
		}

		if(!queue){
			return message.error(`${client.emotes.error} - There's no music playing`);
		}

		// Gets the current song
		await client.player.setAutoPlay(message, !queue.autoPlay);
        
		// Send the embed in the current channel
		message.channel.send(`${queue.autoPlay ? "ENABLED" : "DISABLED"}`);
        
	}

}
