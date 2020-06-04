const { info } = require("./logger")

const requestLogger = (request, response, next) => {
    info("Method: ", request.method)
    info("Path: ", request, path)
    info("BOdy: ", request.body)
    info("--------")
    next()
}

module.exports = {
    requestLogger
}