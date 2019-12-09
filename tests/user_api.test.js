mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

const helper = require('./test_helper')

const User = require('../models/user')


describe('when there is initially some users saved', () => {

  beforeEach(async () => {
    await User.deleteMany({})

    const userObjects = helper.initialUsers.map(user => new User(user))
    const promiseArray = userObjects.map(user => user.save())
    await Promise.all(promiseArray)

  })


  test('users are returned as json', async () => {
    await api
      .get('/api/users')
      .expect(200)

  })

  test('a specific user is there', async () => {
    const response = await api.get('/api/users')

    const contents = response.body.map(r => r.username)
    expect(contents).toContain(
      'react'
    )
    // tips
  })

  test('all users are returned ', async () => {
    const response = await api.get('/api/users')
    expect(response.body.length).toBe(helper.initialUsers.length)
    // hips
  })

  describe('viewing a spesific user', () => {


    test('succeeds with a valid id', async () => {
      const usersAtStart = await helper.usersInDb()
      const userToView = usersAtStart[0]
      console.log(userToView)
      const resultUser = await api
        .get(`/api/users/${userToView.id}`)
        .expect(200)
        .expect('Content-Type', /application\/json/)

      console.log('result user:', resultUser.body)
      expect(resultUser.body).toEqual(userToView)
    })

    test('fails with statuscode 204 if user does not exist', async () => {
      const validNonexistingId = await helper.nonExistingId()

      await api
        .get(`/api/users/${validNonexistingId}`)
        .expect(204)
    })

    test('fails with statuscode 400 id is invalid', async () => {
      const invalidId = '5a3d5da59070081a82a547645'

      await api
        .get(`/api/users/${invalidId}`)
        .expect(400)
    })

    //test('user without password is not added', async () => {
    //  const newUser = {
    //    name: 'tipu',
    //    username: 'nappi'
    //  }
    //
    //  await api
    //    .post('/api/users')
    //    .send(newUser)
    //    .expect(400)

    //  const response = await api.get('/api/users')

    //  expect(response.body.length).toBe(initialUsers.length)
    //})

  })
})

afterAll(() => {
  mongoose.connection.close()
})