import cookie from '@fastify/cookie'
import fastify from 'fastify'

import { transactionsRoutes } from './routes/transactions'

export const app = fastify()

app.register(cookie)

app.addHook('preHandler', async (request) => {
  console.log(`[${request.method}] ${request.url} - global context`)
})

app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app.get('/hello', () => {
  return 'Hello world'
})