import React from 'react';
import UserDetail from './user_detail';

class UserProfile extends React.Component {
  compoentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const user = this.props.user;

    return (
      <div className="user-profile">
        <UserDetail user={user} />
      </div>
    );
  }
}

export default UserProfile;
