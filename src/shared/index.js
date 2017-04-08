import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Header from './components/Header'
import NotFound from './components/NotFound'
import routes from './routes'

/**
 * App component
 */
const App = () => (
  <div>
    <Header />
    <Switch>
      {routes.map(route => (
        <Route {...route} key={route.path} />
      ))}
      <Redirect from='/old' to='/about' />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
