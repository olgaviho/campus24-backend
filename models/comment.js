const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)


const commentSchema = new mongoose.Schema({
  message: String,
  date: Date,
  thread: String,
  user: String,
})

commentSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


module.exports = mongoose.model('Comment', commentSchema)