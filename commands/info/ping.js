const { Client, Message } = require('discord.js')

module.exports = {
    name: "ping",
    description: "ping command",
    aliases: ["pingpong", "pong"],

    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */

    async execute(client, message, args) {
        message.reply({content: "Pong! *" + client.ws.ping + "ms*.", allowedMentions: { repliedUser: false } });
    }
}