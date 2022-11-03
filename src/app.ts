import cors from 'cors'
import express from 'express'
import timeout from 'connect-timeout'
import { json } from 'body-parser'
import 'reflect-metadata'

import ApiRoute from './routers/api.router'

const app = express()

app.use(json({ limit: '50mb' }))
app.use(cors({ origin: '*' }))
app.use(timeout('300s'))
app.use('/api', ApiRoute)

export default app
