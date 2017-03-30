import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { Link } from 'react-router-dom'

const Home = () => (
  <p>Home 1</p>
)
const About = () => <p>About</p>

const Status = ({ code, children }) => (
  <Route render={({ staticContext }) => {
    if (staticContext) staticContext.status = code
    return children
  }} />
)

const NotFound = () => (
  <Status code={404}>
    <p>Not Found</p>
  </Status>
)

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
      </header>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Redirect from='/old' to='/about' />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}
