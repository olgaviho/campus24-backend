const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

let threads = [ {
    id: 1,
    title: "HTML",
    message: 'HTML on helppoa',
    date: '2017-12-10T17:30:31.098Z',
  },
  {
    id: 2,
    title: "selain",
    message: 'Selain pystyy suorittamaan vain javascriptiä',
    date: '2017-12-10T18:39:34.091Z',
  },
  {
    id: 3,
    title: "metodit",
    message: 'HTTP-protokollan tärkeimmät metodit ovat GET ja POST',
    date: '2017-12-10T19:20:14.298Z',
  },
]

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/threads', (req, res) => {
  res.json(threads)
})

app.get('/threads/:id', (req, res) => {
  const id = Number(req.params.id)
  const thread = threads.find(t => t.id === id)

  if (thread) {
    res.json(thread)
  } else {
    res.status(404).end()
  }
})

app.delete('/threads/:id', (req, res) => {
  const id = Number(req.params.id)
  threads = threads.filter(t => t.id !== id)

  res.status(204).end()
})

app.post('/threads', (req, res) => {
  const body = req.body

  if (!body.title || !body.message) {
    return res.status(400).json({
      error: 'content missing'
    })
  }

  const thread = {
    title: body.title,
    message: body.message,
    date: new Date(),
    id: Math.floor(Math.random()*10000)
  }

  threads = threads.concat(thread)
  res.json(thread)
})

const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)