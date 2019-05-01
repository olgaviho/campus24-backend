const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const getTokenFrom = (req) => {
  const auth = req.get('authorization')
  if (auth && auth.toLowerCase().startsWith('bearer ')) {
    return auth.substring(7)
  }
  return null
}

usersRouter.get('/', async (req, res) => {
  const users = await User
    .find({}).populate('threads', { title: 1, message: 1 })
    .find({}).populate('comments', { message: 1 })
  res.json(users.map(u => u.toJSON()))
})

usersRouter.post('/', async (req, res, next) => {

  const body = req.body

  if (!body.username || !body.password || !body.name ||
    body.password === undefined || body.username === undefined || body.name === undefined) {
    return res.status(400).json({
      error: 'content missing'
    })
  }
  try {

    const saltRounds = 10

    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
      username: body.username,
      name: body.name,
      passwordHash,
    })

    const savedUser = await user.save()
    res.json(savedUser)

  } catch (e) {
    next(e)
  }
})

usersRouter.delete('/:id', async (req, res, next) => {

  const token = getTokenFrom(req)

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      res.status(401).json({ error: 'token missing or invalid ' })
    }

    await User.findByIdAndRemove(req.params.id)
    res.status(204).end()
  }
  catch (e) {
    next(e)
  }
})

module.exports = usersRouter