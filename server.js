const express = require('express')
const { json, urlencoded } =  require('body-parser')
const morgan = require('morgan')
const config = require('./utils/config')
const cors = require('cors')
const connect = require('./utils/connect')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')


const app = express()

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))



app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)



const start = async () => {
  try {
    await connect()
    app.listen(config.PORT, () => {
      logger.info(`REST API on http://localhost:${config.PORT}/api`)
    })
  } catch (error) {
    logger.error('error connecting to database:', error.message)
  }
}

module.exports = start