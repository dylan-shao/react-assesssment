import React, { Component } from 'react';
import { connect } from 'react-redux';


class Questions extends Component {
	componentDidMount() {
		this.props.fetchQuestions();
	}

	render() {
		return (
			<div className="questions">
				questions
			</div>
		);
	}
}

export default Questions;