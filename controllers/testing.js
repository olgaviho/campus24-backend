const router = require('express').Router()
const Thread = require('../models/thread')
const User = require('../models/user')
const Comment = require('../models/comment')

router.post('/reset', async (req, res) => {
  await Thread.deleteMany({})
  await User.deleteMany({})
  await Comment.deleteMany({})

  res.status(204).end()
})

module.exports = router