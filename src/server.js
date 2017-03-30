import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './components/App'

express()
.use(handleRequest)
.listen(3000)

function handleRequest (req, res, next) {
  const context = {}

  const html = ReactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <App />
    </StaticRouter>
  )

  if (context.status) {
    console.log('status', context)
    res.status(context.status)
  }

  if (context.url) {
    console.log('redirect', context)
    res.redirect(301, context.url)
  }

  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Example Index</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="/bundle.js"></script>
    </body>
    </html>
  `)
}
