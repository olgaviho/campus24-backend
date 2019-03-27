var morgan = require('morgan')
var logger = morgan('tiny')

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' })
  }
  

const errorHandler = (error, req, res, next) => {
    console.log('errorhandler', error)
  
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
      return res.status(400).send({ error: 'malformatted id' })
  
    }
    next(error)
  }

module.exports = {
    logger,
    unknownEndpoint,
    errorHandler
}  