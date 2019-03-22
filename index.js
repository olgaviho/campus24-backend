require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
var morgan = require('morgan')
var logger = morgan('tiny')
app.use(cors())

app.use(express.static('build'))
app.use(bodyParser.json())
app.use(logger)

const Thread = require('./models/thread')


app.get('/api', (req, res) => {
  console.log("pipapo")
})

app.get('/api/threads', (req, res) => {
  Thread.find({}).then(threads => {
    res.json(threads.map(thread => thread.toJSON()))
  })
})

app.get('/api/threads/:id', (req, res, next) => {
  Thread.findById(req.params.id).then(thread => {
    if (thread) {
      res.json(thread.toJSON())
    } else {
      res.status(204).end()
    }
  })
    .catch(error => {
      next(error)
    })
})

app.delete('/api/threads/:id', (req, res, next) => {
  Thread.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(next)
})

app.post('/api/threads', (req, res, next) => {
  const body = req.body

  if (!body.title || !body.message || body.title === undefined || body.message === undefined) {
    return res.status(400).json({
      error: 'content missing'
    })
  }

  const thread = new Thread({
    title: body.title,
    message: body.message,
    date: new Date(),
  })

  thread.save().then(savedThread => {
    res.json(savedThread.toJSON())
  })
    .catch(next)
})

app.put('/api/threads/:id', (req, res, next) => {
  const body = req.body

  Thread.findById(req.params.id).then(thread => {
    if (thread === null) {

      throw "Thread deleted"
    }
    thread.message = body.message

    thread.save().then(() => {
      res.json(thread.toJSON())
    })
      .catch(error => next(error))
  }).catch(error => res.status(400).json({ error }))
})


const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) => {
  console.log('errorhandler', error)

  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return res.status(400).send({ error: 'malformatted id' })

  }
  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
