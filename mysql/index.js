const express = require('express')
const bodyParser = require('body-parser')
const config = require('../config')
const app = express()
const router = require('./network')
app.use(bodyParser.json())

//Rutas.

app.use('/', router)

app.listen(config.mysqlService.port, () => {
    console.log('Servidio mysql escuchando en el puerto', config.mysqlService.port);

})
