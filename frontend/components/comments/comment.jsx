import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user_id: null, project_id: null, body: ""};

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = this.state;
    comment.user_id = this.props.userId;
    comment.project_id = this.props.projectId;
    this.props.createComment({ comment });
    this.setState({body: ""});
  }

  render() {

    return (
      <li className="new-comment-container">
        <img className="comment-avatar" src={this.props.currentUser.avatar_url}/>
        <div className="comment">
          <Link to={`users/${this.props.userId}`} className="comment-user">{this.props.currentUser.username}</Link>
            <form onSubmit={this.handleSubmit} className="comment-body">
              <input type="text" onChange={this.update('body')}
                placeholder="new comment"
                value={this.state.body}
                className="comment-input">
              </input>
            </form>
        </div>
      </li>
    );
  }
}

export default Comment;
