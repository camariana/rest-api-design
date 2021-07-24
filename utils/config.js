require('dotenv').config()

const PORT = process.env.PORT
let MONGODB_URI = ''
const env = process.env.NODE_ENV

switch(env) {
  case 'production':
    MONGODB_URI = process.env.LIVE_MONGODB_URI
  case 'development':
    MONGODB_URI = process.env.LOCAL_MONGODB_URI
  default:
    MONGODB_URI = process.env.TEST_MONGODB_URI
}

module.exports = {
  MONGODB_URI,
  PORT
}