import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestSubmit = this.handleGuestSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  handleGuestSubmit(e) {
    e.preventDefault();
    const user = {
      username: "guest",
      password: "password"
    };
    this.props.guestLogin(user);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">New user? Sign up instead!</Link>;
    } else {
      return <Link to="/login">Have an account? Login instead!</Link>;
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  emailInput() {
    if (this.props.formType === 'login') {
      return ;
    } else {
      return (
        <label className="login-input">
          <input type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.update('email')}
          />
        </label>
      );
    }
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
        <span className="welcome-text">Welcome to Baehance!</span>
        <span className="session-errors">
          {this.renderErrors()}
        </span>
        <div className="login-form">

          <label className="login-input">
            <input type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.update('username')}
            />
          </label>

          {this.emailInput()}

          <label className="login-input">
            <input type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>

          <div className="session-button-container">
            <input className="session-button" type="submit" value={this.props.formType} />
            <button className="session-button" onClick={this.handleGuestSubmit}>demo</button>
          </div>
          <span className="alternate-session">{this.navLink()}</span>
        </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
