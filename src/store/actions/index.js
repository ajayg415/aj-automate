import actionTypes from './actionTypes'

export const chkLogin = payload => ({
  type: actionTypes.CHECK_LOGIN,
  username: payload.username,
  password: payload.password
})

export const showMessage = payload => ({
  type: actionTypes.SHOW_APP_MESSAGE,
  payload
})

export const clearMessage = () => ({
  type: actionTypes.CLEAR_APP_MESSAGE
})

export const loadWorkflow = payload => ({
  type: actionTypes.LOAD_WORKFLOWS,
  payload
})

export const addWorkflow = payload => ({
  type: actionTypes.ADD_WORKFLOWS,
  payload
})

export const updateWorkflow = payload => ({
  type: actionTypes.UPDATE_WORKFLOWS,
  payload
})

export const removeWorkflow = payload => ({
  type: actionTypes.REMOVE_WORKFLOW,
  payload
})

export const userLogin = () => ({
  type: actionTypes.USER_AUTH_SUCCESS
})

export const userLogout = () => ({
  type: actionTypes.USER_LOGOUT
})

export const showLoader = () => ({
  type: actionTypes.SHOW_LOADER
})

export const hideLoader = () => ({
  type: actionTypes.HIDE_LOADER
})
