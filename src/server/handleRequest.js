import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../shared/reducers'
import routes from '../shared/routes'
import { StaticRouter } from 'react-router'
import App from '../shared'
import { matchPath } from 'react-router-dom'
import {SheetsRegistryProvider, SheetsRegistry} from 'react-jss'
import renderFullPage from './renderFullPage'

export default function handleRequest (req, res, next) {
  const context = {}

  const sheets = new SheetsRegistry()

  // inside a request
  const promises = []
  // use `some` to imitate `<Switch>` behavior of selecting only
  // the first to match
  routes.some(route => {
    // use `matchPath` here
    const match = matchPath(req.url, route)
    if (match) promises.push(route.component.loadData(match))
    return match
  })

  Promise.all(promises).then(data => {
    // do something w/ the data so the client
    // can access it then render the app
    const counter = parseInt(req.query.counter, 10) || 0

    // Compile an initial state
    let preloadedState = { counter, data }

    // Create a new Redux store instance
    const store = createStore(reducers, preloadedState)

    const html = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter
          location={req.url}
          context={context}
        >
          <SheetsRegistryProvider registry={sheets}>
            <App />
          </SheetsRegistryProvider>
        </StaticRouter>
      </Provider>
    )

    if (context.status) {
      res.status(context.status)
    }

    if (context.url) {
      res.redirect(301, context.url)
    }

    // Grab the initial state from our Redux store
    const finalState = store.getState()

    // Send the rendered page back to the client
    res.send(renderFullPage({ sheets, html, finalState }))
  })
}
