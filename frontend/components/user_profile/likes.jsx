import React from 'react';
import ProjectDetail from '../projects/project_detail';

class Likes extends React.Component {

  componentDidMount() {
    // this.state = {
    //   id: this.props.match.params.id
    // };

    this.props.clearProjects();
    // const id = this.props.match.params.id;
    // this.props.fetchUser(id);
    const likes = this.props.user.likes;
    likes.forEach(like => this.props.fetchProject(like));
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.match.params.id !== nextProps.match.params.id) {
  //     this.props.clearProjects();
  //     const id = nextProps.match.params.id;
  //     this.props.fetchUser(id);
  //     this.setState({ id: nextProps.match.params.id});
  //     const likes = nextProps.user.likes;
  //     likes.forEach(like => nextProps.fetchProject(like));
  //   }
  // }


  render() {
    const projects = this.props.projects;

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

  // {projects.map((project, idx) => (
  //   <ProjectDetail project={project} key={project.id}/>
  // ))}

  // <li className="image-small" key={project.id}>
  //   <img src={project.thumbnail_url}/>
  // </li>
