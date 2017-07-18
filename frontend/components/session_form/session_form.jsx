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
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">login instead</Link>;
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
        Welcome to Baehance!
        <br/>
        Please {this.props.formType} or {this.navLink()}
        {this.renderErrors()}
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

          <input type="submit" value="Submit" className="submit-button"/>
        </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
