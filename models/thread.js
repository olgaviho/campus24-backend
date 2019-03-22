const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

const url = process.env.MONGODB_URI
console.log('connecting to url ')

mongoose.connect(url, { useNewUrlParser: true })
  .then(result => {
    console.log('connected to mongo')
  })
  .catch(error => {
    console.log('error', error)
  })


const threadSchema = new mongoose.Schema({
  title: String,
  message: String,
  date: Date,
})

threadSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


module.exports = mongoose.model('Thread', threadSchema)