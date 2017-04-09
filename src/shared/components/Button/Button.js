import React, { Component } from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import { DEFAULT_FONT } from '../../theme'
import Ripple from '../Ripple'

/**
 * A Button component.
 */
class Button extends Component {
  constructor () {
    super()
    this.state = {
      ripples: []
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e, b) {
    // console.log(e, b)
    // console.log('this.button', this.button)
    // console.log('event', e)
    console.dir(e.currentTarget)
    // Get Cursor Position
    let cursorPos = {
      top: e.clientY - e.currentTarget.offsetTop - 25,
      left: e.clientX - e.currentTarget.offsetLeft - 25
    }
    // console.log('cursorPos', cursorPos, {
    //   offsetLeft: this.button.offsetLeft,
    //   offsetTop: this.button.offsetTop
    // })

    this.setState({
      ripples: this.state.ripples.concat(<Ripple key={Date.now()} cursorPos={cursorPos} isVisible />)
    })

    setTimeout(() => {
      this.setState({
        ripples: this.state.ripples.filter((r, i) => !!i)
      })
    }, 1000)
  }
  render () {
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
    } = this.props

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
        <Link
          to={href}
          ref={button => { this.button = button }}
          className={classNames}
          {...otherProps}
          onMouseUp={this.handleClick}
          onTouchEnd={this.handleClick}
        >
          {content || children}
          {this.state.ripples}
        </Link>
      )
    }

    return (
      <button
        ref={button => { this.button = button }}
        className={classNames}
        {...otherProps}
        onMouseUp={this.handleClick}
        onTouchEnd={this.handleClick}
      >
        {content || children}
        {this.state.ripples}
      </button>
    )
  }
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
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-flex',
    padding: 0,
    margin: 0,
    border: 0,
    cursor: 'pointer',
    userSelect: 'none',
    background: '#ddd',
    color: '#222',
    textDecoration: 'none',
    textTransform: 'uppercase',
    'box-shadow': '0 9px 3px 0px rgba(0,0,0,0.15)',
    transition: '0.1s all',
    '&:focus': {
      outline: 0
    },
    '&:hover': {
      background: '#eee',
      // boxShadow: '0 0 0 3px #ddd',
      'box-shadow': '0 5px 3px 0px rgba(0,0,0,0.1)',
      transform: 'scale(1.1)',
      position: 'relative',
      zIndex: 2
      // transform: 'translateY(4px)'
    },
    '&:active': {
      background: '#ddd',
      transform: 'scale(1)',
      'box-shadow': '0 9px 3px 0px rgba(0,0,0,0.15)'
    }
  },
  primary: {
    background: 'darkblue',
    color: 'white',
    '&:hover': {
      background: 'blue'
    },
    '&:active': {
      background: 'darkblue'
      // boxShadow: '0 0 0 3px darkblue'
    }
  },
  positive: {
    background: '#3e8e41',
    color: 'white',
    '&:hover': {
      background: '#4CAF50'
    },
    '&:active': {
      background: '#3e8e41'
      // boxShadow: '0 0 0 3px darkgreen'
    }
  },
  negative: {
    background: 'darkred',
    color: 'white',
    '&:hover': {
      background: 'red'
    },
    '&:active': {
      background: 'darkred'
      // boxShadow: '0 0 0 3px darkred'
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
