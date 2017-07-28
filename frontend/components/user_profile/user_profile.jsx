import React from 'react';
import UserDetail from './user_detail';
import UserMainContainer from './user_main_container';

class UserProfile extends React.Component {
  componentDidMount() {
    this.state = {
      id: this.props.match.params.id
    };

    const id = this.props.match.params.id;
    this.props.fetchUser(id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      const id = nextProps.match.params.id;
      this.props.fetchUser(id);
      this.setState({ id: nextProps.match.params.id });
    }
  }

  render() {
    const user = this.props.user;

    if (Object.keys(user).length === 0) {
      return null;
    }

    return (
      <div className="user-profile">
        <UserDetail user={user} />
        <UserMainContainer />
      </div>
    );
  }
}

export default UserProfile;
