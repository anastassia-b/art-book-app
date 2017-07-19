import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => (
  <nav className="home-nav-right">
    <div>
        <Link to="/home">
          <button className="header-homefeed">
            <p>Home Feed</p>
          </button>
        </Link>

        <Link to="/" onClick={logout}>
          <button className="header-button">
            <p>Log Out</p>
          </button>
        </Link>

    </div>
  </nav>
);

export default withRouter(Greeting);
