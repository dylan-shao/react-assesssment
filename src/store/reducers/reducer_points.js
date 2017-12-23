import { QUESTION_POINT } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
    	case QUESTION_POINT:
    		return {...state, [action.payload.id]: action.payload.points };
        default:
            return state;
    }
}
