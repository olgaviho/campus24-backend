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
  User.find({}).then(users => {
    res.json(users.map(user => user.toJSON()))
  })
})

usersRouter.get('/:id', (req, res, next) => {
  User.findById(req.params.id).then(user => {
    if (user) {
      res.json((user).toJSON())
    } else {
      res.status(204).end()
    }
  })
    .catch(error => {
      next(error)
    })
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

  let userId = null
  try {
    const user = await User.findById(req.params.id)
    userId = user.id
  } catch (e) {
    next(e)
  }


  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)

    if (!token || !decodedToken.id) {
      res.status(401).json({ error: 'token missing' }).end()
    }

    if (decodedToken.id !== userId) {
      res.status(401).json({ error: 'token invalid' }).end()
    } else {
      await User.findByIdAndRemove(req.params.id)
      res.status(204).end()
    }
  }
  catch (e) {
    next(e)
  }
})

module.exports = usersRouter