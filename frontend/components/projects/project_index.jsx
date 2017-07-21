import React from 'react';
import { Link } from 'react-router-dom';
import ProjectDetail from './project_detail';

class ProjectIndex extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    const projects = this.props.projects;

    return (
      <ul className="projects-list">
        {projects.map((project, idx) => (
          <ProjectDetail project={project} key={project.id}/>
        ))}
      </ul>
    );
  }
}

export default ProjectIndex;
//wont have Link anymore!
// <div className="project" key={project.id}>
//
//   <Link to={`/projects/${project.id}`}>
//     <img src={project.thumbnail_url}/>
//   </Link>
//   <span className="project-title">{project.title}</span>
// </div>
