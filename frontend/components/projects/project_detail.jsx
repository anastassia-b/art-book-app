import React from 'react';
import Modal from 'react-modal';
import style from './modal_style';

import ImageIndexContainer from '../images/image_index_container';
import ProjectInfo from './project_info';

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
    // const project = this.props.project;
    // const project_id = project.id;
    // this.props.fetchImages(project_id);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  render() {
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
          <div className="project-detail">
            <ImageIndexContainer project={project}/>
            <ProjectInfo project={project}/>
          </div>
        </Modal>
      </div>
    );
  }

}

export default ProjectDetail;
