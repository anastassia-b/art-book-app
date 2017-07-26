import React from 'react';
import UserDetail from './user_detail';
import UserMainContainer from './user_main_container';

class UserProfile extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchUser(id);
  }

  render() {
    const user = this.props.user;

    return (
      <div className="user-profile">
        <UserDetail user={user} />
        <UserMainContainer />
      </div>
    );
  }
}

export default UserProfile;
