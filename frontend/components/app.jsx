import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter, Link, Switch, Redirect } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Baehance</h1>
      </Link>
      <GreetingContainer />
    </header>
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
