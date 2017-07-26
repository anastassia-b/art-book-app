import { connect } from 'react-redux';
import Likes from './likes';
import { fetchProject } from '../../actions/project_actions';

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  fetchProject: id => dispatch(fetchProject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Likes);
