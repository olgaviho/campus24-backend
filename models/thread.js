const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)


const threadSchema = new mongoose.Schema({
  title: String,
  message: String,
  date: Date,
  //user: {
  //  type: mongoose.Schema.Types.ObjectId,
  //  ref: 'User'
  //}
})

threadSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


module.exports = mongoose.model('Thread', threadSchema)