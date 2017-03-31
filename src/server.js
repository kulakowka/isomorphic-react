import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './components/App'
import { resolve } from 'path'

express()
.use(express.static(resolve(__dirname, '../public')))
.use(handleRequest)
.listen(3000)

function getAssetsPath () {
  if (process.env.NODE_ENV === 'production') {
    const manifest = require('../public/manifest.json')
    return `<script src="/${manifest['vendor.js']}"></script>
    <script src="/${manifest['main.js']}"></script>`
  }
  return '<script src="/bundle.js"></script>'
}

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
      ${getAssetsPath()}
    </body>
    </html>
  `)
}
