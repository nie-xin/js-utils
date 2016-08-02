function logger (request, response, next) {
    console.log('In comes a ' + request.method + ' to ' + request.url)
    next()
}
