const threadsRouter = require('express').Router()
const Thread = require('../models/thread')
const jwt = require('jsonwebtoken')

const getTokenFrom = (req) => {
  const auth = req.get('authorization')
  if (auth && auth.toLowerCase().startsWith('bearer ')) {
    return auth.substring(7)
  }
  return null
}


threadsRouter.get('/', async (req, res) => {
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

threadsRouter.delete('/:id', async (req, res, next) => {

  const token = getTokenFrom(req)
  let thread = null

  try {
    thread = await Thread.findById(req.params.id)
    const decodedToken = jwt.verify(token, process.env.SECRET)

    if (!token || !decodedToken.id) {
      res.status(401).json({ error: 'token missing' })
    } else if (decodedToken.id !== thread.user) {
      res.status(401).json({ error: 'token invalid' })
    } else {

      await Thread.findByIdAndRemove(req.params.id)
      res.status(204).end()
    }
  }
  catch (e) {
    next(e)
  }
})

threadsRouter.post('/', async (req, res, next) => {

  const body = req.body
  const token = getTokenFrom(req)

  if (!body.title || !body.message || body.title === undefined || body.message === undefined) {
    return res.status(400).json({
      error: 'content missing'
    })
  }
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return res.status(401).json({ error: 'token missing or invalid' }).end()
    } else {

      const thread = new Thread({
        title: body.title,
        message: body.message,
        date: new Date(),
        user: decodedToken.id
      })

      const savedThread = await thread.save()

      res.json(savedThread.toJSON())
    }
  } catch (e) {
    next(e)
  }
})

threadsRouter.put('/:id', async (req, res, next) => {

  const body = req.body
  const token = getTokenFrom(req)


  let thread = null
  try {
    thread = await Thread.findById(req.params.id)

  } catch (e) {
    next(e)
  }

  try {

    const decodedToken = jwt.verify(token, process.env.SECRET)

    if (!token || !decodedToken) {
      res.status(401).json({ error: 'token missing' })
    } else if (decodedToken.id !== thread.user) {

      res.status(401).json({ error: 'token invalid' })
    } else {

      let thread2 = await Thread.findById(req.params.id)

      if (body.message === null || body.message === undefined) {

        res.status(400).json({ error: 'message is missing' })
      } else {
        thread2.message = body.message
        const response = await thread2.save()
        res.json(thread2.toJSON())
      }
    }
  }
  catch (error) {
    next(error)
  }
})

module.exports = threadsRouter