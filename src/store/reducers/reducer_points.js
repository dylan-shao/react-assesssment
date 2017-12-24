import { QUESTION_POINTS, CLEAR_DATA } from '../actions';

export default function (state = {}, action) {
  const { payload } = action;
  switch (action.type) {
    case QUESTION_POINTS:
      return { ...state, [payload.id]: { points: payload.points, cid: payload.cid } };
    case CLEAR_DATA:
      return { };
    default:
      return state;
  }
}
