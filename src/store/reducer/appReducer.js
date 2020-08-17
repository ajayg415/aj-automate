import actionTypes from '../actions/actionTypes'

let initialStore = {
  appMessage: {},
  workflows: [],
  activeWorkflow: {},
  isAuth: false
} 

const appReducer = ( state = initialStore, action) => {
  switch(action.type) {
    case actionTypes.USER_AUTH_SUCCESS:
      return { ...state,
        isAuth: true
      }
    case actionTypes.USER_LOGOUT:
      return { ...state,
        isAuth: false,
        workflows: []
      }
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
    case actionTypes.REMOVE_WORKFLOW:
      return {...state,
        workflows: state.workflows.filter(workflow => workflow.id !== action.payload.id)
      }
    case actionTypes.UPDATE_WORKFLOWS:
      const flows = state.workflows.filter(flow => flow.id !== action.payload.id)
      return {...state,
        workflows: [ ...flows, action.payload]
      }
    default:
      return state;
  }
}

export default appReducer
