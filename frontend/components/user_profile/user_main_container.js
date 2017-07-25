import { connect } from 'react-redux';
import UserMain from './user_main';
// import { fetchUser } from '../../actions/user_actions';
import { fetchImages } from '../../actions/image_actions';
import { selectImages } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  images: selectImages(state)
});

const mapDispatchToProps = dispatch => ({
  fetchImages: id => dispatch(fetchImages(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserMain);
