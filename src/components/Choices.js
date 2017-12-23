import React from 'react';

const Choices = (props) => {
	const renderChoices = (choice) => {
		return (
			<li key={choice.cid}>
				<button 
					id={"choice-"+choice.cid} 
					className="btn-item" 
					onClick={props.clickHandler.bind(null, [props.questionId, choice])}>
					{choice.content}
				</button>
			</li>
		);
	}

	return (
		<div className="choices">
			<ul>{props.choices.map(renderChoices)}</ul>
		</div>
	);
}
export default Choices;