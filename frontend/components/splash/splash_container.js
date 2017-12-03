import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});
const mapDispatchToProps = (dispatch) => ({
  login: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
