const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config');
const cron = require('cron').CronJob;

const commands = "`!raid`, `!wrongchat`, `!banquet`, `!server`, `!happy`, `!cuddle`, `!bitchwhat`, `!wink`, `!nudes`, `hi smallcat`, `help me smallcat`"
const members = "6, lyre, gum, bon, egg, toff, yerr, poe, awuv, koko, greedy, jenny, boner, noise, kong, carmen"
const faces = new Map();
faces.set("6", [1, 2, 4]);
faces.set("lyre", [1, 2, 3, 4]);
faces.set("gum", [1, 2, 3, 4]);
faces.set("bon", [1]);
faces.set("egg", [1]);
faces.set("toff", [1, 2, 3]);
faces.set("yerr", [1]);
faces.set("poe", [1, 2, 3]);
faces.set("awuv", [1, 4]);
faces.set("koko", [1]);
faces.set("greedy", [3]);
faces.set("jenny", [3, 4]);
faces.set("boner", [3, 4]);
faces.set("noise", [3, 4]);
faces.set("kong", [4]);
faces.set("carmen", [4]);
faces.set("rin", [4]);

client.on("message", (message) => {
    console.log(message.author.username + ": " + message.content)

    if (message.content.startsWith(`${config.prefix}commands`)) {
        message.channel.send(`My current commands are: ${commands}`)
    }
    else if (message.content.startsWith(`${config.prefix}smallcat play despacito`)) {
        message.channel.send(`https://open.spotify.com/track/0zmOzthR1eSlpN0IMwzXyV?si=XZhBwiuaRjWRTDbC801znQ`)
    }
    else if (message.content.startsWith(`${config.prefix}members`)) {
        message.channel.send(`Members available: ${members}`)
    }
    else if (message.content.startsWith(`${config.prefix}checkface:`)) {
        s = message.content.split(':');
        name = s[1].toString().trim("");
        content = returnFaces(name);
        message.channel.send(content);
    }
    // else if (message.content.startsWith(`${config.prefix}membercommands`)) {
    //     message.channel.send(`My current friends are:${membercommands}`)
    // }
    else if (message.content.startsWith(`${config.prefix}6face1`)) {
        message.channel.send(`https://imgur.com/2BxhT8K`)
    }
    else if (message.content.startsWith(`${config.prefix}6face4`)) {
        message.channel.send(`https://i.imgur.com/994AwO7.png`)
    }
    else if (message.content.startsWith(`${config.prefix}6face2`)) {
        message.channel.send(`https://i.imgur.com/j9mmHMQ.png`)
    }
    else if (message.content.startsWith(`${config.prefix}gumface1`)) {
        message.channel.send(`https://imgur.com/yH3v2tk`)
    }
    else if (message.content.startsWith(`${config.prefix}gumface4`)) {
        message.channel.send(`https://i.imgur.com/OyGdir2.png`)
    }
    else if (message.content.startsWith(`${config.prefix}gumface3`)) {
        message.channel.send(`https://i.imgur.com/bwdKBT1.png`)
    }
    else if (message.content.startsWith(`${config.prefix}gumface2`)) {
        message.channel.send(`https://i.imgur.com/l2WCdGC.png`)
    }
    else if (message.content.startsWith(`${config.prefix}bonface1`)) {
        message.channel.send(`https://imgur.com/7kyV0VE`)
    }
    else if (message.content.startsWith(`${config.prefix}eggface1`)) {
        message.channel.send(`https://imgur.com/yEqTlFI`)
    }
    else if (message.content.startsWith(`${config.prefix}toffface1`)) {
        message.channel.send(`https://imgur.com/4n7TGE8`)
    }
    else if (message.content.startsWith(`${config.prefix}toffface3`)) {
        message.channel.send(`https://i.imgur.com/HaG9jex.png`)
    }
    else if (message.content.startsWith(`${config.prefix}toffface2`)) {
        message.channel.send(`https://i.imgur.com/3ysfkR7.png`)
    }
    else if (message.content.startsWith(`${config.prefix}yerrface1`)) {
        message.channel.send(`https://i.imgur.com/kdv6l72.png`)
    }
    else if (message.content.startsWith(`${config.prefix}poeface1`)) {
        message.channel.send(`https://imgur.com/wP5OIS0`)
    }
    else if (message.content.startsWith(`${config.prefix}poeface3`)) {
        message.channel.send(`https://i.imgur.com/5ssLmxZ.png`)
    }
    else if (message.content.startsWith(`${config.prefix}poeface2`)) {
        message.channel.send(`https://i.imgur.com/HhyoBFI.png`)
    }
    else if (message.content.startsWith(`${config.prefix}lyreface1`)) {
        message.channel.send(`https://imgur.com/E9riSg3`)
    }
    else if (message.content.startsWith(`${config.prefix}lyreface4`)) {
        message.channel.send(`https://i.imgur.com/DaVdqJi.png`)
    }
    else if (message.content.startsWith(`${config.prefix}lyreface3`)) {
        message.channel.send(`https://i.imgur.com/897C8yC.png`)
    }
    else if (message.content.startsWith(`${config.prefix}lyreface2`)) {
        message.channel.send(`https://i.imgur.com/QNckXMi.png`)
    }
    else if (message.content.startsWith(`${config.prefix}awuvface4`)) {
        message.channel.send(`https://i.imgur.com/i90UPeE.png`)
    }
    else if (message.content.startsWith(`${config.prefix}awuvface1`)) {
        message.channel.send(`https://i.imgur.com/A4wgvry.png`)
    }
    else if (message.content.startsWith(`${config.prefix}kokoface1`)) {
        message.channel.send(`https://i.imgur.com/rYKBwz9.png`)
    }
    else if (message.content.startsWith(`${config.prefix}greedyface3`)) {
        message.channel.send(`https://i.imgur.com/rOB7dfZ.png`)
    }
    else if (message.content.startsWith(`${config.prefix}jennyface4`)) {
        message.channel.send(`https://i.imgur.com/sK9ZYdl.png`)
    }
    else if (message.content.startsWith(`${config.prefix}jennyface3`)) {
        message.channel.send(`https://i.imgur.com/aiUGFJe.png`)
    }
    else if (message.content.startsWith(`${config.prefix}drholyface3`)) {
        message.channel.send(`https://i.imgur.com/AQ0OqPv.png`)
    }
    else if (message.content.startsWith(`${config.prefix}bonerface4`)) {
        message.channel.send(`https://i.imgur.com/m5znUEf.png`)
    }
    else if (message.content.startsWith(`${config.prefix}bonerface3`)) {
        message.channel.send(`https://i.imgur.com/Ilsu0HL.png`)
    }
    else if (message.content.startsWith(`${config.prefix}noiseface3`)) {
        message.channel.send(`https://i.imgur.com/8GKtquH.png`)
    }
    else if (message.content.startsWith(`${config.prefix}noiseface4`)) {
        message.channel.send(`https://i.imgur.com/HRtp9vg.png`)
    }
    else if (message.content.startsWith(`${config.prefix}kongface4`)) {
        message.channel.send(`https://i.imgur.com/qjL66aZ.png`)
    }
    else if (message.content.startsWith(`${config.prefix}carmenface4`)) {
        message.channel.send(`https://i.imgur.com/t5nI58N.png`)
    }
    else if (message.content.startsWith(`${config.prefix}rinface4`)) {
        message.channel.send(`https://i.imgur.com/FQwsCfx.png`)
    }
    else if (message.content.startsWith(`${config.prefix}please`)) {
        message.channel.send(`https://imgur.com/Y4hKCnB`)
    }
    else if (message.content.startsWith(`${config.prefix}wrongchat`)) {
        message.channel.send(`https://imgur.com/CLD8XXW`)
    }
    else if (message.content.startsWith(`${config.prefix}fort`)) {
        message.channel.send(`https://imgur.com/ozUPuNE`)
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
    else if (message.content.startsWith(`${config.prefix}pingy`)) {
        message.channel.send("https://imgur.com/c6V5XPw")
    }
    else if (message.content.startsWith(`${config.prefix}messages`)) {
        //message.channel will always refer to the current channel that this is invoked in
        message.channel.fetchMessages()
            .then(messages => messages.map(message => message.delete()))
            .catch(console.error);
    }
});

client.on('error', console.error);

client.login(config.token).then(() => { console.log('meow!') });

const raidjob1 = new cron({
    cronTime: '0 0 11 * * *',
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
    cronTime: '0 0 19 * * *',
    onTick: function () {
        const guild = client.guilds.get('472829226094166034')
        const channel = guild.channels.get('472829227159257099')
        channel.send("!raid")
    },
    start: true,
    timeZone: 'America/Los_Angeles'
});
raidjob2.start();

// const banquetjob = new cron({
//     cronTime: '0 25 19 * * *',
//     onTick: function () {
//         const guild = client.guilds.get('472829226094166034')
//         const channel = guild.channels.get('472829227159257099')
//         channel.send("@here: banquet is in 5")
//         channel.send("!banquet")
//     },
//     start: true,
//     timeZone: 'America/Los_Angeles'
// })
// banquetjob.start();

const fortjob = new cron({
    cronTime: '0 0 20 * * *',
    onTick: function () {
        const guild = client.guilds.get('472829226094166034')
        const channel = guild.channels.get('472829227159257099')
        channel.send("@here: fortnite time!!")
        channel.send("!fort")
    },
    start: true,
    timeZone: 'America/Los_Angeles'
})
fortjob.start();

console.log('raidjob1 is running?', raidjob1.running)
console.log('raidjob2 is running?', raidjob2.running)
console.log('fortnitejob is running?', fortjob.running)

function returnFaces(s) {
    f = faces.get(s)
    let command = `Available emotes for user ${s}: `
    for (i = 0; i < f.length; i++) {
        face = s + "face" + f[i] + " "
        command += face
    }
    return command
}