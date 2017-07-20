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
      <section className="splash-image">
        <section className="splash-text">
          <h1>Splash Text</h1>
          <h4>More text</h4>
          <button onClick={this.guestLogin}>Demo</button>
        </section>
      </section>
    );
  }
}

export default Splash;
