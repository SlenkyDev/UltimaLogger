const Discord = require('discord.js');
const os = require("os");
const ultimaprefix = process.env.PREFIX;
const ultimatoken = process.env.TOKEN;
const ultimalog = process.env.LOG_CHANNEL;
const ultimaowner = process.env.GUILD_OWNER;
const ultimaversion = process.env.VERSION;

module.exports = {
    name: 'info',
    description: 'Displays information about this epical bot.',
    aliases: ["stats", "s", "i"],
    cooldown: 3,
    run: async(ultima, slash, message, args) => {
        var ultimainfo = new Discord.MessageEmbed()
        .setFooter('Like Ultima? Check out SlenkyDev/UltimaLogger on Github!', 'https://i.imgur.com/TUc5NXjh.jpg')
        .setColor("#68D89C")
        .setTitle('UltimaLogger')
        .addFields(
            { name: 'Version:', value: `${ultimaversion}`, inline: true },
            { name: 'Prefix:', value: `${ultimaprefix}`, inline: true },
            { name: 'Log:', value: `<#${ultimalog}>`, inline: true },
            { name: 'Users:', value: `${ultima.users.cache.size}`, inline: true },
            { name: 'Channels:', value: `${ultima.channels.cache.size}`, inline: true },
            { name: 'RAM Usage:', value: `${Math.trunc((process.memoryUsage().heapUsed) / 1024 / 1000)} MB / ${Math.trunc(os.totalmem() / 1024 / 1000)} MB (${Math.round((Math.round(process.memoryUsage().heapUsed / 1024 / 1024) / Math.round(os.totalmem() / 1024 / 1024)) * 100)}%)`, inline: true },
          )
        message.inlineReply(ultimainfo)
}}