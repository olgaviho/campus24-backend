const config = require('./utils/config')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const threadsRouter = require('./controllers/threads')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const commentRouter = require('./controllers/comments')
const middleware = require('./utils/middleware')
const mongoose = require('mongoose')

console.log('connecting to ', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('connection failed', error.message)
  })

app.use(express.static('build'))
app.use(bodyParser.json())
app.use(middleware.logger)

app.use('/api/threads', threadsRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use('/api/comments', commentRouter)
app.use(middleware.errorHandler)
app.use(middleware.unknownEndpoint)

module.exports = app