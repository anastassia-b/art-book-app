import { connect } from 'react-redux';
import Likes from './likes';
import { fetchProject, clearProjects } from '../../actions/project_actions';
import { selectProjectsByLikes } from '../../reducers/selectors';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    projects: selectProjectsByLikes(state)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProject: id => dispatch(fetchProject(id)),
  clearProjects: () => dispatch(clearProjects())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Likes));
