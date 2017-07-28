import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import projectsReducer from './projects_reducer';
import imagesReducer from './images_reducer';
import userReducer from './user_reducer';
import commentsReducer from './comments_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  projects: projectsReducer,
  images: imagesReducer,
  user: userReducer,
  comments: commentsReducer
});

export default rootReducer;
