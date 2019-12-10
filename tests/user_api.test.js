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
  })

  test('all users are returned ', async () => {
    const response = await api.get('/api/users')
    expect(response.body.length).toBe(helper.initialUsers.length)
  })

  describe('viewing a spesific user', () => {


    test('succeeds with a valid id', async () => {
      const usersAtStart = await helper.usersInDb()
      const userToView = usersAtStart[0]
      const resultUser = await api
        .get(`/api/users/${userToView.id}`)
        .expect(200)
        .expect('Content-Type', /application\/json/)

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

    describe('adding a new user ', async () => {

      test('it is not possible to add an invalid user', async () => {
        const newUser = {
          name: 'tipsu',
          password: 'tipstips'
        }

        await api
          .post('/api/users')
          .send(newUser)
          .expect(400)

        const usersNow = await helper.usersInDb()
        expect(usersNow.length).toBe(helper.initialUsers.length)

      })

      test('it is possible add a valid user', async () => {
        const newUser = {
          name: 'tipu',
          username: 'nappi',
          password: 'hassu'
        }

        await api
          .post('/api/users')
          .send(newUser)
          .expect(200)
          .expect('Content-Type', /application\/json/)

        const usersNow = await helper.usersInDb()
        expect(usersNow.length).toBe(helper.initialUsers.length + 1)

        const usernames = usersNow.map(user => user.username)
        expect(usernames).toContain('nappi')

      })

      test('username must be unique', async () => {
        const newUser = {
          name: 'tippu',
          username: 'react',
          password: 'hassu'
        }

        await api
          .post('/api/users')
          .send(newUser)
          .expect(403)

        const usersNow = await helper.usersInDb()
        expect(usersNow.length).toBe(helper.initialUsers.length)

      })

      describe('logging in ', async () => {

        beforeEach(async () => {

          const newUser = {
            name: 'outo',
            username: 'elain',
            password: 'polonen'
          }
          await api
            .post('/api/users')
            .send(newUser)

        })

        test('it is possible to log in with valid credentials', async () => {

          const newUser = {
            username: 'elain',
            password: 'polonen'
          }

          const res = await api
            .post('/api/login')
            .send(newUser)


          expect(res.statusCode).toEqual(200)

        })

        test('it is not possible to log in with unvalid credentials', async () => {

          const falseUser = {
            name: 'tipu',
            username: 'nappi',
            password: 'hassukka'
          }

          await api
            .post('/api/login')
            .send(falseUser)
            .expect(401)
        })

        describe('deleting user ', async () => {

          test('it is possible to delete own user', async () => {

            const usersAtStart = await helper.usersInDb()

            const user = {
              username: 'elain',
              password: 'polonen'
            }

            const res = await api
              .post('/api/login')
              .send(user)
            expect(res.statusCode).toEqual(200)

            token = `bearer ${res.body.token}`
            const config = {
              headers: { authorization: token },
            }

            const res2 = await api
              .delete(`/api/users/${res.body.id}`)
              .set({ Authorization: token })

            expect(res2.statusCode).toEqual(204)

            const usersNow = await helper.usersInDb()

            expect(usersNow.length).toBe(usersAtStart.length - 1)


          })
        })
      })
    })
  })
})
afterAll(() => {
  mongoose.connection.close()
})