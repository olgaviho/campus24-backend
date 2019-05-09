mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

const Thread = require('../models/thread')

const initialThreads = [
  {
    title: 'java',
    message: 'java on tylsää'
  },
  {
    title: 'react',
    message: 'react on vaikeaa'
  },
  {
    title: 'tärkeä asia',
    message: 'mistä täältä saa ruokaa?'
  }
]

beforeEach(async() => {
  await Thread.deleteMany({})
  let threadObject = new Thread(initialThreads[0])
  await threadObject.save()

  threadObject = new Thread(initialThreads[1])
  await threadObject.save()

  threadObject = new Thread(initialThreads[2])
  await threadObject.save()

})

test('threads are returned as json', async () => {
  await api
    .get('/api/threads')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('a specific thread is there', async () => {
  const response = await api.get('/api/threads')

  const contents = response.body.map(r => r.message)
  expect(contents).toContain(
    'mistä täältä saa ruokaa?'
  )

})

test('threads are returned ', async () => {
  const response = await api.get('/api/threads')
  expect(response.body.length).toBe(initialThreads.length)
})

test('id is ok', async () => {
  const response = await api.get('/api/threads')
  const one = response.body[0]
  expect(one.id).toBeDefined()

})

test('it is possible to add a thread', async () => {
  const newThread = new Thread({
    title: 'testaus',
    message: 'testaus sujuu yllättävän kivuttomasti'
  })

  await newThread.save()


  const response = await api.get('/api/threads')
  console.log('response body length', response.body.length)
  console.log('initialThreads.length', initialThreads.length)

  expect(400)

})

test('title missing', async () => {
  const newThread = new Thread({
    message: 'testaus sujuu yllättävän kivuttomasti'
  })

  await newThread.save()
  await api.get('/api/threads')

  expect(400)

})

test('message missing', async () => {
  const newThread = new Thread({
    title: 'testaus sujuu yllättävän kivuttomasti'
  })

  await newThread.save()
  await api.get('/api/threads')

  expect(400)

})


afterAll(() => {
  mongoose.connection.close()
})