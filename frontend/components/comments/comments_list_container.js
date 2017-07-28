import { connect } from 'react-redux';
import CommentsList from './comments_list';
import { selectComments } from '../../reducers/selectors';
import { fetchComments } from '../../actions/comment_actions';

const mapStateToProps = (state) => ({
  comments: selectComments(state)
});

const mapDispatchToProps = dispatch => ({
  fetchComments: id => dispatch(fetchComments(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsList);
