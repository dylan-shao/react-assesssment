import React, { Component } from 'react';
import Choices from '../components/Choices';


class Questions extends Component {

	shouldComponentUpdate(nextProps, nextStates){
		return this.props.questionId !== nextProps.questionId;
	}

	render() {
		const { content, choices } = this.props;
		if(content && choices){
			return (
				<div className="questions clear-both">
					<div >{this.props.content}</div>
			        <Choices choices={this.props.choices} />
				</div>
			);
		} else {
			return (
				<div>Loading</div>
			);
		}
		
	}
}


export default Questions;