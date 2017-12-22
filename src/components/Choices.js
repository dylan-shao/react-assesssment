import React from 'react';

const Choices = (props) => {
	const renderChoices = (choice) => {
		return (
			<li key={choice.cid}>
				<button className="btn-item">{choice.content}</button>
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