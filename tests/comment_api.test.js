mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const helper = require('./test_helper')
const Comment = require('../models/comment')


describe('when there is initially some comments saved', () => {

  beforeEach(async () => {
    await Comment.deleteMany({})

    const commentObjects = helper.initialComments.map(t => new Comment(t))
    const promiseArray = commentObjects.map(c => c.save())
    await Promise.all(promiseArray)
  })

  test('users are returned', async () => {
    await api
      .get('/api/comments')
      .expect(200)
  })

  test('a specific comment is there', async () => {
    const response = await api.get('/api/comments')

    const messages = response.body.map(c => c.message)
    expect(messages).toContain(
      'oispa jo joulu'
    )
  })

  test('all comments are returned ', async () => {
    const response = await api.get('/api/comments')
    expect(response.body.length).toBe(helper.initialComments.length)
  })

  describe('viewing a spesific comment', () => {

    test('succeeds with a valid id', async () => {
      const commentsAtStart = await helper.commentsInDb()
      const commentToView = commentsAtStart[0]
      const resultComment = await api
        .get(`/api/comments/${commentToView.id}`)
        .expect(200)
        .expect('Content-Type', /application\/json/)

      expect(resultComment.body.title).toEqual(commentToView.title)
    })

    test('fails with statuscode 204 if comment does not exist', async () => {
      const validNonexistingId = await helper.nonExistingIdForComment()

      await api
        .get(`/api/comments/${validNonexistingId}`)
        .expect(204)
    })

    test('fails with statuscode 400 if id is invalid', async () => {
      const invalidId = '5a31a82a547645'

      await api
        .get(`/api/comments/${invalidId}`)
        .expect(400)
    })

    describe('adding a new comment ', async () => {

      test('it is not possible to add a comment without token', async () => {

        const threads = await helper.threadsInDb()
        const threadId = threads[threads.length - 1].id


        const newComment = {
          message: 'bwaaaaa',
          date: new Date().toISOString(),
          threadId: threadId
        }

        await api
          .post('/api/comments')
          .send(newComment)
          .expect(400)

        const commentsNow = await helper.commentsInDb()
        expect(commentsNow.length).toBe(helper.initialComments.length)

      })

      test('it is not possible to add a comment without valid token', async () => {

        const threads = await helper.threadsInDb()
        const threadId = threads[threads.length - 1].id

        const newComment = {
          message: 'tipstipstips',
          date: new Date().toISOString(),
          threadId: threadId
        }

        token = 'bearer jge8y745jgdo5e9u6dflkj'

        const res = await api
          .post('/api/comments/')
          .send(newComment)
          .set({ Authorization: token })

        expect(res.statusCode).toEqual(400)

        const commentsNow = await helper.commentsInDb()
        expect(commentsNow.length).toBe(helper.initialComments.length)

      })

      test('it is possible to add a comment with valid token', async () => {

        const commentsBegin = await helper.commentsInDb()
        const usersBegin = await helper.usersInDb()

        const threads = await helper.threadsInDb()
        const threadId = threads[threads.length - 1].id

        const newComment = {
          message: 'tipstips bwaaaaaaa',
          date: new Date().toISOString(),
          threadId: threadId
        }

        const newUser = {
          name: 'hippu',
          username: 'hippunen',
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
          .post('/api/comments/')
          .send(newComment)
          .set({ Authorization: token })

        expect(res2.statusCode).toEqual(200)

        const commentsNow = await helper.commentsInDb()
        expect(commentsNow.length).toBe(commentsBegin.length + 1)

      })

      test('it is not possible to add a comment without threadId', async () => {

        const commentsBegin = await helper.commentsInDb()
        const usersBegin = await helper.usersInDb()


        const newComment = {
          message: 'tipstips bwaaaaaaa',
          date: new Date().toISOString()
        }

        const newUser = {
          name: 'hippu2',
          username: 'hippunen2',
          password: 'saapas2'
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
          .post('/api/comments/')
          .send(newComment)
          .set({ Authorization: token })

        expect(res2.statusCode).toEqual(400)

        const commentsNow = await helper.commentsInDb()
        expect(commentsNow.length).toBe(commentsBegin.length)

      })

      test('it is not possible to add a comment without message', async () => {

        const commentsBegin = await helper.commentsInDb()
        const usersBegin = await helper.usersInDb()

        const threads = await helper.threadsInDb()
        const threadId = threads[threads.length - 1].id


        const newComment = {
          date: new Date().toISOString(),
          threadId: threadId
        }

        const newUser = {
          name: 'hippu3',
          username: 'hippunen3',
          password: 'saapas3'
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
          .post('/api/comments/')
          .send(newComment)
          .set({ Authorization: token })

        expect(res2.statusCode).toEqual(400)

        const commentsNow = await helper.commentsInDb()
        expect(commentsNow.length).toBe(commentsBegin.length)

      })
    })

    describe('editing a comment ', async () => {

      beforeEach(async () => {

        const newUser = {
          name: 'höppänä',
          username: 'höppänä',
          password: 'höppänä'
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
          title: 'robotti-imuri',
          message: 'ostettiin juuri uusi robotti-imuri: nuunuu',
          date: new Date().toISOString(),
        }

        await api
          .post('/api/threads/')
          .send(newThread)
          .set({ Authorization: token })



        const threads = await helper.threadsInDb()
        const threadId = threads[threads.length - 1].id

        const newComment = {
          message: 'nuunuu best',
          date: new Date().toISOString(),
          threadId: threadId
        }

        await api
          .post('/api/comments/')
          .send(newComment)
          .set({ Authorization: token })
          .expect(200)


      })


      test('it is not possible to edit comment without token', async () => {
        const editMessage = 'oispa meilläkin nuunuu :)'

        const commentsAtStart = await helper.commentsInDb()
        const commentToEdit = commentsAtStart[commentsAtStart.length - 1]

        console.log('commentToEdit pitäisi olla nuunuu best', commentToEdit)


        await api
          .put(`/api/comments/${commentToEdit.id}`)
          .send(editMessage)
          .expect(400)

        const commentsNow = await api.get('/api/comments')
        const messages = commentsNow.body.map(c => c.message)
        expect(messages).toContain('nuunuu best')

      })

      test('it is not possible to edit a comment without a valid token', async () => {
        const editMessage = 'oispa meilläkin nuunuu :)'

        const commentsAtStart = await helper.commentsInDb()
        const commentToEdit = commentsAtStart[commentsAtStart.length - 1]

        token = 'bearer feht4895djkst4965'


        await api
          .put(`/api/comments/${commentToEdit.id}`)
          .send(editMessage)
          .set({ Authorization: token })
          .expect(400)

        const commentsNow = await api.get('/api/comments')
        const messages = commentsNow.body.map(c => c.message)
        expect(messages).toContain('nuunuu best')

      })

      test('it is not possible to edit other users comments', async () => {

        const otherUser = {
          name: 'legolas',
          username: 'legolas',
          password: 'lego'
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


        const threads = await helper.threadsInDb()
        const threadId = threads[threads.length - 1].id

        const newComment = {
          message: 'bwaaaaaaaaaaaa',
          date: new Date().toISOString(),
          threadId: threadId
        }

        await api
          .post('/api/comments/')
          .send(newComment)
          .set({ Authorization: token1 })
          .expect(200)


        const editMessage = 'oispa kaljaa :)'

        const commentsBeforeEdit = await helper.commentsInDb()
        const commentToEdit = commentsBeforeEdit[commentsBeforeEdit.length - 1]


        const newUser = {
          username: 'höppänä',
          password: 'höppänä'
        }

        const res2 = await api
          .post('/api/login')
          .send(newUser)
        expect(res2.statusCode).toEqual(200)

        token2 = `bearer ${res2.body.token}`


        await api
          .put(`/api/comments/${commentToEdit.id}`)
          .send(editMessage)
          .set({ Authorization: token2 })
          .expect(401)

        const commentsNow = await api.get('/api/comments')
        const messages = commentsNow.body.map(c => c.message)
        expect(messages).toContain('bwaaaaaaaaaaaa')

      })

      test('it is possible to edit own thread', async () => {

        const newUser = {
          username: 'höppänä',
          password: 'höppänä'
        }

        const res = await api
          .post('/api/login')
          .send(newUser)
        expect(res.statusCode).toEqual(200)

        token = `bearer ${res.body.token}`

        const threads = await helper.threadsInDb()
        const threadId = threads[threads.length - 1].id

        const newComment = {
          message: 'en ole varmaan vielä esitellyt itseäni?',
          date: new Date().toISOString(),
          threadId: threadId
        }

        await api
          .post('/api/comments/')
          .send(newComment)
          .set({ Authorization: token })
          .expect(200)

        const commentsBeforeEdit = await helper.commentsInDb()
        const commentToEdit = commentsBeforeEdit[commentsBeforeEdit.length - 1]
        const message = {
          message: 'olenko jo esitellyt itseni?'
        }


        await api
          .put(`/api/comments/${commentToEdit.id}`)
          .send(message)
          .set({ Authorization: token })
          .expect(200)

        const commentsNow = await api.get('/api/comments')
        const messages = commentsNow.body.map(c => c.message)
        expect(messages).toContain('olenko jo esitellyt itseni?')

      })


      test('it is not possible to edit own comment without message', async () => {

        const newUser = {
          username: 'höppänä',
          password: 'höppänä'
        }

        const res = await api
          .post('/api/login')
          .send(newUser)
        expect(res.statusCode).toEqual(200)

        token = `bearer ${res.body.token}`

        const threads = await helper.commentsInDb()
        const threadId = threads[threads.length - 1].id

        const newComment = {
          message: 'hei olen hapsiainen',
          date: new Date().toISOString(),
          threadId: threadId
        }

        await api
          .post('/api/comments/')
          .send(newComment)
          .set({ Authorization: token })
          .expect(200)

        const commentsBeforeEdit = await helper.commentsInDb()
        const commentToEdit = commentsBeforeEdit[commentsBeforeEdit.length - 1]


        const message = {
          tips: 'pipapo'
        }

        await api
          .put(`/api/comments/${commentToEdit.id}`)
          .send(message)
          .set({ Authorization: token })
          .expect(400)

        const commentsNow = await api.get('/api/comments')
        const messages = commentsNow.body.map(c => c.message)
        expect(messages).toContain('hei olen hapsiainen')

      })
    })

  })
})
afterAll(() => {
  mongoose.connection.close()
})