import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, logout, signup } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  };
};

// const mapDispatchToProps = (dispatch, { location }) => {
//   const formType = location.pathname.slice(1);
//   const processForm = (formType === 'login') ? login : signup;
//   return {
//     guestLogin: (user) => dispatch(login(user)),
//     processForm: user => dispatch(processForm(user)),
//     formType
//   };
// };

const mapDispatchToProps = (dispatch) => ({
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout()),
  signup: user => dispatch(signup(user)),
  guestLogin: user => dispatch(login(user))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
