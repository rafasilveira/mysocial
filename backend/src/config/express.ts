import express from 'express'
import { loggerMiddleware } from '../middleware/logger.middleware'

const app = express()
app.use(express.json())
app.use(loggerMiddleware)

export default app
