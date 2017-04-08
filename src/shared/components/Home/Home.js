import React from 'react'
import PropTypes from 'prop-types'

/**
 * A home page root comoponent
 */
const Home = ({ counter, incrementCounter }) => (
  <div>
    <h1>Home</h1>
    <p>{`Counter: ${counter} 2`}</p>
    <button onClick={incrementCounter}>
      increment
    </button>
  </div>
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
