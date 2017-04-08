import React, { PropTypes } from 'react'

/**
 * A home page root comoponent
 */
const Home = ({ counter }) => (
  <p>{`Home ${counter} 2`}</p>
)

Home.propTypes = {
  /**
   * Counter value
   */
  counter: PropTypes.number.isRequired
}

Home.loadData = (match) => Promise.resolve({ data: 1, match })

export default Home
