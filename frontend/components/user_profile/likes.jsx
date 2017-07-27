import React from 'react';

class Likes extends React.Component {

  componentDidMount() {
    this.props.clearProjects();
    const likes = this.props.user.likes;
    likes.forEach(like => this.props.fetchProject(like));
  }

  render() {
    const projects = this.props.projects;
    console.log(projects);
    return (
    <main className="likes-main">
      <h4 className="user-header">Liked Projects</h4>
      <ul className="image-grid">
        {projects.map((project, idx) => (
          <li className="image-small" key={project.id}>
            <img src={project.thumbnail_url}/>
          </li>
        ))}
      </ul>
    </main>
    );
  }
}

export default Likes;
