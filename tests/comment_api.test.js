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
  })
})
afterAll(() => {
  mongoose.connection.close()
})