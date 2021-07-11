module.exports = {
	name: 'args-info',
	description: 'Information about the arguments provided.',
    args: true,
	cooldown: 2,
	aliases: ['args', 'arguments'],
	execute(message, args) {
        if (args[0] === 'nez') {
			return message.channel.send('bot');
		}

		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};