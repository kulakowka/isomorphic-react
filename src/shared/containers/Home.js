import { connect } from 'react-redux'
import Home from '../components/Home'

export default connect(
  (state, props) => ({
    counter: state.counter
  }),
  (dispatch, props) => ({
    incrementCounter: () => dispatch({ type: 'INCREMENT' })
  })
)(Home)
