const User = require('../models/user')

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

const nonExistingId = async () => {
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

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

module.exports = {
  initialUsers, nonExistingId, usersInDb
}