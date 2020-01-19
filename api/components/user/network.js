const express = require('express')
const router = express.Router()
const response = require('../../../network/response')
const controller = require('./index')

router.get('/', function (req, res) {

    controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200)
        })
        .catch((err) => {
            response.error(req, res, err.message, 500)
        })

})

router.get('/:id', function (req, res) {
    controller.get(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200)
        })
        .catch((err) => {
            response.error(req, res, err.message, 500)
        })
})

router.post('/', function (req, res) {

    controller.upsert(req.body.data)
        .then(() => {
            response.success(req, res, null, 200)
        })
        .catch((err) => {
            response.error(req, res, err.message, 500)
        })

})

module.exports = router