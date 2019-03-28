var morgan = require('morgan')
var logger = morgan('tiny')

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' })
  }
  

const errorHandler = (error, req, res, next) => {
    console.log('errorhandler', error)
  
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
      return res.status(400).json({ error: 'malformatted id' })
  
    } else if (error.name === 'ValidationError') {
      return res.status(400).json({error: error.message})
    } else if (error.name === 'JsonWebTokenError') {
      return res.status(400).json({error: 'invalid token'})
    }

    next(error)
  }

module.exports = {
    logger,
    unknownEndpoint,
    errorHandler
}  