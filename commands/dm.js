module.exports = {
    name: 'dm',
    description: "This command dms an user!",
    execute(msg, args) {
let dUser = msg.guild.member(msg.mentions.users.first()) 
if (!dUser) return msg.channel.send("Can't find user!");
let dMessage = args.join(' ').slice(22);
if (dMessage.length < 1) return msg.channel.send('You must supply a message!');

dUser.send(dMessage);

msg.channel.send(
 `${msg.author}, you have sent your message to ${dUser}`
);
    }
}