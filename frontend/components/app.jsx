import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter, Link, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session_form/session_form_container';
import GreetingContainer from './greeting/greeting_container';


const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Baehance</h1>
      </Link>
      <AuthRoute path="/" component={SessionFormContainer} />
    </header>

    <main className="main">


    </main>
  </div>
);

export default App;


// before:
//
// const App = () => (
//   <div>
//     <header>
//       <Link to="/" className="header-link">
//         <h1>Baehance</h1>
//       </Link>
//       <GreetingContainer />
//     </header>
//     <AuthRoute path="/login" component={SessionFormContainer} />
//     <AuthRoute path="/signup" component={SessionFormContainer} />
//   </div>
// );
