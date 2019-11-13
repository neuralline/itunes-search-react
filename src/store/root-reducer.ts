const initialState = {
  tunes: [],
  palylist:[],
  favorite:[]
}

interface Action {
  type: string
  payload: any
}

const rootReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'UPDATE':
      return {
        ...state,
        tunes: action.payload
      }
    case 'RESULT':
      return {
        ...state
      }
    default:
      return state
  }
}

export default rootReducer
