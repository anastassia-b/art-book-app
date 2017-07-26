import React from 'react';
import Scroll from 'react-scroll';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.guestLogin = this.guestLogin.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  guestLogin(e) {
    e.preventDefault();
    const user = {username: 'guest', password: 'password'};
    this.props.login(user);
    this.handleScroll();
  }

  handleScroll() {
    let scroll = Scroll.animateScroll;
    scroll.scrollTo(900, {
      duration: 1500,
      delay: 50,
      smooth: true
    });
  }

  render() {
    return (
      <section className="parallax">
        <section className="splash-text">
          <h1>Art Portfolio</h1>
          <h4>All your favorite art, all in one place. Showcase creative work and discover pieces from past and present.</h4>
          <button className="session-button"
                  onClick={this.guestLogin}>Demo</button>
        </section>
      </section>
    );
  }
}

export default Splash;
