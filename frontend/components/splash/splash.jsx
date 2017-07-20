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
          <h1>Art Portfolio</h1>
          <h4>Discover and showcase creative work. Lorem ipsum dolor sit amet, ne nam ignota nostrud. Suas vero posse id has. Animal commodo recteque vim ut, vidit melius senserit in est. Malis placerat eam ei, ea wisi splendide per. Ad eam aeterno nostrum dissentiunt.</h4>
          <button onClick={this.guestLogin}>Demo</button>
        </section>
      </section>
    );
  }
}

export default Splash;
