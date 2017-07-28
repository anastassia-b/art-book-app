import React from 'react';

class ImageIndex extends React.Component {
  componentDidMount() {
    const project_id = this.props.project.id;
    this.props.fetchImages({project_id});
    this.props.fetchComments({project_id});
  }

  componentWillUnmount() {
    this.props.clearImages();
  }

  render() {
    const images = this.props.images;
    const comments = this.props.comments;

    return (
      <div className="project-left">
        <ul className="images-list">
          {images.map((image, idx) => (
            <li className="image" key={image.id}>
              <img src={image.img_url}/>
              <span className="image-caption">{image.caption}</span>
            </li>
          ))}
        </ul>
        <ul className="comments-list">
          <h3>Comments</h3>
          {comments.map((comment, idx) => (
            <li className="comment-container" key={comment.id}>
              <img className="comment-avatar" src={comment.user_avatar_url}/>
              <div className="comment">
                <span className="comment-user">{comment.username}</span>
                <span className="comment-body">{comment.body}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ImageIndex;
