
export default function(state = {}, action) {
    // switch (action.type) {
    // 	case FETCH_POST:
    // 		const post = action.payload.data;
    // 		//es5
    // 		// const newState = { ...state };
    // 		// newState[post.id] = post;
    // 		//below is equal to: Object.assign({}, state, {[post.id]: post})
    // 		return {...state, [post.id]: post };
    //     case FETCH_POSTS:
    //     	return _.mapKeys(action.payload.data, 'id');
    //     default:
    //         return state;
    // }
    return state;
}
