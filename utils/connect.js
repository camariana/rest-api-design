import mongoose from 'mongoose'
import config from './config.js'

const connect = (url = config.MONGODB_URI ) => {
  return mongoose.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }
  )
}

export default connect;