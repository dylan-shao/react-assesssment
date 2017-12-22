import { CURRENT_QUESTION } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
    	case CURRENT_QUESTION:
    		return {...state, userName: action.payload };
        default:
            return state;
    }
}
