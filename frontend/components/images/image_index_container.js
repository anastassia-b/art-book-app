import { connect } from 'react-redux';
import ImageIndex from './image_index';
import { fetchImages, clearImages } from '../../actions/image_actions';
import { selectImages, selectComments } from '../../reducers/selectors';
import { fetchComments } from '../../actions/comment_actions';

const mapStateToProps = (state) => ({
  images: selectImages(state),
  comments: selectComments(state)
});

const mapDispatchToProps = dispatch => ({
  fetchImages: id => dispatch(fetchImages(id)),
  clearImages: () => dispatch(clearImages()),
  fetchComments: id => dispatch(fetchComments(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageIndex);
