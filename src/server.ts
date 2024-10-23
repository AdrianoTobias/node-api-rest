import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()

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

app.listen({
  port: env.PORT,
}).then(() => {
  console.log('HTTP Server Running!')
})