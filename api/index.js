const express = require('express')
const app = express()
const user = require('./components/user/network')
const config = require('../config.js')

//Router
app.use("/api/user", user)

app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto ', config.api.port);

})