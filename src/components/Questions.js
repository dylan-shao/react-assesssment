import React from 'react';
import PropTypes from 'prop-types';

const Questions = (props) => {
  const { questionId, points, content, choices, clickHandler } = props;
  const isChoosen = (cid) => {
    if (points[questionId] && points[questionId].cid === cid) {
      return true;
    }
    return false;
  };

  const renderChoices = (choice) => {
    const btnClass = isChoosen(choice.cid) ? 'button-choosen button-item' : 'button-item';
    return (
      <li key={choice.cid}>
        <button
          className={btnClass}
          onClick={clickHandler.bind(null, [questionId, choice])}
        >{choice.content}
        </button>
      </li>
    );
  };

  if (content && choices) {
    return (
      <div className="questions clear-both">
        <h2 className="question-content">{content}</h2>
        <div className="choices">
          <ul>{choices.map(renderChoices)}</ul>
        </div>
      </div>
    );
  }
  return (
    <div>Loading</div>
  );
};

const { func, number, string, arrayOf, objectOf, object } = PropTypes;

Questions.propTypes = {
  clickHandler: func.isRequired,
  questionId: number.isRequired,
  content: string.isRequired,
  choices: arrayOf(object).isRequired,
  points: objectOf(object).isRequired,
};

export default Questions;
