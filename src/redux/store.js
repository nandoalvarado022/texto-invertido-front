import { createStore } from "redux"

const initialState = {
  history: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case "@words/added":
      return {
        ...state,
        history: action.payload,
      }
    default:
      return state
  }
}

export const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())