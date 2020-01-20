const express = require('express')
const app = express()
const user = require('./components/user/network')
const auth = require('./components/auth/network')
const config = require('../config.js')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')

app.use(bodyParser.json())

const swaggerDoc = require('./swagger.json')

//Router
app.use("/api/user", user)
app.use("/api/auth", auth)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto ', config.api.port);

})