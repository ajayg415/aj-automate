import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import rootReducer from '../reducer';
import { validateLogin } from './appSagas'

const sagaMiddleWare = createSagaMiddleWare();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(validateLogin);

export default store;