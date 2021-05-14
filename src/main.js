/*
╭╮╱╭┳╮╱╭━━━━┳━━┳━╮╭━┳━━━┳╮╱╱╭━━━┳━━━┳━━━┳━━━┳━━━╮
┃┃╱┃┃┃╱┃╭╮╭╮┣┫┣┫┃╰╯┃┃╭━╮┃┃╱╱┃╭━╮┃╭━╮┃╭━╮┃╭━━┫╭━╮┃
┃┃╱┃┃┃╱╰╯┃┃╰╯┃┃┃╭╮╭╮┃┃╱┃┃┃╱╱┃┃╱┃┃┃╱╰┫┃╱╰┫╰━━┫╰━╯┃
┃┃╱┃┃┃╱╭╮┃┃╱╱┃┃┃┃┃┃┃┃╰━╯┃┃╱╭┫┃╱┃┃┃╭━┫┃╭━┫╭━━┫╭╮╭╯
┃╰━╯┃╰━╯┃┃┃╱╭┫┣┫┃┃┃┃┃╭━╮┃╰━╯┃╰━╯┃╰┻━┃╰┻━┃╰━━┫┃┃╰╮
╰━━━┻━━━╯╰╯╱╰━━┻╯╰╯╰┻╯╱╰┻━━━┻━━━┻━━━┻━━━┻━━━┻╯╰━╯
*/

require('dotenv').config()
const Discord = require('discord.js');
const axios = require("axios");
const ultima = new Discord.Client();
const { GCommands } = require('gcommands');
const ultimaprefix = process.env.PREFIX;
const ultimatoken = process.env.TOKEN;
const ultimalog = process.env.LOG_CHANNEL;
const ultimaowner = process.env.GUILD_OWNER;
const ultimaversion = process.env.VERSION;

require("./server.js")(ultima)
ultima.events = new Discord.Collection();
require(`./ultimalogger/event`)(ultima);
console.log('* Constants loaded successfully!')

ultima.on('ready', () => ultima.events.get("update").run(ultima));

ultima.on("ready", () => {

    console.log('* Starting Ultima...');
    new GCommands(ultima, {
        cmdDir: "src/ultimalogger/commands",
        slash: {
           slash: false,
           prefix: `${ultimaprefix}`,
        },
        cooldown: {
            message: "Please wait {cooldown} more seconds before using the \`{cmdname}\` command. 🥴",
            default: 1
        },
    })

    console.log('* Loaded command handler (Garlic-Team/GCommands)')
       /*
       Hey there, adventurer!
       Please do not remove the line of code under this message, it helps me provide Ultima for free to everyone! 🖤
       */
    ultima.user.setActivity('https://github.com/SlenkyDev/UltimaLogger');
    console.log('* Set activity! (Helps Ultima stay free!)')

    console.log(`* Logged in as ${ultima.user.tag}.`);
    console.log(`* Loaded ${ultima.users.cache.size} users.`);
    console.log(`* Loaded ${ultima.channels.cache.size} channels.`);

    
    console.log("╭╮╱╭┳╮╱╭━━━━┳━━┳━╮╭━┳━━━┳╮╱╱╭━━━┳━━━┳━━━┳━━━┳━━━╮");
    console.log("┃┃╱┃┃┃╱┃╭╮╭╮┣┫┣┫┃╰╯┃┃╭━╮┃┃╱╱┃╭━╮┃╭━╮┃╭━╮┃╭━━┫╭━╮┃");
    console.log("┃┃╱┃┃┃╱╰╯┃┃╰╯┃┃┃╭╮╭╮┃┃╱┃┃┃╱╱┃┃╱┃┃┃╱╰┫┃╱╰┫╰━━┫╰━╯┃");
    console.log("┃┃╱┃┃┃╱╰╯┃┃╰╯┃┃┃╭╮╭╮┃┃╱┃┃┃╱╱┃┃╱┃┃┃╱╰┫┃╱╰┫╰━━┫╰━╯┃");
    console.log("┃┃╱┃┃┃╱╭╮┃┃╱╱┃┃┃┃┃┃┃┃╰━╯┃┃╱╭┫┃╱┃┃┃╭━┫┃╭━┫╭━━┫╭╮╭╯");
    console.log("┃╰━╯┃╰━╯┃┃┃╱╭┫┣┫┃┃┃┃┃╭━╮┃╰━╯┃╰━╯┃╰┻━┃╰┻━┃╰━━┫┃┃╰╮");
    console.log("┃╰━╯┃╰━╯┃┃┃╱╭┫┣┫┃┃┃┃┃╭━╮┃╰━╯┃╰━╯┃╰┻━┃╰┻━┃╰━━┫┃┃╰╮");
    console.log("╰━━━┻━━━╯╰╯╱╰━━┻╯╰╯╰┻╯╱╰┻━━━┻━━━┻━━━┻━━━┻━━━┻╯╰━╯");
    console.log('⚠️ Disclaimer: Make sure your bot application is set as "private", if it is not, your bot may be added into servers other than yours, posing a security risk.')
})

ultima.login(ultimatoken);