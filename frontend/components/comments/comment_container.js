import { connect } from "react-redux";
import { createComment } from "../../actions/comment_actions";
import Comment from './comment';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  userId: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
