// const request = require('request');
const fetch = require('node-fetch');
// const {postData} = require('./helpers/fetch_mods') 
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config');

// const url = 'https://discordapp.com/channels/177562553461899264/177562553461899264/messages?limit=50'
// const url = 'https://discordapp.com/channels/177562553461899264/177562553461899264'
const url = `https://discordapp.com/api`
const headers = {
        'Authorization': 'Bot ' + config.token,
        'Accept': 'application/json',
        'User-Agent': 'DiscordBot ()'
}

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith(`${config.prefix}raid`)) {
      message.channel.send("@here: https://imgur.com/OqRXrBV")
  }
  else if (message.content.startsWith(`${config.prefix}server`)) {
      message.channel.send(`This server is: ${message.guild.name}`);
  }
  else if (message.content.startsWith("hi smallcat")) {
    const smallyell = client.emojis.find("name", "smallyell")
    message.channel.send(`${smallyell}`)
  }
  else if (message.content.startsWith("help me smallcat")) {
    const smallyell = client.emojis.find("name", "smallyell")
    message.channel.send(`${smallyell} http://bfy.tw/3nV`)
  }
  else if (message.content.startsWith(`${config.prefix}happy`)) {
    message.channel.send("https://imgur.com/K5chYtk")
  }
  else if (message.content.startsWith(`${config.prefix}cuddle`)) {
    message.channel.send("https://imgur.com/HBDnuxL")
  }
  else if (message.content.startsWith(`${config.prefix}bitchwhat`)) {
    message.channel.send("https://imgur.com/CeAOEIq")
  }
  else if (message.content.startsWith(`${config.prefix}messages`)) {
    //message.channel will always refer to the current channel that this is invoked in
    message.channel.fetchMessages()
        .then( messages => messages.map( message => message.delete() ) )
        .catch(console.error);
  }
//   else if (message.content.startsWith(`${config.prefix}me`)) {
//     message.channel.send(`You are: ${message.author.username}`)
//   }
//   else if (message.content.startsWith("y")){
//     fetch(url)
//         .then(response => response.text())
//         .then(data => {console.log(JSON.stringify(data)); })
//   };
});

client.login(config.token);