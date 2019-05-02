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
  Comments.findById(req.params.id).then(comment => {
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
  const body = req.body
  const token = getTokenFrom(req)

  if (!body.message || body.message === undefined) {
    return res.status(400).json({
      error: 'message missing'
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
      user: body.userId,
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

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      res.status(401).json({ error: 'token missing or invalid ' })
    }

    await Comment.findByIdAndRemove(req.params.id)
    res.status(204).end()
  }
  catch (e) {
    next(e)
  }
})

commentsRouter.put('/:id', async (req, res, next) => {
  const body = req.body
  const token = getTokenFrom(req)

  try {

    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken) {
      res.status(401).json({ error: 'token missing or invalid' })
    }

    const comment = await Comment.findById(req.params.id)
    if (comment === null) {
      throw 'Comment deleted'
    }
  }
  catch (error) {
    res.status(400).json({ error: 'token can be missing or invalid' })
  }

  try {
    const comment = await Comment.findById(req.params.id)
    if (body.message === null) {
      throw 'new message missing'
    }
    comment.message = body.message
    await comment.save()
    res.json(comment.toJSON())
  }
  catch (error) {
    next(error)
  }
})



module.exports = commentsRouter