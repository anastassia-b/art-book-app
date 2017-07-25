import React from 'react';

class ImageIndex extends React.Component {
  componentDidMount() {
    const project_id = this.props.project.id;
    this.props.fetchImages({project_id});
  }

  componentWillUnmount() {
    this.props.clearImages();
  }

  render() {
    const images = this.props.images;

    return (
      <ul className="images-list">
        {images.map((image, idx) => (
          <li className="image" key={image.id}>
            <img src={image.img_url}/>
            <span className="image-caption">{image.caption}</span>
          </li>
        ))}
      </ul>
    );
  }
}

export default ImageIndex;
