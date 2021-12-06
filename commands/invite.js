module.exports = {
    name: 'invite',
    description: "Issue this command to get the invite link!",
    execute(msg, args) {
        const Discord = require('discord.js');
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('INVITE LINK')
        .setAuthor('BIT', 'https://i.imgur.com/NPYUcDT.png')
        .setDescription('With this link you can invite the bot in your own server!.')
        .addFields(
            { name: 'Invite link:', value: '[**CLICK HERE**](https://discord.com/oauth2/authorize?client_id=810424132960518196&scope=bot&permissions=8)\n\n\n**OR CLICK THIS LINK:**\nhttps://discord.com/oauth2/authorize?client_id=810424132960518196&scope=bot&permissions=8' },
        )
    msg.channel.send(helpEmbed)
}
}