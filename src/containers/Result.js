import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Result extends Component {

	renderResult = () => {
		const { points, questions } = this.props,
			keys = Object.keys(points),
			totalPoints = questions.length * this.props.maxScore;
		let score = 0;
		if(keys.length !== 0) {
			score = Object.values(points).reduce((a,b)=> a+b.points, 0);
		}


		return `You answered ${keys.length}/${questions.length} questions, your score is ${score}/${totalPoints}`;
	}

	render(){
		return (
			<div className="result">
				{this.renderResult()}
				<div>
					<Link to="/" className="link">Do it again?</Link>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ points, questions }) {
	return { points, questions };
}



export default withRouter(connect(mapStateToProps)(Result));