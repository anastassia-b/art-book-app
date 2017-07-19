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
      <div className="splash-image">
        <section className="splash-text">
          <h1>Splash Text</h1>
          <button onClick={this.guestLogin}>Demo</button>
        </section>
      </div>
    );
  }
}

export default Splash;
