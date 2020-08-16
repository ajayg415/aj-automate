import React from 'react';
import './App.css';

import AppHeader from './components/app-header/AppHeader';
import AppLogin from './components/app-login/AppLogin'

function App() {
  return (
    <div className="automate-app container">
      <AppHeader /> 
      <AppLogin />
    </div>
  );
}

export default App;
