module.exports = {
    name: 'say',
    description: "With this command, you can make the bot say something!",
    execute(msg, args) {
        
        if (args[0]) {
            msg.channel.bulkDelete(1)
            let sendMessage = msg.content.substring(4);
            msg.channel.send(sendMessage)
            
        } else {
            msg.channel.send('Command usage: **say <word 1> <word 2> <word 3> etc.**')
        }
    }
}