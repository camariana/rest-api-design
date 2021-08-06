import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import config from './utils/config.js'
import connect from './utils/connect.js'
import middleware from './utils/middleware.js'
import logger from './utils/logger.js'

const { json, urlencoded } = bodyParser

import studentRouter from './resources/student/student.router.js'

const app = express()

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/api/student', studentRouter)

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

export default start