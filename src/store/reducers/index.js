import { combineReducers } from 'redux';
import headerReducer from './reducer_header';
import questionsReducer from './reducer_questions';

const rootReducer = combineReducers({
    header: headerReducer,
    questions: questionsReducer
});

export default rootReducer;