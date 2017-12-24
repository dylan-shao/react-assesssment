import { QUESTION_POINT } from '../actions';

export default function (state = {}, action) {
  const { payload } = action;
  switch (action.type) {
    case QUESTION_POINT:
      return { ...state, [payload.id]: { points: payload.points, cid: payload.cid } };
    default:
      return state;
  }
}
