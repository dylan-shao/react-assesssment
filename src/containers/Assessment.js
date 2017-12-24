import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchQuestions, toggleCurrentIndex, initIndex, setFocusId } from '../store/actions';
import Questions from './Questions';
import PrevNext from '../components/PrevNext';
import Steps from '../components/Steps';

class Assessment extends Component {
  // simulate that the question is from the AJAX call
  componentDidMount() {
    if (!this.props.questions) {
      this.props.fetchQuestions();
    }
    this.props.initIndex();
  }

  shouldComponentUpdate(nextProps) {
    return this.props.index !== nextProps.index;
  }

  handleFocus = (index) => {
    const { id } = this.props.questions[index];
    const pointsObj = this.props.points && this.props.points[id];
    if (pointsObj) {
      this.props.setFocusId(`choice-${pointsObj.cid}`);
    } else {
      this.props.setFocusId();
    }
  }

  prevClickHandler = () => {
    const prevIndex = Math.max(0, this.props.index - 1);
    this.props.toggleCurrentIndex(prevIndex);
    this.handleFocus(prevIndex);
  }

  nextClickHandler = () => {
    const { questions, index } = this.props;
    const maxIndex = questions.length - 1;
    const nextIndex = Math.min(index + 1, maxIndex);
    this.props.toggleCurrentIndex(nextIndex);
    this.handleFocus(nextIndex);
    if (index === maxIndex) {
      this.props.history.push('/result');
    }
  }

  render() {
    const { index, focusId, questions } = this.props;
    if (questions && questions.length > 0) {
      const { content, choices, id } = questions[index];
      return (
        <div className="assessment">
          <Steps step={index} totalSteps={questions.length} />
          <div className="clear-right">
            <PrevNext clickHandler={this.prevClickHandler} type="prev" value="<--" />
            <PrevNext clickHandler={this.nextClickHandler} type="next" value="-->" />
          </div>
          <Questions questionId={id} content={content} choices={choices} focusId={focusId} />
        </div>
      );
    }
    return (<div className="assessment">Loading...</div>);
  }
}

Assessment.defaultProps = {
  questions: undefined,
  points: undefined,
  focusId: undefined,
};

Assessment.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object),
  points: PropTypes.objectOf(PropTypes.object),
  fetchQuestions: PropTypes.func.isRequired,
  initIndex: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  setFocusId: PropTypes.func.isRequired,
  toggleCurrentIndex: PropTypes.func.isRequired,
  focusId: PropTypes.string,
};

function mapStateToProps({ questions, points }) {
  return {
    questions: questions.questions,
    index: questions.index,
    focusId: questions.focusId,
    points,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchQuestions,
      toggleCurrentIndex,
      initIndex,
      setFocusId,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Assessment);
