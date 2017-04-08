import { connect } from 'react-redux'
import Home from '../components/Home/Home'

export default connect(
  (state, props) => ({
    counter: state.counter
  }),
)(Home)