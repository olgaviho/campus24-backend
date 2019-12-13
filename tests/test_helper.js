const User = require('../models/user')
const Thread = require('../models/thread')
const Comment = require('../models/comment')

const initialUsers = [
  {
    username: 'javascipt',
    name: 'node',
    password: 'express'
  },
  {
    username: 'react',
    name: 'jest',
    password: 'supertest'
  }
]

const initialThreads = [
  {
    title: 'testaus on hyödyllistä',
    message: 'sovelluksesta on löytynyt virheitä',
    date: new Date().toISOString()
  },
  {
    title: 'testaus on työlästä',
    message: 'ja hidasta',
    date: new Date().toISOString()
  }
]

const initialComments = [
  {
    message: 'joulu tulee pian',
    date: new Date().toISOString()
  },
  {
    message: 'oispa jo joulu',
    date: new Date().toISOString()
  }
]


const nonExistingIdForUser = async () => {
  const user = new User(
    {
      content: 'app',
      name: 'json',
      password: 'frontend'
    }
  )
  await user.save()
  await user.remove()

  return user.id.toString()
}

const nonExistingIdForThread = async () => {
  const thread = new Thread(
    {
      title: 'app',
      message: 'json',
      date: new Date().toISOString()
    }
  )
  await thread.save()
  await thread.remove()

  return thread.id.toString()
}

const nonExistingIdForComment = async () => {
  const comment = new Comment(
    {
      message: 'hiphei',
      date: new Date().toISOString()
    }
  )
  await comment.save()
  await comment.remove()

  return comment.id.toString()
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

const threadsInDb = async () => {
  const threads = await Thread.find({})
  return threads.map(u => u.toJSON())
}

const commentsInDb = async () => {
  const comments = await Comment.find({})
  return comments.map(c => c.toJSON())
}

module.exports = {
  initialUsers, nonExistingIdForUser, usersInDb,
  threadsInDb, initialThreads, nonExistingIdForThread,
  commentsInDb, nonExistingIdForComment, initialComments
}