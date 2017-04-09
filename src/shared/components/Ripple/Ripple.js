import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

/**
 * A Ripple component.
 */
var Ripple = ({ classes, cursorPos, isVisible }) => {
  let style = {
    left: cursorPos.left,
    top: cursorPos.top
  }

  return (
    <div className={isVisible && classes.ripple} style={style} />
  )
}

const styles = {
  ripple: {
    position: 'absolute',
    'border-radius': '50%',
    width: '50px',
    height: '50px',
    animation: 'ripple-animation 1s',
    'animation-fill-mode': 'forwards',
    background: 'rgba(0, 0, 0, 0.5)'
  },
  '@keyframes ripple-animation': {
    from: {
      transform: 'scale(1)',
      opacity: 0.4
    },
    to: {
      transform: 'scale(10)',
      opacity: 0
    }
  }
}

Ripple.propTypes = {
  cursorPos: PropTypes.object,
  isVisible: PropTypes.bool,
  /** Classes from JSS */
  classes: PropTypes.object.isRequired
}

Ripple.displayName = 'Ripple'

Ripple.defaultProps = {
  isVisible: false,
  cursorPos: {
    left: 0,
    top: 0
  }
}

export default injectSheet(styles)(Ripple)
