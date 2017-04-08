// Reducers
export default function reducer (state = {}, action) {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {
        counter: state.counter + 1
      })
    default:
      return state
  }
}
