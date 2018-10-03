const Discord = require("discord.js");
const client = new Discord.Client();


client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
//   if (message.content.startsWith("!deleteall")){
//       postData(``)
//   }
//   if (message.content.startsWith("hi smallcat")) {
//       message.channel.send("meow")
//   }
  if (message.content.startsWith("hi smallcat")) {
    const smallyell = client.emojis.find("name", "smallyell")
    message.channel.send(`${smallyell}`)
  }
  if (message.content.startsWith("help me smallcat")) {
    const smallyell = client.emojis.find("name", "smallyell")
    message.channel.send(`${smallyell} http://bfy.tw/3nV`)
  }
});

client.login("NDk3MDkyNDQ5MDY0MTg5OTcy.DpaLIg.DGRFn2qjhS8uAFf6fFx1nhUVx8o");