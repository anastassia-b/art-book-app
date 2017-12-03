import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';
import style from './modal_style';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      modalOpen: false,
      logIn: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.guestSignup = this.guestSignup.bind(this);
    this.switchForms = this.switchForms.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    if (this.state.logIn) {
      this.props.login(user);
    } else {
      this.props.signup(user);
    }
  }

  guestSignup(e) {
    e.preventDefault();

    let name = "guest";
    let email = "guest@gmail.com"
    let pw = "password";

    for ( let i = 0; i < name.length; i++ ) {
        setTimeout(() => this.setState({
            username: name.slice(0, i + 1)
        }), i * 50);
    }

    if (!this.state.logIn) {
      for ( let j = 0; j < email.length; j++ ) {
          setTimeout(() => this.setState({
              email: email.slice(0, j + 1)
          }), (j + 9) * 50);
      }
    }

    for ( let k = 0; k < pw.length; k++ ) {
      setTimeout(() => this.setState({
        password: pw.slice(0, k + 1)
      }), (k + 25) * 50);
    }

    setTimeout(() => this.props.login(this.state), 2000)
  }

  guestLogin(e) {
    e.preventDefault();
    let name = "guest";
    let pw = "password";

    for ( let i = 0; i < name.length; i++ ) {
        setTimeout(() => this.setState({
            username: name.slice(0, i + 1)
        }), i * 50);
    }

    for ( let k = 0; k < pw.length; k++ ) {
      setTimeout(() => this.setState({
        password: pw.slice(0, k + 1)
      }), (k + 10) * 50);
    }

    setTimeout(() => this.props.login(this.state), 1300)
  }

  renderErrors() {
    return(
      <div className="session-errors">
      <ul>
        {this.props.errors.map((error, i) =>(
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
      </div>
    );
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal(bool) {
    this.props.clearErrors();
    this.setState({
      modalOpen: true,
      logIn: bool
    });
  }

  formHeader() {
    return (this.state.logIn) ? <h3>Log in to ArtBook</h3> : <h3>Join ArtBook</h3>;
  }

  formButton() {
    return (this.state.logIn) ? "Log in" : "Sign up";
  }

  switchForms() {
    this.props.clearErrors();
    this.setState({
      logIn: !this.state.logIn
    });
  }

  switchButton() {
    return (this.state.logIn) ? <p>Don't have an account? Sign up</p> : <p>Already have an account? Log in</p>;
  }

  emailInput() {
    if (!this.state.logIn) {
      return (
        <input type="text"
          className="login-input"
          placeholder="Email"
          value={this.state.email}
          onChange={this.update('email')}
        />
      );
    }
  }

  render() {
    return (
      <nav className="nav-right">

        <div className="header-group">
          <button className="header-button" onClick={this.openModal.bind(this, true)}>Login</button>
          <button className="header-button" onClick={this.openModal.bind(this, false)}>Sign up</button>
        </div>

        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style}>

          <div className="login-form-container">
            <div className="x-button">
              <button onClick={this.closeModal}><i aria-hidden="true"></i></button>
            </div>

            <form className="login-form-box">
              {this.formHeader()}
              {this.renderErrors()}

              <div className="login-form">
                <input type="text"
                  className="login-input"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.update('username')}
                />

                {this.emailInput()}

                <input type="password"
                  className="login-input"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.update('password')}
                />
              </div>

              <div className="session-button-container">
                <button className="session-button" onClick={this.handleSubmit}>{this.formButton()}</button>
                <button className="session-button" onClick={this.state.logIn ? this.guestLogin : this.guestSignup}>Guest</button>
              </div>

              <a
                href="/#"
                className="switch-forms"
                onClick={this.switchForms}
              >
                {this.switchButton()}
              </a>
            </form>
          </div>
        </Modal>
      </nav>
    );
  }

}

export default withRouter(SessionForm);
