mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const helper = require('./test_helper')
const Thread = require('../models/thread')


describe('when there is initially some threads saved', () => {

  beforeEach(async () => {
    await Thread.deleteMany({})

    const userObjects = helper.initialThreads.map(t => new Thread(t))
    const promiseArray = userObjects.map(t => t.save())
    await Promise.all(promiseArray)

  })


  test('users are returned as json', async () => {
    await api
      .get('/api/threads')
      .expect(200)

  })

  test('a specific thread is there', async () => {
    const response = await api.get('/api/threads')

    const titles = response.body.map(t => t.title)
    expect(titles).toContain(
      'testaus on työlästä'
    )
  })

  test('all threads are returned ', async () => {
    const response = await api.get('/api/threads')
    expect(response.body.length).toBe(helper.initialThreads.length)
  })

  describe('viewing a spesific thread', () => {

    test('succeeds with a valid id', async () => {
      const threadsAtStart = await helper.threadsInDb()
      const threadToView = threadsAtStart[0]
      const resultThread = await api
        .get(`/api/threads/${threadToView.id}`)
        .expect(200)
        .expect('Content-Type', /application\/json/)

      expect(resultThread.body.title).toEqual(threadToView.title)
    })

    test('fails with statuscode 204 if thread does not exist', async () => {
      const validNonexistingId = await helper.nonExistingIdForThread()

      await api
        .get(`/api/threads/${validNonexistingId}`)
        .expect(204)
    })

    test('fails with statuscode 400 id is invalid', async () => {
      const invalidId = '5a3d5da59070081a82a547645'

      await api
        .get(`/api/threads/${invalidId}`)
        .expect(400)
    })

    describe('adding a new thread ', async () => {

      test('it is not possible to add a thread without token', async () => {
        const newThread = {
          title: 'tipsu',
          message: 'tipstips',
          date: new Date().toISOString(),
        }

        await api
          .post('/api/threads')
          .send(newThread)
          .expect(400)

        const threadsNow = await helper.threadsInDb()
        expect(threadsNow.length).toBe(helper.initialThreads.length)

      })

      test('it is not possible to add a thread without valid token', async () => {

        const newThread = {
          title: 'tipsutkivoja',
          message: 'tipstipstips',
          date: new Date().toISOString(),
        }

        token = 'bearer jge8y745jgdo5e9u6dflkj'

        const res2 = await api
          .post('/api/threads/')
          .send(newThread)
          .set({ Authorization: token })

        expect(res2.statusCode).toEqual(400)

        const threadsNow = await helper.threadsInDb()
        expect(threadsNow.length).toBe(helper.initialThreads.length)

      })

      test('it is possible to add a thread with valid token', async () => {

        const threadsBegin = await helper.threadsInDb()
        const usersBegin = await helper.usersInDb()

        const newThread = {
          title: 'tipsu',
          message: 'tipstips',
          date: new Date().toISOString(),
        }

        const newUser = {
          name: 'nappi',
          username: 'keppieläin',
          password: 'saapas'
        }

        await api
          .post('/api/users')
          .send(newUser)
          .expect(200)


        const usersNow = await helper.usersInDb()
        expect(usersNow.length).toBe(usersBegin.length + 1)


        const res1 = await api
          .post('/api/login')
          .send(newUser)
        expect(res1.statusCode).toEqual(200)

        token = `bearer ${res1.body.token}`

        const res2 = await api
          .post('/api/threads/')
          .send(newThread)
          .set({ Authorization: token })

        expect(res2.statusCode).toEqual(200)

        const threadsNow = await helper.threadsInDb()
        expect(threadsNow.length).toBe(threadsBegin.length + 1)

      })

      // entä jos jotain olennaista puuttuu??
    })

    describe('editing a thread ', async () => {

      beforeEach(async () => {

        const newUser = {
          name: 'leo',
          username: 'leijona',
          password: 'nappi'
        }
        await api
          .post('/api/users')
          .send(newUser)

        const res1 = await api
          .post('/api/login')
          .send(newUser)
        expect(res1.statusCode).toEqual(200)

        const token = `bearer ${res1.body.token}`

        const newThread = {
          title: 'apina',
          message: 'apina on ruokaa',
          date: new Date().toISOString(),
        }

        await api
          .post('/api/threads/')
          .send(newThread)
          .set({ Authorization: token })


      })


      test('it is not possible to edit thread without token', async () => {
        const editMessage = 'apina on tosi mukava :)'

        const threadsStart = await helper.threadsInDb()
        const threadToEdit = threadsStart[threadsStart.length - 1]


        await api
          .put(`/api/threads/${threadToEdit.id}`)
          .send(editMessage)
          .expect(400)

        const threadsNow = await api.get('/api/threads')
        const messages = threadsNow.body.map(t => t.message)
        expect(messages).toContain('apina on ruokaa')

      })

      test('it is not possible to edit thread without a valid token', async () => {
        const editMessage = 'apina on tosi mukava :)'

        const threadsStart = await helper.threadsInDb()
        const threadToEdit = threadsStart[threadsStart.length - 1]

        token = 'bearer feht4895djkst4965'


        await api
          .put(`/api/threads/${threadToEdit.id}`)
          .send(editMessage)
          .set({ Authorization: token })
          .expect(400)

        const threadsNow = await api.get('/api/threads')
        const messages = threadsNow.body.map(t => t.message)
        expect(messages).toContain('apina on ruokaa')

      })

      test('it is not possible to edit other users thread', async () => {

        const otherUser = {
          name: 'leo2',
          username: 'leijona2',
          password: 'nappi2'
        }
        await api
          .post('/api/users')
          .send(otherUser)
          .expect(200)

        const res1 = await api
          .post('/api/login')
          .send(otherUser)
        expect(res1.statusCode).toEqual(200)

        const token1 = `bearer ${res1.body.token}`

        const newThread = {
          title: 'apina2',
          message: 'apina on ruokaa2',
          date: new Date().toISOString(),
        }

        await api
          .post('/api/threads/')
          .send(newThread)
          .set({ Authorization: token1 })
          .expect(200)


        const editMessage = 'apina on tosi mukava :)'

        const threadsBeforeEdit = await helper.threadsInDb()
        const threadToEdit = threadsBeforeEdit[threadsBeforeEdit.length - 1]


        const newUser = {
          name: 'leo',
          username: 'leijona',
          password: 'nappi'
        }

        const res2 = await api
          .post('/api/login')
          .send(newUser)
        expect(res2.statusCode).toEqual(200)

        token2 = `bearer ${res2.body.token}`


        await api
          .put(`/api/threads/${threadToEdit.id}`)
          .send(editMessage)
          .set({ Authorization: token2 })
          .expect(401)

        const threadsNow = await api.get('/api/threads')
        const messages = threadsNow.body.map(t => t.message)
        expect(messages).toContain('apina on ruokaa')

      })

      test('it is possible to edit own thread', async () => {

        const newUser = {
          name: 'leo',
          username: 'leijona',
          password: 'nappi'
        }

        const res = await api
          .post('/api/login')
          .send(newUser)
        expect(res.statusCode).toEqual(200)

        token = `bearer ${res.body.token}`

        const newThread = {
          title: 'apinoista vilä',
          message: 'apina on ruokaa leijonille',
          date: new Date().toISOString(),
        }

        await api
          .post('/api/threads/')
          .send(newThread)
          .set({ Authorization: token })

        const threadsBeforeEdit = await helper.threadsInDb()
        const threadToEdit = threadsBeforeEdit[threadsBeforeEdit.length - 1]
        const message = {
          message: 'loppuisipa jo testaus'
        }


        await api
          .put(`/api/threads/${threadToEdit.id}`)
          .send(message)
          .set({ Authorization: token })
          .expect(200)

        const threadsNow = await api.get('/api/threads')
        const messages = threadsNow.body.map(t => t.message)
        expect(messages).toContain('loppuisipa jo testaus')

      })

      test('it is not possible to edit own thread without message', async () => {

        const newUser = {
          name: 'leo',
          username: 'leijona',
          password: 'nappi'
        }

        const res = await api
          .post('/api/login')
          .send(newUser)
        expect(res.statusCode).toEqual(200)

        token = `bearer ${res.body.token}`

        const newThread = {
          title: 'apinoista vielä vähän lisää',
          message: 'apina on ruokaa leijonille, mur',
          date: new Date().toISOString(),
        }

        await api
          .post('/api/threads/')
          .send(newThread)
          .set({ Authorization: token })

        const threadsBeforeEdit = await helper.threadsInDb()
        const threadToEdit = threadsBeforeEdit[threadsBeforeEdit.length - 1]

        const message = {
          tips: 'pipapo'
        }

        await api
          .put(`/api/threads/${threadToEdit.id}`)
          .send(message)
          .set({ Authorization: token })
          .expect(400)

        const threadsNow = await api.get('/api/threads')
        const messages = threadsNow.body.map(t => t.message)
        expect(messages).toContain('apina on ruokaa leijonille, mur')

      })
    })

    describe('deleting a thread', async () => {

      beforeEach(async () => {

        const newUser = {
          name: 'olga',
          username: 'tipu',
          password: 'moppi'
        }
        await api
          .post('/api/users')
          .send(newUser)

        const res1 = await api
          .post('/api/login')
          .send(newUser)
        expect(res1.statusCode).toEqual(200)

        const token = `bearer ${res1.body.token}`

        const newThread = {
          title: 'joulu',
          message: 'joulu on parasta aikaa',
          date: new Date().toISOString(),
        }

        await api
          .post('/api/threads/')
          .send(newThread)
          .set({ Authorization: token })


      })

      test('it is not possible to delete thread without token', async () => {

        const threadsStart = await helper.threadsInDb()
        const threadToDelete = threadsStart[threadsStart.length - 1]


        await api
          .delete(`/api/threads/${threadToDelete.id}`)
          .expect(400)

        const threadsNow = await api.get('/api/threads')


        const messages = threadsNow.body.map(t => t.message)
        expect(messages).toContain('joulu on parasta aikaa')
        expect(threadsStart.length).toBe(messages.length)

      })
      test('it is not possible to delete thread without a valid token', async () => {

        const threadsStart = await helper.threadsInDb()

        const threadToDelete = threadsStart[threadsStart.length - 1]

        token = 'bearer 79feht4895djkst5477094965'

        await api
          .delete(`/api/threads/${threadToDelete.id}`)
          .set({ Authorization: token })
          .expect(400)

        const threadsNow = await api.get('/api/threads')


        const messages = threadsNow.body.map(t => t.message)
        expect(threadsStart.length).toBe(messages.length)
        expect(messages).toContain('joulu on parasta aikaa')

      })

      test('it is not possible to delete other users thread', async () => {

        const otherUser = {
          name: 'olga2',
          username: 'tipu2',
          password: 'moppi2'
        }
        await api
          .post('/api/users')
          .send(otherUser)
          .expect(200)

        const res1 = await api
          .post('/api/login')
          .send(otherUser)
        expect(res1.statusCode).toEqual(200)

        const token1 = `bearer ${res1.body.token}`

        const newThread = {
          title: 'kesä',
          message: 'tulisipa jo kesäloma',
          date: new Date().toISOString(),
        }

        await api
          .post('/api/threads/')
          .send(newThread)
          .set({ Authorization: token1 })
          .expect(200)


        const threadsBeforeDelete = await helper.threadsInDb()
        const threadToDelete = threadsBeforeDelete[threadsBeforeDelete.length - 1]


        const newUser = {
          username: 'tipu',
          password: 'moppi'
        }
        const res2 = await api
          .post('/api/login')
          .send(newUser)
        expect(res2.statusCode).toEqual(200)

        token2 = `bearer ${res2.body.token}`


        await api
          .delete(`/api/threads/${threadToDelete.id}`)
          .set({ Authorization: token2 })
          .expect(401)

        const threadsNow = await api.get('/api/threads')

        const messages = threadsNow.body.map(t => t.message)
        expect(threadsBeforeDelete.length).toBe(messages.length)
        expect(messages).toContain('tulisipa jo kesäloma')

      })

      test('it is possible to delete own thread', async () => {

        const newUser = {
          username: 'tipu',
          password: 'moppi'
        }

        const res = await api
          .post('/api/login')
          .send(newUser)
        expect(res.statusCode).toEqual(200)

        token = `bearer ${res.body.token}`

        const newThread = {
          title: 'buaaa milloi tää testaus loppuu',
          message: 'ei tää varmaan lopu ikinä',
          date: new Date().toISOString(),
        }

        await api
          .post('/api/threads/')
          .send(newThread)
          .set({ Authorization: token })

        const threadsBeforeDelete = await helper.threadsInDb()

        const threadToDelete = threadsBeforeDelete[threadsBeforeDelete.length - 1]

        await api
          .delete(`/api/threads/${threadToDelete.id}`)
          .set({ Authorization: token })
          .expect(204)

        const threadsNow = await api.get('/api/threads')
        const messages = threadsNow.body.map(t => t.message)

        expect(threadsBeforeDelete.length).toBe(messages.length+1)

      })

    })
  })
})
afterAll(() => {
  mongoose.connection.close()
})