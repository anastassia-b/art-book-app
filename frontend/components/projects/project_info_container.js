import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import ProjectInfo from './project_info';

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectInfo);
