const express = require('express')
const router = express.Router()
const secure = require('./secure')
const response = require('../../../network/response')
const controller = require('./index')

router.get('/', list)
router.post('/follow/:id', follow)
router.get('/:id', secure('follow'), get)
router.post('/', insert)
router.put('/', secure('update'), update)

let insertValue = false

function list(req, res, next) {

    controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200)
        })
        .catch(next)
}

function get(req, res, next) {
    controller.get(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200)
        })
        .catch(next)
}

function insert(req, res, next) {

    insertValue = true
    controller.upsert(req.body, insertValue)
        .then((user) => {
            response.success(req, res, user, 201)
        })
        .catch(next)
}

function update(req, res, next) {

    insertValue = false
    controller.upsert(req.body, insertValue)
        .then((user) => {
            response.success(req, res, user, 201)
        })
        .catch(next)
}

function follow(req, res, next) {
    controller.follow(req.body.id, req.params.id)
        .then(data => {
            response.success(req, res, data, 201)
        })
        .catch(next)
}

module.exports = router