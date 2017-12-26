import { USERNAME, CLEAR_DATA } from '../actions';

const initialState = {
  userName: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USERNAME:
      return { ...state, userName: action.payload };
    case CLEAR_DATA:
      return { ...state, userName: '' };
    default:
      return state;
  }
}
