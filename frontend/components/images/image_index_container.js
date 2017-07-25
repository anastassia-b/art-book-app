import { connect } from 'react-redux';
import ImageIndex from './image_index';
import { fetchImages, clearImages } from '../../actions/image_actions';
import { selectImages } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  images: selectImages(state)
});

const mapDispatchToProps = dispatch => ({
  fetchImages: id => dispatch(fetchImages(id)),
  clearImages: () => dispatch(clearImages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageIndex);
