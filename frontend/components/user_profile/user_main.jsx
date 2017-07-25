import React from 'react';

class UserMain extends React.Component {
  componentDidMount() {
    const user_id = this.props.user.id;
    this.props.fetchImages({user_id});
  }

  render() {
    const images = this.props.images;

    return (
      <main className="user-main">
        <ul className="image-grid">
          {images.map((image, idx) => (
            <li key={image.id}>
              <img src={image.img_url}/>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default UserMain;
