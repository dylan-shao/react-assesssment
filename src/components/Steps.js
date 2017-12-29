import React from 'react';
import { number } from 'prop-types';

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
  step: number,
  totalSteps: number,
};

export default Steps;
