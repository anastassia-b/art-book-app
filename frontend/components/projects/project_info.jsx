import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ProjectInfo extends React.Component {
  componentDidMount() {
    const id = this.props.project.user_id;
    this.props.fetchUser(id);
  }

  render() {
    const project = this.props.project;
    const user = this.props.user;

    return (
    <aside className="project-info">
      <Link to={`/users/${user.id}`}>
        <img className="avatar" src={user.avatar_url}/>
      </Link>
    </aside>
    );
  }
}

export default withRouter(ProjectInfo);
