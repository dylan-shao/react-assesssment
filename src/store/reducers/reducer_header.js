import { USERNAME } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
    	case USERNAME:
    		return {...state, userName: action.payload };
        default:
            return state;
    }
}
