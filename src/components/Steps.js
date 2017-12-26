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

const { number } = PropTypes;

Steps.propTypes = {
  step: number,
  totalSteps: number,
};

export default Steps;
