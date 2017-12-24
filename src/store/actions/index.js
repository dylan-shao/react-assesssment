import questions from '../../mock/questions.json';

export const USERNAME = 'USERNAME';
export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const QUESTION_POINTS = 'QUESTION_POINTS';
export const CURRENT_INDEX = 'CURRENT_INDEX';
export const CLEAR_DATA = 'CLEAR_DATA';
export const FOCUS_ID = 'FOCUS_ID';
export const INDEX = "INDEX";

export function getUserName(name) {
  return {
    type: USERNAME,
    payload: name,
  };
}

export function fetchQuestions() {
  return {
    type: FETCH_QUESTIONS,
    payload: questions,
  };
}

// export function initFocusId() {
//   return {
//     type: FOCUS_ID,
//     payload: 0,
//   };
// }

export function initIndex() {
  return {
    type: INDEX,
    payload: 0,
  };
}

export function setFocusId(id) {
  return {
    type: FOCUS_ID,
    payload: id,
  };
}

export function saveQuestionPoint(obj) {
  const [id, choice] = obj;

  return {
    type: QUESTION_POINTS,
    payload: {
      id,
      points: choice.points,
      cid: choice.cid,
    },
  };
}

export function clearData() {
  return {
    type: CLEAR_DATA,
  };
}

export function toogleCurrentIndex(index) {
  return {
    type: CURRENT_INDEX,
    payload: index,
  }
}
