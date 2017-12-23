import { combineReducers } from 'redux';
import headerReducer from './reducer_header';
import questionsReducer from './reducer_questions';
import reducer_points from './reducer_points';

const rootReducer = combineReducers({
    header: headerReducer,
    questions: questionsReducer,
    points: reducer_points
});

export default rootReducer;