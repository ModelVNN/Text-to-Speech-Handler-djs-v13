const { Client, Message } = require('discord.js')
const { getAudioUrl } = require("google-tts-api");
const {
  joinVoiceChannel,
  createAudioPlayer,
  createAudioResource,
} = require("@discordjs/voice");

module.exports = {
    name: "speak",
    description: "tts command",
    aliases: [],

    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */

    async execute(client, message, args) {
        if (!args[0]) return message.channel.send("You need to enter something!");
        const string = args.join(" ");
        if (string.length > 1024)
          return message.channel.send("Do not enter more than 1024 characters!");
        const audioUrl = getAudioUrl(string, {
          lang: "en",
          slow: false,
          host: "https://translate.google.com",
        });
        if (!message.member.voice.channel)
          return message.channel.send("You need to go to the voice channel!");
    
        const connection = joinVoiceChannel({
          channelId: message.member.voice.channel.id,
          guildId: message.guild.id,
          adapterCreator: message.guild.voiceAdapterCreator,
        });
    
        const resource = createAudioResource(audioUrl, {
          inlineVolume: true,
        });
    
        const player = createAudioPlayer();
        connection.subscribe(player);
        player.play(resource);
    }
}