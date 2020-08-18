import actionTypes from '../actions/actionTypes'

let initialStore = {
  appMessage: {},
  workflows: [],
  activeWorkflow: {},
  isAuth: false,
  loading: false
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
      return {...state,
        workflows: state.workflows.reduce((a,c) => {
          return (c.id === action.payload.id) ? [...a, action.payload] : [...a, c]
        },[])
      }
    case actionTypes.SHOW_LOADER:
      return {...state,
        loading: true
      }
    case actionTypes.HIDE_LOADER:
      return {...state,
        loading: false
      }
    default:
      return state;
  }
}

export default appReducer
