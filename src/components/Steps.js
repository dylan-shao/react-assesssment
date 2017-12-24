import React from 'react';

const Steps = ({ step, totalSteps }) => (
  <div className="question-steps">
    Step { step + 1 } of { totalSteps }
  </div>
);

export default Steps;
