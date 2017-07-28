import React from 'react';
import { Link } from 'react-router-dom';
import CommentContainer from '../comments/comment_container';

class CommentsList extends React.Component {
  componentDidMount() {
    const project_id = this.props.project.id;
    this.props.fetchComments({project_id});
  }

  componentWillUnmount() {
    this.props.clearComments();
  }

  render() {
    const comments = this.props.comments;

    return (
      <ul className="comments-list">
        <h3>Comments</h3>
          {comments.map((comment, idx) => (
            <li className="comment-container" key={comment.id}>
              <img className="comment-avatar" src={comment.user_avatar_url}/>
              <div className="comment">
                <Link to={`users/${comment.user_id}`} className="comment-user">{comment.username}</Link>
                <span className="comment-body">{comment.body}</span>
              </div>
            </li>
          ))}
        <CommentContainer projectId={this.props.project.id} />
      </ul>
    );
  }
}

export default CommentsList;
