const commentsRouter = require('express').Router()
const Thread = require('../models/thread')
const User = require('../models/user')
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
  const comments = await Comment
    .find({}).populate('user', { username: 1, name: 1 })
    .find({}).populate('thread', { title: 1, message: 1})

  res.json(comments.map(c => c.toJSON()))
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

    const user = await User.findById(body.userId)
    const thread = await Thread.findById(body.threadId)


    const comment = new Comment({
      message: body.message,
      date: new Date(),
      user: user._id,
      thread: thread.id
    })


    const savedComment = await comment.save()
    thread.comments = thread.comments.concat(savedComment._id)
    await thread.save()
    user.comments = user.comments.concat(savedComment._id)
    await user.save()


    res.json(savedComment.toJSON())
  } catch (e) {
    next(e)
  }
})



module.exports = commentsRouter