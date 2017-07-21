import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => (
  <nav className="nav-right">
    <div>
        <Link to="/home">
          <button className="header-button">
            <p>Explore</p>
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
