import React from 'react';
import ReactDOM from 'react-dom';
import { IconContext } from "react-icons";

import './assets/main.css';
import './index.css';
import App from './App';

ReactDOM.render(
  <IconContext.Provider value={{ className: "react-icons" }}>
    <App />
  </IconContext.Provider>,
  document.getElementById('root')
);

