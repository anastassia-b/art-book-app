import { connect } from 'react-redux';
import CommentsList from './comments_list';
import { selectComments } from '../../reducers/selectors';
import { fetchComments, clearComments } from '../../actions/comment_actions';

const mapStateToProps = (state) => ({
  comments: selectComments(state)
});

const mapDispatchToProps = dispatch => ({
  fetchComments: id => dispatch(fetchComments(id)),
  clearComments: () => dispatch(clearComments())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsList);
