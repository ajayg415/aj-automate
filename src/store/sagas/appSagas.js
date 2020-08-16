import { put, call, take } from 'redux-saga/effects'
import axios from 'axios';

import actionTypes from '../actions/actionTypes'
import * as actions from '../actions'

const getWorkflows = async () => {
  const call = await axios.get('http://localhost:5000/workflows')
  return await call.data
}

export const validateLogin = function* (){
  while(true) {
    const { username, password } = yield take(actionTypes.CHECK_LOGIN)
    try {
      if(username === 'admin' && password === 'admin'){ //have to do a real backend call in real cases
        yield put(actions.userLogin())
        const data = yield call(getWorkflows)
        yield put(actions.loadWorkflow(data))
        yield put(actions.clearMessage())
      } else {
        yield put(actions.showMessage({
          type: 'error',
          message: 'Please enter valid username and password'
        }))
      }
    } catch(error) {
      yield put(actions.showMessage({
        type: 'error',
        message: 'Something went wrong, please try again later'
      }))
    }
  }
}

 