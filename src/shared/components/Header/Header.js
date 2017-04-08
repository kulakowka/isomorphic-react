import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import injectSheet from 'react-jss'

const Header = ({ classes }) => (
  <header className={classes.header}>
    <Button rounded={false} href='/'>home</Button>
    <Button rounded={false} href='/about'>about</Button>
    <Button rounded={false} href='/old'>old</Button>
    <Button rounded={false} href='/asdas'>404</Button>
    <Button rounded={false} href='/users/kulakowka'>user</Button>
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
