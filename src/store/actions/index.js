import questions from '../../mock/questions.json';

export const USERNAME = 'USERNAME';
export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const QUESTION_POINTS = 'QUESTION_POINTS';
export const CURRENT_INDEX = 'CURRENT_INDEX';
export const CLEAR_DATA = 'CLEAR_DATA';
export const HEADER_MESSAGE = 'HEADER_MESSAGE';

// user name to show on the Header when logged in
export function createUserName(name) {
  return {
    type: USERNAME,
    payload: name,
  };
}

/**
 * fetch questions, usually should perform an AJAX request with 'axios'
 * here is just a mock from local
 */
export function fetchQuestions() {
  return {
    type: FETCH_QUESTIONS,
    payload: questions,
  };
}

/** 
 * used to remember which choice the user selected,
 * so we can calculate the final result, and 
 * also used to dynamicaly change the choice class name 
 * so user can see the choice they made when go back and forward  
 */
export function saveQuestionPoint(arr) {
  const [id, choice] = arr;

  return {
    type: QUESTION_POINTS,
    payload: {
      id,
      points: choice.points,
      cid: choice.cid,
    },
  };
}

// clear the header message when we navigating back to Home page
export function clearData() {
  return {
    type: CLEAR_DATA,
  };
}

/**
 * set the index of the question when clicking the back and forward button
 * so we can render next or preious questions
  */
export function setCurrentIndex(index) {
  return {
    type: CURRENT_INDEX,
    payload: index,
  };
}

/**
 * header message, which should be coming from 
 * content management system like AEM(cq5)
 */
export function setHeaderMsg(msg) {
  return {
    type: HEADER_MESSAGE,
    payload: msg,
  };
}
