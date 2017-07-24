import React from 'react';

class ProjectInfo extends React.Component {
  componentDidMount() {
    const id = this.props.project.user_id;
    this.props.fetchUser(id);
  }

  render() {
    const project = this.props.project;
    const user = this.props.user;

    return (
    <div className="project-info">
      {user.avatar_url}
    </div>
    );
  }
}

export default ProjectInfo;
