import { RequestHandler } from 'express'

export const loggerMiddleware: RequestHandler = (req, res, next) => {
  console.log('Server received a request')
  console.log(req?.body?.query)
  next()
}
