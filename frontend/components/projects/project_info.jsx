import React from 'react';

class ProjectInfo extends React.Component {
  render() {
    const project = this.props.project;

    return (
    <div className="project-info">
      {project.user_id}
      get user image
    </div>
    );
  }
}

export default ProjectInfo;
