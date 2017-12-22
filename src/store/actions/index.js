import questions from '../../mock/questions.json';

export const USERNAME = 'USERNAME';
export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const PREV_QUESTION = 'PREV_QUESTION';
export const NEXT_QUESTION = 'NEXT_QUESTION';

export const getUserName = (name) =>{
        return{
            type: USERNAME,
            payload: name
        };
};

export const fetchQuestions = () =>{
        return{
            type: FETCH_QUESTIONS,
            payload: questions
        };
};

export const getPrevQuestion = () =>{
        return{
            type: PREV_QUESTION,
            payload: questions
        };
};

export const getNextQuestion = () =>{
        return{
            type: NEXT_QUESTION,
            payload: questions
        };
};
