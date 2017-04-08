import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import injectSheet from 'react-jss'

const Header = ({ classes }) => (
  <header className={classes.header}>
    <Button href='/'>home</Button>
    <Button href='/about'>about</Button>
    <Button href='/old'>old</Button>
    <Button href='/asdas'>404</Button>
    <Button href='/users/kulakowka'>user</Button>
  </header>
)

Header.propTypes = {
  /**
   * Classes from JSS
   */
  classes: PropTypes.object.isRequired
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-start'
  }
}

export default injectSheet(styles)(Header)
