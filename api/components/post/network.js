const express = require('express');
const response = require('../../../network/response');
const Controller = require('./index');
const secure = require('./secure')
const router = express.Router();

// Routes
router.get('/', list);
router.post('/', insert)
router.get('/:id', getPost)
router.put('/', update)

//Variables
let insertValue = false

// functions
function list(req, res, next) {
    Controller.list()
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(next);
}

function insert(req, res, next) {

    insertValue = true

    Controller.upsert(req.body, insertValue)
        .then((post) => {
            response.success(req, res, post, 200)
        })
        .catch(next)
}

function getPost(req, res, next) {
    Controller.get(req.params.id)
        .then((post) => {
            response.success(req, res, post, 200)
        })
        .catch(next)
}

function update(req, res, next) {

    insertValue = false
    Controller.upsert(req.body, insertValue)
        .then((post) => {
            response.success(req, res, post, 201)
        })
        .catch(next)

}

module.exports = router;