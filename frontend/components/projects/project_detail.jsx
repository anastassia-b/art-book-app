import React from 'react';
import Modal from 'react-modal';
import style from './modal_style';

// import ImageIndexContainer from '../images/images_index_container';

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentDidMount() {
    // const projectId = {projectId: 102};
    // this.props.fetchImages(projectId);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  render () {
    const project = this.props.project;

    return (
      <div>
        <div className="project" key={project.id}>
          <section onClick={this.openModal.bind(this)}>
            <img src={project.thumbnail_url}/>
          </section>
          <span className="project-title">{project.title}</span>
        </div>

        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style}>

          <div className="x-button">
            <button onClick={this.closeModal}><i aria-hidden="true"></i></button>
          </div>

          HELLO
        </Modal>
      </div>
    );
  }

}

export default ProjectDetail;

// <ImageIndexContainer projectId={project.id} />
