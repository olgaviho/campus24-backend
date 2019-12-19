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
      const validNonexistingId = await helper.nonExistingIdForUser()

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

          test('it is not possible to delete other users', async () => {

            const usersAtStart = await helper.usersInDb()
            const deleteUser = usersAtStart[0]

            const user = {
              username: 'elain',
              password: 'polonen'
            }

            const res = await api
              .post('/api/login')
              .send(user)
            expect(res.statusCode).toEqual(200)

            token = `bearer ${res.body.token}`

            const res2 = await api
              .delete(`/api/users/${deleteUser.id}`)
              .set({ Authorization: token })

            expect(res2.statusCode).toEqual(401)
            const usersNow = await helper.usersInDb()

            expect(res.body.id).not.toBe(deleteUser.id)
            expect(usersNow.length).toBe(usersAtStart.length)
          })

          test('it is not possible to delete users without token', async () => {

            const usersAtStart = await helper.usersInDb()
            const deleteUser = usersAtStart[0]

            const res2 = await api
              .delete(`/api/users/${deleteUser.id}`)


            expect(res2.statusCode).toEqual(400)
            const usersNow = await helper.usersInDb()
            expect(usersNow.length).toBe(usersAtStart.length)
          })

          test('it is not possible to delete users without valid token', async () => {

            const usersAtStart = await helper.usersInDb()
            const deleteUser = usersAtStart[0]

            token = 'bearer g5086jkf0956406kdj95e68'

            const res2 = await api
              .delete(`/api/users/${deleteUser.id}`)
              .set({ Authorization: token })

            expect(res2.statusCode).toEqual(400)
            const usersNow = await helper.usersInDb()
            expect(usersNow.length).toBe(usersAtStart.length)
          })


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

            const res2 = await api
              .delete(`/api/users/${res.body.id}`)
              .set({ Authorization: token })

            expect(res2.statusCode).toEqual(204)
            const usersNow = await helper.usersInDb()
            expect(usersNow.length).toBe(usersAtStart.length - 1)

          })
        })

        describe('editing password ', async () => {

          beforeEach(async () => {

            const newUser = {
              name: 'kapula',
              username: 'kapula',
              password: 'kapula'
            }
            await api
              .post('/api/users')
              .send(newUser)

            const res1 = await api
              .post('/api/login')
              .send(newUser)
            expect(res1.statusCode).toEqual(200)


          })


          test('it is not possible to edit password without token', async () => {
            const editPassword = 'nappula'

            const usersAtStart = await helper.usersInDb()
            const userToEdit = usersAtStart[usersAtStart.length - 1]

            const newUser = {
              username: 'kapula',
              password: 'nappula'
            }

            await api
              .put(`/api/users/${userToEdit.id}`)
              .send(editPassword)
              .expect(400)

            const res = await api
              .post('/api/login')
              .send(newUser)
            expect(res.statusCode).toEqual(401)

          })


          test('it is possible to edit own password', async () => {

            let newUser = {
              username: 'kapula',
              password: 'kapula'
            }

            const res = await api
              .post('/api/login')
              .send(newUser)
            expect(res.statusCode).toEqual(200)

            token = `bearer ${res.body.token}`

            const users = await helper.usersInDb()
            const userId = users[users.length - 1].id

            const password = {
              password: 'nappula'
            }

            newUser.password = 'nappula'

            await api
              .put(`/api/users/${userId}`)
              .send(password)
              .set({ Authorization: token })
              .expect(200)

            const res1 = await api
              .post('/api/login')
              .send(newUser)
            expect(res1.statusCode).toEqual(200)


          })


          test('it is not possible to edit other users password', async () => {

            const otherUser = {
              name: 'tonttunen',
              username: 'tonttunen',
              password: 'tonttunen'
            }
            await api
              .post('/api/users')
              .send(otherUser)
              .expect(200)

            const usersAtStart = await helper.usersInDb()
            const userToEdit = usersAtStart[usersAtStart.length - 1]

            const editPassword = 'nappula'

            const newUser = {
              username: 'kapula',
              password: 'kapula'
            }

            const res2 = await api
              .post('/api/login')
              .send(newUser)
            expect(res2.statusCode).toEqual(200)

            token2 = `bearer ${res2.body.token}`

            newUser.password = 'nappula'


            await api
              .put(`/api/users/${userToEdit.id}`)
              .send(editPassword)
              .set({ Authorization: token2 })
              .expect(401)

            const res = await api
              .post('/api/login')
              .send(newUser)
            expect(res.statusCode).toEqual(401)

          })
        })
      })
    })
  })
})
afterAll(() => {
  mongoose.connection.close()
})