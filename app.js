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
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
  else if (message.content.startsWith(`${config.prefix}raid`)) {
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
  else if (message.content.startsWith("happy")) {
    message.channel.send("https://imgur.com/K5chYtk")
  }
  else if (message.content.startsWith("cuddle")) {
    message.channel.send("https://imgur.com/HBDnuxL")
  }
  else if (message.content.startsWith("bitchwhat")) {
    message.channel.send("https://imgur.com/CeAOEIq")
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