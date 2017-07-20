import { connect } from 'react-redux';
import { selectAllProjects } from '../../reducers/selectors';
import { fetchProjects } from '../../actions/project_actions';
import ProjectsIndex from './projects_index.jsx';

const mapStateToProps = state => ({
  projects: selectAllProjects(state)
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsIndex);
