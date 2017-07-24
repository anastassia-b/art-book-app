import React from 'react';
import { Link } from 'react-router-dom';

class ImageIndex extends React.Component {
  componentDidMount() {
    const project_id = this.props.project.id;
    console.log(project_id);
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
