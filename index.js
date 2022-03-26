const { Client, Intents, Collection } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const { token } = require('./config.json')

client.commands = new Collection();

require('./handlers/baseHandler');

module.exports = client;
client.login(token, err => console.log(err));
