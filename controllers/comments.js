const commentsRouter = require('express').Router()
const Comment = require('../models/comment')
const jwt = require('jsonwebtoken')

const getTokenFrom = (req) => {
  const auth = req.get('authorization')
  if (auth && auth.toLowerCase().startsWith('bearer ')) {
    return auth.substring(7)
  }
  return null
}


commentsRouter.get('/', async (req, res) => {
  Comment.find({}).then(comments => {
    res.json(comments.map(c => c.toJSON()))
  })
})

commentsRouter.get('/:id', (req, res, next) => {
  Comment.findById(req.params.id).then(comment => {
    if (comment) {
      res.json(comment.toJSON())
    } else {
      res.status(204).end()
    }
  })
    .catch(error => {
      next(error)
    })
})


commentsRouter.post('/', async (req, res, next) => {

  // entä jos commentin thread.id on joku random merkkisarja?
  const body = req.body
  const token = getTokenFrom(req)

  if (!body.message || body.message === undefined) {
    return res.status(400).json({
      error: 'message missing'
    })
  }

  if (!body.threadId || body.threadId === undefined) {
    return res.status(400).json({
      error: 'thread missing'
    })
  }

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return res.status(401).json({ error: 'token missing or invalid' })
    }

    const comment = new Comment({
      message: body.message,
      date: new Date(),
      user: decodedToken.id,
      thread: body.threadId
    })


    const savedComment = await comment.save()

    res.json(savedComment.toJSON())
  } catch (e) {
    next(e)
  }
})


commentsRouter.delete('/:id', async (req, res, next) => {

  const token = getTokenFrom(req)
  let comment = null

  try {
    comment = await Comment.findById(req.params.id)
    const decodedToken = jwt.verify(token, process.env.SECRET)

    if (!token || !decodedToken.id) {
      res.status(401).json({ error: 'token missing' })
    } else if (decodedToken.id !== comment.user) {
      res.status(401).json({ error: 'token invalid' })
    } else {

      await Comment.findByIdAndRemove(req.params.id)
      res.status(204).end()
    }
  }
  catch (e) {
    next(e)
  }
})

commentsRouter.put('/:id', async (req, res, next) => {

  const body = req.body
  const token = getTokenFrom(req)

  let comment = null

  try {
    comment = await Comment.findById(req.params.id)

  } catch (e) {
    next(e)
  }

  try {

    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken) {
      res.status(401).json({ error: 'token missing' })
    } else if (decodedToken.id !== comment.user) {
      res.status(401).json({ error: 'token invalid' })
    } else {

      const comment = await Comment.findById(req.params.id)
      if (body.message === null || body.message === undefined) {
        res.status(400).json({ error: 'message is missing' })
      } else {
        comment.message = body.message
        const response = await comment.save()
        res.json(comment.toJSON())
      }
    }
  }
  catch (error) {
    next(error)
  }
})



module.exports = commentsRouter