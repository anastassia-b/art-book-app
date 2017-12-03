import React from 'react';
import Scroll from 'react-scroll';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.guestLogin = this.guestLogin.bind(this);
  }

  guestLogin(e) {
    e.preventDefault();
    const user = {username: 'guest', password: 'password'};
    this.props.login(user);
  }

  demoButton() {
    const name = this.props.currentUser.username;
    if (this.props.currentUser) {
      return (<h4>Welcome, {name}.</h4>)
    } else {
    return (
      <button className="session-button" onClick={this.guestLogin}>Demo</button>
    )}
  }

  render() {
    return (
      <section className="parallax">
        <section className="splash-text">
          <h1>Art Portfolio</h1>
          <h4>All your favorite art, all in one place. Showcase creative work and discover pieces from past and present.</h4>
          { this.demoButton() }
        </section>
      </section>
    );
  }
}

export default Splash;
