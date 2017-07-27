import React from 'react';

class Likes extends React.Component {
  componentWillMount() {
    this.props.clearProjects();
  }

  componentDidMount() {
    const likes = this.props.user.likes;
    likes.forEach(like => this.props.fetchProject(like));
  }

  render() {
    const projects = this.props.projects;
    console.log(projects);
    return (
    <main className="user-main">
      <h4 className="likes-header">Liked Projects</h4>
      <ul className="image-grid">
        {projects.map((project, idx) => (
          <li className="image" key={project.id}>
            <img src={project.thumbnail_url}/>
          </li>
        ))}
      </ul>
    </main>
    );
  }
}

export default Likes;
