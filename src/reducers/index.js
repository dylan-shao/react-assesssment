import { combineReducers } from 'redux';
import reducerHeader from './reducerHeader';

const rootReducer = combineReducers({
    header: reducerHeader
});

export default rootReducer;