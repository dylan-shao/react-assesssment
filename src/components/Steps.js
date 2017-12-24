import React from 'react';
import PropTypes from 'prop-types';

const Steps = ({ step, totalSteps }) => (
  <div className="question-steps">
    Step { step + 1 } of { totalSteps }
  </div>
);

Steps.defaultProps = {
  step: 0,
  totalSteps: 0,
};

Steps.propTypes = {
  step: PropTypes.number,
  totalSteps: PropTypes.number,
};

export default Steps;
