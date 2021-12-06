module.exports = {
    name: 'rickroll',
    description: "This command rickrolls a member.",
    execute(msg, args) {
        let dUser = msg.guild.member(msg.mentions.users.first()) 
        if (!dUser) return msg.channel.send("Can't find user!");
        dUser.send('Never gonna give you up')
        dUser.send('Never gonna let you down')
        dUser.send('Never gonna run around and desert you')
        dUser.send('Never gonna make you cry')
        dUser.send('Never gonna say goodbye')
        dUser.send('Never gonna tell a lie and hurt you')
    }
}