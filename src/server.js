import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
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

  const counter = parseInt(req.query.counter, 10) || 0

  // Compile an initial state
  let preloadedState = { counter }

  // Create a new Redux store instance
  const store = createStore(reducers, preloadedState)

  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter
        location={req.url}
        context={context}
      >
        <App />
      </StaticRouter>
    </Provider>
  )

  if (context.status) {
    console.log('status', context)
    res.status(context.status)
  }

  if (context.url) {
    console.log('redirect', context)
    res.redirect(301, context.url)
  }

  // Grab the initial state from our Redux store
  const finalState = store.getState()

  // Send the rendered page back to the client
  res.send(renderFullPage(html, finalState))
}

function renderFullPage (html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        ${getAssetsPath()}
      </body>
    </html>
    `
}
