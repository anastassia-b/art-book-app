import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import projectsReducer from './projects_reducer';
import imagesReducer from './images_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  projects: projectsReducer,
  images: imagesReducer
});

export default rootReducer;
