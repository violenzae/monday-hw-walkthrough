import * as c from "../actions/ActionTypes"

// import * as c from "./../actions"
let defaultState= {
  isLoading: false,
  headlines: [],
  error: null
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case c.REQUEST_HEADLINES:
      return Object.assign({}, state, {
        isLoading: true
      })
    default:
      return state
  }
}




