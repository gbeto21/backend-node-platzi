const express = require('express')
const router = express.Router()
const response = require('../../../network/response')
const controller = require('./index')

router.post('/login', function (req, res) {
    controller.login(req.body.username, req.body.password)
        .then(token => {
            response.success(req, res, token, 200)
        })
        .catch(e => {
            console.error(e);
            response.error(req, res, 'Información inválida', 400)
        })
})

module.exports = router