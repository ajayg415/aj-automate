import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import AppHeader from './components/app-header/AppHeader';
import AppMessage from './components/app-message/AppMessage'
import AppLogin from './components/app-login/AppLogin'
import AppWorkflows from './components/app-workflow/AppWorkflows'
import { userLogout } from './store/actions'

import './App.css';

const App = ({ isAuth, dispatchLogOut }) => {
  return (
    <Router>
      <div className="automate-app container">
        <AppHeader dispatchLogOut={dispatchLogOut} isAuth={isAuth} /> 
        <AppMessage />
        <Switch>
          <Route path="/" exact component={AppLogin} />
          <Route path="/workflows" component={AppWorkflows} render={() => {
            return !isAuth ? <Redirect to="/" /> : ''
          }} />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state => ({
  isAuth: state.appReducer.isAuth
})

const mapDispatchToProps = dispatch => ({
  dispatchLogOut: () => dispatch(userLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
