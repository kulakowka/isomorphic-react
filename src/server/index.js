import express from 'express'
import { resolve } from 'path'
import handleRequest from './handleRequest'

const staticPath = express.static(resolve(__dirname, 'static'))

const app = express()

app.use('/static', staticPath)
app.use(handleRequest)
app.listen(3001)
