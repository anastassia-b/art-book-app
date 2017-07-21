import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter, Link, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SessionFormContainer from './session_form/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import SplashContainer from './splash/splash_container';
import ProjectIndexContainer from './projects/project_index_container';
import ImageIndexContainer from './images/image_index_container';

const App = () => (
  <div>
    <header>
      <Link to="/home" className="header-link"><h1>Baehance</h1></Link>
      <AuthRoute path="/" component={SessionFormContainer} />
      <ProtectedRoute path="/home" component={GreetingContainer} />
    </header>

    <main className="main">
      <AuthRoute path="/" component={SplashContainer} />
      <ProtectedRoute path="/home" component={ProjectIndexContainer} />
      <Route path={`/projects/:id`} component={ImageIndexContainer} />
    </main>
  </div>
);

export default App;
