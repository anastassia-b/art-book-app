import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ProjectInfo extends React.Component {
  constructor(props) {
    super(props);
    this.toggleLike = this.toggleLike.bind(this);
    this.likeStatus = this.likeStatus.bind(this);
  }

  componentDidMount() {
    const id = this.props.project.user_id;
    this.props.fetchUser(id);
  }

  likeStatus() {
    if (this.props.project.likes.includes(this.props.currentUser.id)) {
      return "Liked ❤";
    } else {
      return "Like";
    }
  }

  buttonType() {
    if (this.props.project.likes.includes(this.props.currentUser.id)) {
      return "liked-button";
    } else {
      return "session-button";
    }
  }

  toggleLike() {
    const like = {project_id: this.props.project.id,
                  user_id: this.props.currentUser.id
                  };

    if (this.props.project.likes.includes(this.props.currentUser.id)) {
      this.props.unlikeProject(like);
    } else {
      this.props.likeProject(like);
    }
  }

  render() {
    const project = this.props.project;
    const user = this.props.user;

    return (
    <aside className="project-info">
      <Link to={`/users/${user.id}`}>
        <img className="avatar" src={user.avatar_url}/>
      </Link>
      <div className="about">
        <h3>{user.username}</h3>
        <h4>{project.description}</h4>
        <p>Lorem ipsum dolor sit amet, noster verear pro cu, mea eu vitae latine contentiones. Duo in modo magna aeterno, eu dico definiebas ius, ei postea sensibus consequat sea. Ne commodo electram iudicabit duo, vim et illum dissentiet.
        </p>
        <section className="likes-group">
          <button className={this.buttonType()} onClick={this.toggleLike}>{this.likeStatus()}</button>
        </section>
      </div>
    </aside>
    );
  }
}

export default withRouter(ProjectInfo);
