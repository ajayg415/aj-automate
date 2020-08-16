import actionTypes from './actionTypes'

export const chkLogin = payload => ({
  type: actionTypes.CHECK_LOGIN,
  payload
})

export const showMessage = payload => ({
  type: actionTypes.SHOW_APP_MESSAGE,
  payload
})

export const clearMessage = () => ({
  type: actionTypes.SHOW_APP_MESSAGE
})

export const loadWorkflow = payload => ({
  type: actionTypes.LOAD_WORKFLOWS,
  payload
})

export const addWorkflow = payload => ({
  type: actionTypes.ADD_WORKFLOWS,
  payload
})

export const updateWorkflow = payoad => ({
  type: actionTypes.UPDATE_WORKFLOWS
})

export const removeWorkflow = payload => ({
  type: actionTypes.REMOVE_WORKFLOW,
  payload
})