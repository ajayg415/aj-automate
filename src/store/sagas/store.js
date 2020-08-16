import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import rootReducer from '../reducer';
import validateLogin from './appSagas'

const sagaMiddleware = createSagaMiddleWare();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(validateLogin);

export default store;