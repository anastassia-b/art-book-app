import React from 'react';

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

  render() {
    return (
      <section className="parallax">
        <section className="splash-text">
          <h1>Art Portfolio</h1>
          <h4>All your favorite art, all in one place. Showcase creative work and discover pieces from past and present.</h4>
          <button className="session-button" onClick={this.guestLogin}>Demo</button>
        </section>
      </section>
    );
  }
}

export default Splash;
