const Discord = require('discord.js');

module.exports = {
    name: "howgay",
    describe: "Tells you how gay you are.",

    execute(message, args) {
        const member = message.mentions.users.first() || message.author

        const rng = Math.floor(Math.random() * 101);

        const embed = new Discord.MessageEmbed()
        .setTitle(`Gay Calculator`)
        .setDescription(`**${member.username} is ` + rng + `% Gay :rainbow:**`)
        .setColor("GREEN")

        message.channel.send(embed);
    }
}