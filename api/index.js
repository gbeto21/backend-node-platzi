const express = require('express')
const app = express()
const user = require('./components/user/network')
const post = require('./components/post/network')
const auth = require('./components/auth/network')
const config = require('../config.js')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')
const errors = require('../network/errors')

app.use(bodyParser.json())

const swaggerDoc = require('./swagger.json')

//Router
app.use("/api/user", user)
app.use("/api/auth", auth)
app.use("/api/post", post)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

// app.use(errors)

app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto ', config.api.port);

})