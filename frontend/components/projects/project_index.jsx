import React from 'react';
import ProjectDetail from './project_detail';
import Scroll from 'react-scroll';

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    let scroll = Scroll.animateScroll;
    scroll.scrollTo(900, {
      duration: 1500,
      delay: 50,
      smooth: true
    });
  }

  componentDidMount() {
    this.props.fetchProjects();
    this.handleScroll();
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
