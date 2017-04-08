import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import cx from 'classnames'
import { DEFAULT_FONT } from '../../theme'

/**
 * A Paper component.
 */
function Paper (props) {
  const {
    children,
    classes,
    circle,
    rounded,
    zDepth
  } = props

  const classNames = cx(
    classes.paper,
    circle && classes.circle,
    rounded && classes.rounded,
    zDepth && classes[`zDepth${zDepth}`]
  )

  return (
    <section className={classNames}>
      {children}
    </section>
  )
}

Paper.displayName = 'Paper'

Paper.propTypes = {
  /** Primary content. */
  children: PropTypes.node,
  /** Classes from JSS */
  classes: PropTypes.object.isRequired,
  /** Set to true to generate a circlular paper container. */
  circle: PropTypes.bool,
  /** By default, the paper container will have a border radius. Set this to false to generate a container with sharp corners. */
  rounded: PropTypes.bool,
  /** This number represents the zDepth of the paper shadow. */
  zDepth: PropTypes.number
}

Paper.defaultProps = {
  circle: false,
  rounded: false,
  zDepth: 1
}

const styles = {
  paper: {
    'background-color': 'white',
    'transition': '.3s',
    '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
    'padding': '1rem',
    'align-items': 'center',
    'min-width': '30px',
    'min-height': '30px',
    'font-family': DEFAULT_FONT
  },
  circle: {
    'border-radius': '50%',
    'justify-content': 'center'
  },
  rounded: {
    'border-radius': '2px'
  },
  zDepth1: {
    'box-shadow': 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px'
  },
  zDepth2: {
    'box-shadow': 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px'
  },
  zDepth3: {
    'box-shadow': 'rgba(0, 0, 0, 0.188235) 0px 10px 30px, rgba(0, 0, 0, 0.227451) 0px 6px 10px'
  },
  zDepth4: {
    'box-shadow': 'rgba(0, 0, 0, 0.247059) 0px 14px 45px, rgba(0, 0, 0, 0.219608) 0px 10px 18px'
  },
  zDepth5: {
    'box-shadow': 'rgba(0, 0, 0, 0.298039) 0px 19px 60px, rgba(0, 0, 0, 0.219608) 0px 15px 20px'
  }
}

export default injectSheet(styles)(Paper)
