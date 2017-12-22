import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchQuestions } from '../store/actions';
import Questions from './Questions';
import PrevNext from '../components/PrevNext';
import Steps from '../components/Steps';


class Assessment extends Component {
	constructor(){
		super();
		this.state = {
			index: 0,
			questions: []
		};
	}

	//simulate that the question is from the AJAX call
	componentDidMount(){
		this.props.fetchQuestions();
	}

	componentWillReceiveProps({ questions }){
		this.setState({questions});
	}

	shouldComponentUpdate(nextProps, nextState){
		return nextState.questions.length > 0;
	}

	prevClickHandler = () => {
		this.setState({index: Math.max(0, this.state.index - 1)});

	}

	nextClickHandler = () => {
		const { index, questions } = this.state;
		this.setState({index: Math.min(index + 1, questions.length - 1)});
	}

	render() {
		const { questions, index } = this.state;
		const { content, choices, id } = questions[index] || {};

		if(questions.length>0) {
			return (
				<div className="assessment">
					<Steps step={index} totalSteps={questions.length}/>
					<div className="clear-right">
						<PrevNext clickHandler={this.prevClickHandler} type="prev" value="<-"/>
						<PrevNext clickHandler={this.nextClickHandler} type="next" value="->"/>
					</div>
					<Questions questionId={id} content={content} choices={choices}/>
				</div>
			);
		} else {
			return (<div>Loading</div>);
		}
	}
}

function mapStateToProps({questions}) {
  return { questions };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchQuestions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Assessment);