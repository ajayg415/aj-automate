import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import AppHeader from './components/app-header/AppHeader';
import AppMessage from './components/app-message/AppMessage'
import AppLogin from './components/app-login/AppLogin'

import './App.css';

const App = ({ isAuth }) => {
  console.log('isAuth :', isAuth)
  return (
    <Router>
      <div className="automate-app container">
        <AppHeader /> 
        <AppMessage />
        <Switch>
          <Route path="/" exact component={AppLogin}/>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state => ({
  isAuth: state.appReducer.isAuth
})

export default connect(mapStateToProps, null)(App);
