const express = require('express')
const router = express.Router()
const response = require('../../../network/response')
const controller = require('./controller')

router.get('/', function (req, res) {

    response.success(req, res, controller.list() , 200)

})

module.exports = router