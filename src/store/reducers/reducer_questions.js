import { FETCH_QUESTIONS, CURRENT_INDEX, FOCUS_ID, INDEX } from '../actions';

const initialState={
  questions: [],
  index: -1,
  focusId: 0,
}

export default function (state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case FETCH_QUESTIONS:
      return { ...state, questions: payload.questions };
    case CURRENT_INDEX:
      return { ...state, index: payload };
    case FOCUS_ID:
      return { ...state, focusId: payload };
    case INDEX:
      return { ...state, index: payload };
    default:
      return state;
  }
}
