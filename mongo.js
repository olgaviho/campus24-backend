const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@klusteri-t8jvp.mongodb.net/test?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true })

const threadSchema = new mongoose.Schema({
  title: String,
  message: String,
  date: Date,
})

const Thread = mongoose.model('Thread', threadSchema)

const thread = new Thread({
  title: 'Java',
  message: 'Java on ärsyttävää',
  date: new Date(),
})

thread.save().then(response => {
  console.log('thread saved!')
  mongoose.connection.close()
})