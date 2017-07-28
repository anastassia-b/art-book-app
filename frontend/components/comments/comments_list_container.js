import { connect } from 'react-redux';
import CommentsList from './comments_list';
import { selectComments } from '../../reducers/selectors';
import { fetchComments, clearComments, deleteComment } from '../../actions/comment_actions';

const mapStateToProps = (state) => ({
  comments: selectComments(state),
  currentUserId: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  fetchComments: id => dispatch(fetchComments(id)),
  clearComments: () => dispatch(clearComments()),
  deleteComment: id => dispatch(deleteComment(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsList);
