import { RECEIVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const Segment = store => next => action => {
    let eventProperties = {};

    switch(action.type) {
        case RECEIVE_COMMENT:
            eventProperties = {
                comment: action.comment
            }
            analytics.track(
                'Create Comment', eventProperties
            );
            return next(action);

        case RECEIVE_CURRENT_USER:
            if (!action.currentUser) {
                analytics.track(
                    'Logout User', eventProperties
                );
            } else {
                eventProperties = {
                    id: action.currentUser.id,
                    username: action.currentUser.username
                }
                analytics.track(
                    'Login User', eventProperties
                );
            }
            
            return next(action);

        case RECEIVE_ERRORS:
            eventProperties = {
                errors: action.errors
            }
            analytics.track(
                'Receive Errors', eventProperties
            );
            return next(action);

        default:
            return next(action);
    }
}

export default Segment;