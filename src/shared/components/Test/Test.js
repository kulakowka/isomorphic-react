import React, { PropTypes } from 'react'
import injectSheet from 'react-jss'

/**
 * A Test component.
 */
function Test (props) {
  const {
    children,
    classes
  } = props

  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}

Test.displayName = 'Test'

Test.propTypes = {
  /**
   * Primary content.
   */
  children: PropTypes.node,

  /**
   * Classes from JSS
   */
  classes: PropTypes.object.isRequired
}

Test.defaultProps = {}

const styles = {
  root: {
    display: 'flex'
  }
}

export default injectSheet(styles)(Test)
