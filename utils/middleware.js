var morgan = require('morgan')
var logger = morgan('tiny')



const errorHandler = (error, req, res, next) => {

  console.log('error', error)

  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return res.status(400).json({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  } else if (error.name === 'JsonWebTokenError') {
    return res.status(400).json({ error: 'invalid token' })
  } else if (error.name === 'MongoError') {
    return res.status(403).json({ error: 'username is not unique' })
  }

  next(error)
}

module.exports = {
  logger,
  errorHandler
}