import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import { DEFAULT_FONT } from '../../theme'

/**
 * A Button component.
 */
function Button (props) {
  const {
    children,
    href,
    content,
    classes,
    primary,
    positive,
    negative,
    rounded,
    size,
    onClick
  } = props

  const classNames = cx(
    classes.button,
    primary && classes.primary,
    positive && classes.positive,
    negative && classes.negative,
    rounded && classes.rounded,
    size && classes[`${size}-size`]
  )

  const otherProps = {
    onClick
  }

  if (href) {
    return (
      <Link to={href} className={classNames} {...otherProps}>
        {content || children}
      </Link>
    )
  }

  return (
    <button className={classNames} {...otherProps}>
      {content || children}
    </button>
  )
}

Button.displayName = 'Button'

Button.propTypes = {
  /** Link href */
  href: PropTypes.string,
  /** Primary content. */
  children: PropTypes.node,
  /** Primary content. */
  content: PropTypes.node,
  /** Classes from JSS */
  classes: PropTypes.object.isRequired,
  /** Is primary */
  primary: PropTypes.bool,
  /** Is positive */
  positive: PropTypes.bool,
  /** Is negative */
  negative: PropTypes.bool,
  /** Is rounded */
  rounded: PropTypes.bool,
  /** Size: small|default|big */
  size: PropTypes.string.isRequired,
  /** On click callback */
  onClick: PropTypes.func
}

Button.defaultProps = {
  size: 'default',
  rounded: true
}

const styles = {
  button: {
    fontFamily: DEFAULT_FONT,
    display: 'inline-flex',
    padding: 0,
    margin: 0,
    border: 0,
    cursor: 'pointer',
    userSelect: 'none',
    background: '#eee',
    color: '#222',
    textDecoration: 'none',
    textTransform: 'uppercase',
    '&:hover': {
      background: '#ddd'
    },
    '&:focus': {
      outline: 0
    },
    '&:active': {
      boxShadow: '0 0 0 3px #ddd'
    }
  },
  primary: {
    background: 'blue',
    color: 'white',
    '&:hover': {
      background: 'darkblue'
    },
    '&:active': {
      boxShadow: '0 0 0 3px darkblue'
    }
  },
  positive: {
    background: 'green',
    color: 'white',
    '&:hover': {
      background: 'darkgreen'
    },
    '&:active': {
      boxShadow: '0 0 0 3px darkgreen'
    }
  },
  negative: {
    background: 'red',
    color: 'white',
    '&:hover': {
      background: 'darkred'
    },
    '&:active': {
      boxShadow: '0 0 0 3px darkred'
    }
  },
  rounded: {
    borderRadius: '5px'
  },
  'small-size': {
    padding: '15px 30px',
    fontSize: '16px',
    lineHeight: '16px'
  },
  'default-size': {
    padding: '20px 40px',
    fontSize: '20px',
    lineHeight: '20px'
  },
  'big-size': {
    padding: '30px 60px',
    fontSize: '28px',
    lineHeight: '28px'
  }
}

export default injectSheet(styles)(Button)
