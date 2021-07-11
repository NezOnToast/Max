const Discord = require('discord.js')
module.exports = {
    name: 'ban',
    description: 'Bans a specified user from the server',
    guildOnly: true,
    cooldown: 5,
    permissions: ['BAN_MEMBERS', 'ADMINISTRATOR'],
    args: true,
    usage: "<user> <reason>",
    async execute(client, message, args) {
        const user = message.mentions.users.first();
        let reason = args.slice(1).join(' ');
        if (!reason) reason = 'No reason was specified';

        const banEmbed = new Discord.MessageEmbed()
        .setTitle(`You were banned from, **${message.guild.name}**`)
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

        const banSuccess = new Discord.MessageEmbed()
        .setTitle(`**SUCCESS**`)
        .setDescription(`${user.tag} was banned.`)
        .setColor("GREEN")
        .setTimestamp()
        .setFooter(client.user.tag, client.user.displayAvatarURL())

        const Error = new Discord.MessageEmbed()
        .setTitle(`**ERROR**`)
        .setDescription(`I was unable to ban this user...`)
        .setColor("RED")
        .setTimestamp()
        .setFooter(client.user.tag, client.user.displayAvatarURL())

        if (!user) return message.channel.send(userError);

        try {
            await user.send(banEmbed);
        } catch (err) {

        };

        try {
            await message.mentions.members.first().ban();
        } catch (err) {
            message.channel.send(Error);
            console.log(err);
            return
        };

        try {
            await message.channel.send(banSuccess);
        } catch (err) {

        };
    },
};