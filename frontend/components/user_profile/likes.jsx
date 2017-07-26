import React from 'react';

class Likes extends React.Component {
  componentDidMount() {
    const likes = this.props.user.likes;
    likes.forEach(like => this.props.fetchProject(like));
  }

  render() {
    const likes = this.props.user.likes;

    return (
    <main className="user-main">
      <h4 className="likes-header">Liked Projects</h4>
      <ul className="image-grid">

      </ul>
    </main>
    );
  }
}

export default Likes;

// {likes.map((like, idx) => (
//   <li className="image" key={like.id}>
//     {like}
//   </li>
// ))}
