import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import NotFound from './NotFound'
import routes from '../routes'

export default function App () {
  return (
    <div>
      <header>
        <Link to='/'>home</Link>
        {' | '}
        <Link to='/about'>about</Link>
        {' | '}
        <Link to='/old'>old</Link>
        {' | '}
        <Link to='/asdas'>404</Link>
        {' | '}
        <Link to='/users/kulakowka'>user</Link>
      </header>
      <Switch>
        {routes.map(route => (
          <Route {...route} key={route.path} />
        ))}
        <Redirect from='/old' to='/about' />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}
