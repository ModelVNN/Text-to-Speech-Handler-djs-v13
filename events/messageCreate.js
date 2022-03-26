const client = require('../index');

client.on('messageCreate', message => {
    if(message.author.bot || message.channel.type == "dm" || !message.content.startsWith(client.prefix)) return;

    const args = message.content.slice(client.prefix.length).split(/ +/);
    const cmdName = args.shift().toLocaleLowerCase();

    const cmd = client.commands.get(cmdName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName));

    if(!cmd) return;

    cmd.execute(client, message, args);
})