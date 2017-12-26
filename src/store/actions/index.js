import questions from '../../mock/questions.json';

export const USERNAME = 'USERNAME';
export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const QUESTION_POINTS = 'QUESTION_POINTS';
export const CURRENT_INDEX = 'CURRENT_INDEX';
export const CLEAR_DATA = 'CLEAR_DATA';
export const HEADER_MESSAGE = 'HEADER_MESSAGE';

export function createUserName(name) {
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

export function setCurrentIndex(index) {
  return {
    type: CURRENT_INDEX,
    payload: index,
  };
}

export function setHeaderMsg(msg) {
  return {
    type: HEADER_MESSAGE,
    payload: msg,
  };
}
