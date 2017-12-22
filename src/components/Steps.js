import React from 'react';

const Steps = ({step, totalSteps}) => {
	return (
		<div className='question-steps'>
			Step {step+1} of {totalSteps}
		</div>
	);
}
export default Steps;