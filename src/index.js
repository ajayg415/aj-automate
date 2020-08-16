import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { IconContext } from "react-icons";

import store from './store/sagas/store'
import './assets/main.css';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <IconContext.Provider value={{ className: "react-icons" }}>
      <App />
    </IconContext.Provider>
  </Provider>,
  document.getElementById('root')
);

