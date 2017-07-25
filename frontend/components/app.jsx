import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter, Link, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SessionFormContainer from './session_form/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import SplashContainer from './splash/splash_container';
import ProjectIndexContainer from './projects/project_index_container';
import UserProfileContainer from './user_profile/user_profile_container';

const App = () => (
  <div>
    <header>
      <Link to="/home" className="header-link"><h1>Baehance</h1></Link>
      <AuthRoute path="/" component={SessionFormContainer} />
      <ProtectedRoute path="/home" component={GreetingContainer} />
      <ProtectedRoute path={`/users/:id`} component={GreetingContainer} />
    </header>

    <main className="main">
      <AuthRoute path="/" component={SplashContainer} />
      <ProtectedRoute path="/home" component={ProjectIndexContainer} />
      <ProtectedRoute path={`/users/:id`} component={UserProfileContainer} />
    </main>

    <Route exact path="/"
      render={ () =>
        <footer className="footer">
          <section className="foot-left">
            <h1>About</h1>
            <p>Baehance is a portfolio showcase web application inspired by Behance.</p>
          </section>
          <section className="foot-right">
            <a href="https://github.com/anastassia-b">Github</a>
            <a href="https://www.linkedin.com/in/anastassia-bobokalonova-mit">LinkedIn</a>
            <a href="mailto:email.anastassia@gmail.com">Contact</a>
          </section>
        </footer>
      }
    />
  </div>
);

export default App;
