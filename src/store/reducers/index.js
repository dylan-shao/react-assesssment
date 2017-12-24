import { combineReducers } from 'redux';
import headerReducer from './reducer_header';
import questionsReducer from './reducer_questions';
import reducerPoints from './reducer_points';

const rootReducer = combineReducers({
  header: headerReducer,
  questions: questionsReducer,
  points: reducerPoints,
});

export default rootReducer;
