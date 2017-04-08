import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router'
import Header from './components/Header'
import NotFound from './components/NotFound'
import routes from './routes'
import injectSheet from 'react-jss'

/**
 * App component
 */
const App = ({ classes }) => (
  <div className={classes.root}>
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

App.propTypes = {
  /**
   * Classes from JSS
   */
  classes: PropTypes.object.isRequired
}

const styles = {
  root: {
    background: 'white'
  },
  '@global': {
    body: {
      color: '#333'
    }
  }
}

export default injectSheet(styles)(App)
