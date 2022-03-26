const { Client, Intents, Collection } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

require('dotenv').config();

client.commands = new Collection();
client.slashCommands = new Collection();

require('./handlers/baseHandler');

module.exports = client;
client.login(process.env.TOKEN, err => console.log(err));
