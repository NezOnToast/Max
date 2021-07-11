module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
        const { motd, version } = require('../config.json')
		console.log(`Ready! Logged in as ${client.user.tag}`);
        client.user.setActivity(`${version}`, { type: 'WATCHING' });
	},
};