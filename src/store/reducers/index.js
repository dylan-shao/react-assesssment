import { combineReducers } from 'redux';
import headerReducer from './reducer_header';
import assessmentReducer from './reducer_assessment';
import reducerPoints from './reducer_points';

const rootReducer = combineReducers({
  header: headerReducer,
  assessment: assessmentReducer,
  points: reducerPoints,
});

export default rootReducer;
