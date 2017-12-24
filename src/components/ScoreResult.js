import React from 'react';
import PropTypes from 'prop-types';

const ScoreResult = ({ points, questions, maxScore }) => {
  const renderResult = () => {
    const keys = Object.keys(points);
    const totalPoints = questions.length * maxScore;
    let score = 0;

    if (keys.length !== 0) {
      score = Object.values(points).reduce((a, b) => a + b.points, 0);
    }

    return `You answered ${keys.length}/${questions.length} questions, your score is ${score}/${totalPoints}`;
  };

  return (
    <div className="score-result">
      {renderResult()}
    </div>
  );
};

ScoreResult.defaultProps = {
  points: {},
  questions: [],
};

ScoreResult.propTypes = {
  points: PropTypes.objectOf(PropTypes.object),
  questions: PropTypes.arrayOf(PropTypes.object),
  maxScore: PropTypes.number.isRequired,
};

export default ScoreResult;
