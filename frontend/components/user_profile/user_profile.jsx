import React from 'react';
import UserDetail from './user_detail';
import UserMainContainer from './user_main_container';

class UserProfile extends React.Component {

  render() {
    const user = this.props.user;

    return (
      <div className="user-profile">
        <UserDetail user={user} />
        <UserMainContainer user={user} />
      </div>
    );
  }
}

export default UserProfile;
