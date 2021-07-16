const mongoose = require('mongoose')
const config = require('./config')

const connect = (url = config.MONGODB_URI ) => {
  return mongoose.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }
  )
}

module.exports = connect;