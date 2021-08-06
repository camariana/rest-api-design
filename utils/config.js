import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT
const JWT_SECRET = process.env.JWT_SECRET
let MONGODB_URI = ''
const env = process.env.NODE_ENV

switch(env) {
  case 'test':
    MONGODB_URI = process.env.TEST_MONGODB_URI
    break
  case 'production':
    MONGODB_URI = process.env.LIVE_MONGODB_URI
    break
  default:
    MONGODB_URI = process.env.LOCAL_MONGODB_URI
}

export default {
  MONGODB_URI,
  PORT,
  JWT_SECRET
}