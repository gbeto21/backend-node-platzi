const express = require('express')
const bodyParser = require('body-parser')
const config = require('../config')
const app = express()
const router = require('./network')
app.use(bodyParser.json())

//Rutas.

app.use('/', router)

app.listen(config.cacheService.port, () => {
    console.log('Servidio caché redis escuchando en el puerto', config.cacheService.port);

})
