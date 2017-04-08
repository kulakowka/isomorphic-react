import React from 'react'
import PropTypes from 'prop-types'
import Paper from '../Paper'

/**
 * A home page root comoponent
 */
const Home = ({ counter, incrementCounter }) => (
  <Paper>
    <h1>Home</h1>
    <p>{`Counter: ${counter} 2`}</p>
    <button onClick={incrementCounter}>
      increment
    </button>
  </Paper>
)

Home.propTypes = {
  /**
   * Counter value
   */
  counter: PropTypes.number.isRequired,
  /**
   * Increment counter action creator
   */
  incrementCounter: PropTypes.func.isRequired
}

Home.loadData = (match) => Promise.resolve({ data: 1, match })

export default Home
