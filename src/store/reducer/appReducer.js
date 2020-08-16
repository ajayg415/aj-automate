import actionTypes from '../actions/actionTypes'

let initialStore = {
  appMessage: {},
  workflows: [],
  activeWorkflow: {}
} 

const appReducer = ( state = initialStore, action) => {
  switch(action.type) {
    case actionTypes.SHOW_APP_MESSAGE:
      return { ...state,
        appMessage : action.payload
      }
    case actionTypes.CLEAR_APP_MESSAGE:
      return { ...state,
        appMessage : {}
      }
    case actionTypes.LOAD_WORKFLOWS: 
      return {...state,
      workflows: action.payload
    }
    default:
      return state;
  }
}

export default appReducer
