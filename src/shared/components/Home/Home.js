import React from 'react'
import PropTypes from 'prop-types'
import Paper from '../Paper'
import Button from '../Button'
import injectSheet from 'react-jss'
import { DEFAULT_FONT } from '../../theme'

/**
 * A home page root comoponent
 */
const Home = ({ classes, counter, incrementCounter }) => (
  <Paper>
    <h1 className={classes.title}>Home</h1>
    <div className={classes.counter}>{`Counter: ${counter} 2`}</div>
    <Button primary onClick={incrementCounter}>
      increment
    </Button>
  </Paper>
)

Home.propTypes = {
  /** Counter value */
  counter: PropTypes.number.isRequired,
  /** Increment counter action creator */
  incrementCounter: PropTypes.func.isRequired,
  /** Classes from JSS */
  classes: PropTypes.object.isRequired
}

Home.loadData = (match) => Promise.resolve({ data: 1, match })

const styles = {
  title: {
    fontFamily: DEFAULT_FONT,
    fontSize: '50px',
    fontWeight: 'bold',
    margin: 0
  },
  counter: {
    fontFamily: DEFAULT_FONT,
    fontSize: '20px',
    margin: '50px 0'
  }
}

export default injectSheet(styles)(Home)
