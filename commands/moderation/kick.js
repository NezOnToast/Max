const Discord = require('discord.js')
module.exports = {
    name: 'kick',
    description: 'Kicks a specified user from the server',
    guildOnly: true,
    cooldown: 5,
    permissions: ['KICK_MEMBERS', 'ADMINISTRATOR'],
    args: true,
    usage: "<user> <reason>",
    async execute(client, message, args) {
        const user = message.mentions.users.first();
        let reason = args.slice(1).join(' ');
        if (!reason) reason = 'No reason was specified';

        const kickEmbed = new Discord.MessageEmbed()
        .setTitle(`You were kicked from, **${message.guild.name}**`)
        .setDescription(`Reason : "**${reason}**"`)
        .setColor("RED")
        .setTimestamp()
        .setFooter(client.user.tag, client.user.displayAvatarURL())

        const userError = new Discord.MessageEmbed()
        .setTitle(`**ERROR**`)
        .setDescription(`This user is not a valid member of the server!`)
        .setColor("RED")
        .setTimestamp()
        .setFooter(client.user.tag, client.user.displayAvatarURL())

        const kickSuccess = new Discord.MessageEmbed()
        .setTitle(`**SUCCESS**`)
        .setDescription(`${user.tag} was kicked.`)
        .setColor("GREEN")
        .setTimestamp()
        .setFooter(client.user.tag, client.user.displayAvatarURL())

        const Error = new Discord.MessageEmbed()
        .setTitle(`**ERROR**`)
        .setDescription(`I was unable to kick this user...`)
        .setColor("RED")
        .setTimestamp()
        .setFooter(client.user.tag, client.user.displayAvatarURL())

        if (!user) return message.channel.send(userError);

        try {
            await user.send(kickEmbed);
        } catch (err) {

        };

        try {
            await message.mentions.members.first().kick(reason);
        } catch (err) {
            message.channel.send(Error);
            console.log(err);
            return
        };

        try {
            await message.channel.send(kickSuccess);
        } catch (err) {

        };
    },
};