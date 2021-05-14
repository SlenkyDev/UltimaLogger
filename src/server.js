console.log('* Loading integrated web-server...')
const express = require('express');
const app = express()
const ultimaport = process.env.PORT;
const ultimaversion = process.env.VERSION;
console.log('* Loaded web-server constants...')

module.exports = (ultima) => {

  app.get('/', async (req, res) => { 
    res.header("Access-Control-Allow-Origin", "*");
    res.json({
        status: '200',
        version: `${ultimaversion}`,
        users: `${ultima.users.cache.size}`,
        channels: `${ultima.channels.cache.size}`,
    })
})

  app.listen(ultimaport);
  console.log(`* Loaded web-server; now listening on port ${ultimaport}. :)`)
}