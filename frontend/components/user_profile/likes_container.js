import { connect } from 'react-redux';
import Likes from './likes';
import { fetchProject, clearProjects } from '../../actions/project_actions';
import { selectAllProjects } from '../../reducers/selectors';
import { fetchUser } from '../../actions/user_actions';
// import { withRouter } from 'react-router';

const mapStateToProps = state => ({
  user: state.user,
  projects: selectAllProjects(state)
});

const mapDispatchToProps = dispatch => ({
  fetchProject: id => dispatch(fetchProject(id)),
  clearProjects: () => dispatch(clearProjects()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Likes);
