import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import projectsReducer from './projects_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  projects: projectsReducer
});

export default rootReducer;
