module.exports = {
    name: 'embed',
    description: "This command makes an embed.",
    execute(msg, args) {
        const Discord = require('discord.js');
        let messageSent = msg.content.substring(6);
        const msgEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Embed message')
        .setDescription('Message requested by <@' + msg.author + '>')
        .addFields(
            { name: 'Message:', value: messageSent },
        )
    msg.channel.send(msgEmbed)
    }
}