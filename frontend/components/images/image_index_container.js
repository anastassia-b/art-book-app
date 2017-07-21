import { connect } from 'react-redux';
import ImageIndex from './image_index';
import { fetchImages } from '../../actions/image_actions';
import { selectImages } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  images: selectImages(state)
});

const mapDispatchToProps = dispatch => ({
  fetchImages: (projectId) => dispatch(fetchImages(projectId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageIndex);
