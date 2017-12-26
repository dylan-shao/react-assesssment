import { USERNAME, CLEAR_DATA, HEADER_MESSAGE } from '../actions';

const initialState = {
  userName: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USERNAME:
      return { ...state, userName: action.payload };
    case CLEAR_DATA:
      return { ...state, userName: '' };
    case HEADER_MESSAGE:
      return { ...state, headerMessage: action.payload };
    default:
      return state;
  }
}
