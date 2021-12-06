const Discord = require('discord.js');
require('dotenv').config();
const fs = require('fs');
const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const client = new Discord.Client();
var guild = client.guilds.cache.get('708019919723298816');
const got = require('got');
const prefix = '<';
client.commands = new Discord.Collection();
for (const file of commandFiles) {
  const command = require('./commands/' + file);

  client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('your commands', { type: 'LISTENING' });
});

client.on('message', msg => {
  const args = msg.content.substring(prefix.length).split(' ');
  const cmd = args.shift().toLowerCase();
  if (msg.content.startsWith(prefix)) {
    if (msg.channel.type == "dm") {
        msg.channel.send('DM commands are not accepted!');
      
    } else {
      if (cmd === 'ping') {
        client.commands.get('ping').execute(msg, args);
      }
      if (cmd === 'help') {
        client.commands.get('help').execute(msg, args);
      }
      if (cmd === 'kick') {
        client.commands.get('kick').execute(msg, args);
      }
      if (cmd === 'ban') {
        client.commands.get('ban').execute(msg, args);
      }
      if (cmd === 'joke') {
        client.commands.get('joke').execute(msg, args);
      }
      if (cmd === 'mute') {
        client.commands.get('mute').execute(msg, args);
      }
      if (cmd === 'unmute') {
        client.commands.get('unmute').execute(msg, args);
      }
      if (cmd === 'clear') {
        client.commands.get('clear').execute(msg, args);
      }
      if (cmd === 'meme') {
        client.commands.get('meme').execute(msg, args);
      }
      if (cmd === 'say') {
        client.commands.get('say').execute(msg, args, client);
      }
      if (cmd === 'userinfo') {
        client.commands.get('userinfo').execute(msg, args, client);
      }
      if (cmd === 'embed') {
        client.commands.get('embed').execute(msg, args)
      }
      if (cmd === `dm`) {
        client.commands.get('dm').execute(msg, args)
       }
       
       if (cmd === 'invite') {
        client.commands.get('invite').execute(msg, args);
      }
      if (cmd === 'rickroll') {
        client.commands.get('rickroll').execute(msg, args);
      }

      if (msg.content.includes('<@!810424132960518196')) {
        msg.author.send("By the way, my prefix is `<`.")
      }
    }
  }
});

client.login(process.env.DISCORD_TOKEN);