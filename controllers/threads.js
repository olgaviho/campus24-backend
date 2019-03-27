const threadsRouter = require('express').Router()
const Thread = require('../models/thread')


threadsRouter.get('/', (req, res) => {
  Thread.find({}).then(threads => {
    res.json(threads.map(thread => thread.toJSON()))
  })
})

threadsRouter.get('/:id', (req, res, next) => {
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

threadsRouter.delete('/:id', (req, res, next) => {
  Thread.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(next)
})

threadsRouter.post('/', (req, res, next) => {
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

threadsRouter.put('/:id', (req, res, next) => {
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




module.exports = threadsRouter