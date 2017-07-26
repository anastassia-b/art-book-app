import { connect } from 'react-redux';
import UserMain from './user_main';
// import { fetchUser } from '../../actions/user_actions';
import { fetchImages } from '../../actions/image_actions';
import { selectImages } from '../../reducers/selectors';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => ({
  images: selectImages(state),
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  fetchImages: id => dispatch(fetchImages(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserMain));
