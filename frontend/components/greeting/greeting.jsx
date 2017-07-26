import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return (
      <nav className="nav-right">
        <div>
            <Link to="/home">
              <button className="header-button">
                <p>Explore</p>
              </button>
            </Link>

            <Link to="/">
              <button onClick={this.handleSubmit} className="header-button">
                <p>Log Out</p>
              </button>
            </Link>
        </div>
      </nav>
    );
  }

}

export default withRouter(Greeting);
