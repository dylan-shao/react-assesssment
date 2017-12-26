import { FETCH_QUESTIONS, CURRENT_INDEX, INDEX } from '../actions';

const initialState = {
  index: -1,
  focusId: '',
};

export default function (state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case FETCH_QUESTIONS:
      return { ...state, questions: payload.questions };
    case CURRENT_INDEX:
      return { ...state, index: payload };
    case INDEX:
      return { ...state, index: payload };
    default:
      return state;
  }
}
