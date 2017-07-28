import React from 'react';
import CommentContainer from '../comments/comment_container';
import CommentsListContainer from '../comments/comments_list_container';

class ImageIndex extends React.Component {
  componentDidMount() {
    const project_id = this.props.project.id;
    this.props.fetchImages({project_id});
  }

  componentWillUnmount() {
    this.props.clearImages();
    //TODO: clearComments();
  }

  render() {
    const images = this.props.images;

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
        <CommentsListContainer project={this.props.project} />
      </div>
    );
  }
}

export default ImageIndex;
