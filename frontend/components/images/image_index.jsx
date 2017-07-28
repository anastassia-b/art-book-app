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
          {comments.map((comment, idx) => (
            <li className="comment" key={comment.id}>
              <span className="comment-body">{comment.body}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ImageIndex;
