import { connect } from 'react-redux';
import UserMain from './user_main';
import { fetchUser } from '../../actions/user_actions';
import { fetchImages } from '../../actions/image_actions';

//MAKE SELECTOR FOR IMAGES

const mapStateToProps = ({ user, images }) => ({
  user,
  images
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchImages: id => dispatch(fetchImages(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserMain);
