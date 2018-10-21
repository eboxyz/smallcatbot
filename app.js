const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config');
const cron = require('cron').CronJob;

const commands = "`!raid`, `!wrongchat`, `!banquet`, `!server`, `!happy`, `!cuddle`, `!bitchwhat`, `!wink`, `!nudes`, `hi smallcat`, `help me smallcat`"

client.on("message", (message) => {
    console.log(message.author.username + ": " + message.content)

    if (message.content.startsWith(`${config.prefix}commands`)) {
        message.channel.send(`My current commands are: ${commands}`)
    }
    else if (message.content.startsWith(`${config.prefix}please`)) {
        message.channel.send(`https://imgur.com/Y4hKCnB`)
    }
    else if (message.content.startsWith(`${config.prefix}wrongchat`)) {
        message.channel.send(`https://imgur.com/CLD8XXW`)
    }
    else if (message.content.startsWith(`${config.prefix}banquet`)) {
        message.channel.send(`https://imgur.com/zeuN3ZR`)
    }
    else if (message.content.startsWith(`${config.prefix}raid`)) {
        message.channel.send("@here raidtime!!: https://imgur.com/Ep26FN8")
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
        message.channel.send("https://imgur.com/VKbBiK1")
    }
    else if (message.content.startsWith(`${config.prefix}cuddle`)) {
        message.channel.send("https://imgur.com/VkZGqXb")
    }
    else if (message.content.startsWith(`${config.prefix}bitchwhat`)) {
        message.channel.send("https://imgur.com/jiWgckm")
    }
    else if (message.content.startsWith(`${config.prefix}nudes`)) {
        message.channel.send("https://i.imgur.com/fjj9HHl.jpg")
    }
    else if (message.content.startsWith(`${config.prefix}wink`)) {
        message.channel.send("https://imgur.com/Of6iJPr")
    }
    else if (message.content.startsWith(`${config.prefix}messages`)) {
        //message.channel will always refer to the current channel that this is invoked in
        message.channel.fetchMessages()
            .then(messages => messages.map(message => message.delete()))
            .catch(console.error);
    }
});

client.login(config.token).then(() => { console.log('meow!') });

const raidjob1 = new cron({
    cronTime: '0 0 13 * * *',
    onTick: function () {
        const guild = client.guilds.get('472829226094166034')
        const channel = guild.channels.get('472829227159257099')
        channel.send("!raid")
    },
    start: true,
    timeZone: 'America/Los_Angeles'
});
raidjob1.start();

const raidjob2 = new cron({
    cronTime: '0 0 21 * * *',
    onTick: function () {
        const guild = client.guilds.get('472829226094166034')
        const channel = guild.channels.get('472829227159257099')
        channel.send("!raid")
    },
    start: true,
    timeZone: 'America/Los_Angeles'
});
raidjob2.start();

const banquetjob = new cron({
    cronTime: '0 55 18 * * *',
    onTick: function () {
        const guild = client.guilds.get('472829226094166034')
        const channel = guild.channels.get('472829227159257099')
        channel.send("@here: banquet is in 5")
        channel.send("!banquet")
    },
    start: true,
    timeZone: 'America/Los_Angeles'
})
banquetjob.start();

console.log('raidjob1 is running?', raidjob1.running)
console.log('raidjob2 is running?', raidjob2.running)
console.log('banquetjob is running?', banquetjob.running)