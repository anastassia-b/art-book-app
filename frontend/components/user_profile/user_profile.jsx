import React from 'react';
import UserDetail from './user_detail';
import UserMain from './user_main';

class UserProfile extends React.Component {
  // componentDidMount() {
  //   this.props.fetchUser();
  // }

  render() {
    const user = this.props.user;

    return (
      <div className="user-profile">
        <UserDetail user={user} />
        <UserMain user={user} />
      </div>
    );
  }
}

export default UserProfile;
