import React from 'react';
import { Link } from 'react-router-dom';

class ImageIndex extends React.Component {
  componentDidMount() {
    const project_id = this.props.project.id;
    this.props.fetchImages({project_id});
  }

  componentWillReceiveProps() {
    //Todo:
    // pass state to index images
    // component will recievce this.props.to rerender upon click
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
