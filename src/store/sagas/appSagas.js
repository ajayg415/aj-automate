import { put, call, take } from 'redux-saga/effects'
import axios from 'axios';

import actionTypes from '../actions/actionTypes'
import actions from '../actions'

const getWorkflows = () => axios.get('http://localhost:5000/workflows')

export const validateLogin = function* (){
  while(true) {
    const { user } = yield take(actionTypes.CHECK_LOGIN)
    try {
      if(user.userName === 'admin' && user.password === 'admin'){ //have to do a real backend call in real cases
        const data = yield call(getWorkflows)
        yield put(actions.loadWorkflow(data))
        yield put(action.clearMessage())
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

 