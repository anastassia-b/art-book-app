import React from 'react';
import { Link } from 'react-router-dom';

class ImageIndex extends React.Component {
  componentDidMount() {
    const projectId = {projectId: 102};
    this.props.fetchImages(projectId);
  }

  render() {
    const images = this.props.images;

    return (
      <ul className="images-list">
        {images.map((image, idx) => (
          <div className="image" key={image.id}>
              <img src={image.img_url}/>
            <span className="image-caption">{image.caption}</span>
          </div>
        ))}
      </ul>
    );
  }
}

export default ImageIndex;
