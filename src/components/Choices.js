import React from 'react';

const Choices = ({ clickHandler, questionId, choices }) => {
  const bindClick = (id, select) => (clickHandler.bind(null, [id, select]));
  const renderChoices = choice => (
    <li key={choice.cid}>
      <button
        id={`choice-${choice.cid}`}
        className="btn-item"
        onClick={bindClick(questionId, choice)}
      >{choice.content}
      </button>
    </li>
  );

  return (
    <div className="choices">
      <ul>{choices.map(renderChoices)}</ul>
    </div>
  );
};

export default Choices;
