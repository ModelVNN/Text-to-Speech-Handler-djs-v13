const { readdirSync } = require('fs');
const client = require('../index');

readdirSync('./events/').forEach(file => require('../events/' + file));

readdirSync('./commands/').forEach(dir => {
    const commands = readdirSync(`./commands/${dir}/`);

    commands.forEach(file => {
        const pull = require(`../commands/${dir}/${file}`);

        if(pull.name) {
            client.commands.set(pull.name, pull);
        } else {
            console.log(`${file} missing pull.name`);
        }
    });
});
