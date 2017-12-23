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

	handleFocus = (index) => {
		console.log(this.props.points);
		const id = this.state.questions[index].id;
		const pointsObj = this.props.points[id];
		if(pointsObj) {
			this.setState({focusId: `choice-${pointsObj.cid}`});
		}else {
			this.setState({focusId: void 0});
		}
	}

	prevClickHandler = () => {
		const prevIndex = Math.max(0, this.state.index - 1);
		this.setState({index: prevIndex});
		this.handleFocus(prevIndex);
	}

	nextClickHandler = () => {
		const { index, questions } = this.state;
		const nextIndex = Math.min(index + 1, questions.length - 1);
		this.setState({index: nextIndex});
		this.handleFocus(nextIndex);
	}

	render() {
		const { questions, index, focusId } = this.state;
		const { content, choices, id } = questions[index] || {};

		if(questions.length>0) {
			return (
				<div className="assessment">
					<Steps step={index} totalSteps={questions.length}/>
					<div className="clear-right">
						<PrevNext clickHandler={this.prevClickHandler} type="prev" value="<-"/>
						<PrevNext clickHandler={this.nextClickHandler} type="next" value="->"/>
					</div>
					<Questions questionId={id} content={content} choices={choices} focusId={focusId}/>
				</div>
			);
		} else {
			return (<div>Loading...</div>);
		}
	}
}

function mapStateToProps({questions, points}) {
  return { questions, points };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchQuestions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Assessment);