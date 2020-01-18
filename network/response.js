exports.success = function (req, res, message, status) {
    let statusCode = status || 200
    let statusMessae = message || ''
    
    res.status(status).send({
        error: false,
        status: status,
        body: message
    })
}

exports.error = function (req, res, message, status) {

    let statusCode = status || 500
    let statusMessae = message || 'Internal server error'


    res.status(statusCode).send({
        error: false,
        status: status,
        body: message
    })

}
