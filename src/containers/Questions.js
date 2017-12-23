import React, { Component } from 'react';
import Choices from '../components/Choices';
import { saveQuestionPoint } from '../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Questions extends Component {

	shouldComponentUpdate(nextProps, nextStates){
		return this.props.questionId !== nextProps.questionId;
	}

	componentDidUpdate() {
		const el = document.getElementById(this.props.focusId);
		el && el.focus();
	}

	clickHandler = (obj) => {
		this.props.saveQuestionPoint(obj);
	}

	render() {
		const { questionId, content, choices } = this.props;
		if(content && choices){
			return (
				<div className="questions clear-both">
					<h2 className="question-content">{content}</h2>
			        <Choices questionId={questionId} choices={choices} clickHandler={this.clickHandler}/>
				</div>
			);
		} else {
			return (
				<div>Loading</div>
			);
		}
		
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({saveQuestionPoint}, dispatch);
}
export default connect(null, mapDispatchToProps)(Questions);