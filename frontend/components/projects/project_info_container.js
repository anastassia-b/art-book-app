import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import ProjectInfo from './project_info';
import { likeProject, unlikeProject } from '../../actions/likes_actions';

const mapStateToProps = state => ({
  user: state.user,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  likeProject: like => dispatch(likeProject(like)),
  unlikeProject: id => dispatch(unlikeProject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectInfo);
