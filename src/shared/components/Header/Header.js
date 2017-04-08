import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import injectSheet from 'react-jss'

const Header = ({ classes }) => (
  <header className={classes.root}>
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
)

Header.propTypes = {
  /**
   * Classes from JSS
   */
  classes: PropTypes.object.isRequired
}

const styles = {
  root: {
    background: 'pink'
  }
}

export default injectSheet(styles)(Header)
