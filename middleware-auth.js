function auth (request, response, next) {
  var minute = (new Date()).getMinutes()

  if ((minute % 2) === 0) {
    next()
  }

  response.statusCode = 403
  response.end('Not authoriezd')
}
