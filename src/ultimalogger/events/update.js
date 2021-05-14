const axios = require("axios")
const Discord = require('discord.js');
const version = process.env.VERSION;

module.exports = {
    name: "update",
    run: async(ultima) => {
        var owner = await ultima.fetchApplication()

console.log('Checking for updates...');

var buff = (await axios({
    url: new URL("https://doesultimaneedupdating.slenky.net").toString(),
    responseType: "json"
})).data;

 if(buff.current !=`${version}`) {
     console.log('* Update available! Get it from GitHub SlenkyDev/UltimaLogger.')
     var updatepls = new Discord.MessageEmbed()
     .setTitle('⚠️Update available!')
     .setDescription('A new update for UltimaLogger is available!\nGet it today on [GitHub](https://github.com/SlenkyDev/UltimaLogger).')
     .setFooter('Make sure to update the .env file "version" or setup the bot again!', 'https://i.imgur.com/TUc5NXjh.jpg')
     .setColor("#68D89C")
     return ultima.users.cache.get(owner.owner.id).send(updatepls)
 }

 if(buff.current =`${version}`) {
     console.log('* The bot is up to date!')
}

 

    }}