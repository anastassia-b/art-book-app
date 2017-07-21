import React from 'react';
import { Link } from 'react-router-dom';

class ProjectIndex extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    const projects = this.props.projects;

    return (
      <ul className="projects-list">
        {projects.map((project, idx) => (
          <div className="project" key={project.id}>
            <Link to={`/projects/${project.id}`}>
              <img src={project.thumbnail_url}/>
            </Link>
            <span className="project-title">{project.title}</span>
          </div>
        ))}
      </ul>
    );
  }
}

export default ProjectIndex;
