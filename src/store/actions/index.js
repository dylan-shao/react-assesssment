import questions from '../../mock/questions.json';

export const USERNAME = 'USERNAME';
export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const QUESTION_POINT = 'QUESTION_POINT';

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

export function saveQuestionPoint(obj) {
  const [id, choice] = obj;

  return {
    type: QUESTION_POINT,
    payload: {
      id,
      points: choice.points,
      cid: choice.cid,
    },
  };
}
