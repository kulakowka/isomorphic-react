import React from 'react'
import { connect } from 'react-redux'

const Home = ({ counter }) => (
  <p>{`Home ${counter} 2`}</p>
)

Home.loadData = (match) => Promise.resolve({ data: 1, match })

export default connect(
  (state, props) => ({
    counter: state.counter
  }),
)(Home)
