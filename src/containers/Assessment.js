import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchQuestions, setCurrentIndex,
  saveQuestionPoint } from '../store/actions';
import Questions from '../components/Questions';
import PrevNext from '../components/PrevNext';
import Steps from '../components/Steps';

class Assessment extends Component {
  // simulate that the question is from the AJAX call
  componentDidMount() {
    if (!this.props.questions) {
      this.props.fetchQuestions();
    }
    this.props.setCurrentIndex(0);
  }

  prevClickHandler = () => {
    const prevIndex = Math.max(0, this.props.index - 1);
    this.props.setCurrentIndex(prevIndex);
  }

  nextClickHandler = () => {
    const { questions, index } = this.props;
    const maxIndex = questions.length - 1;
    const nextIndex = Math.min(index + 1, maxIndex);
    this.props.setCurrentIndex(nextIndex);
    if (index === maxIndex) {
      this.props.history.push('/result');
    }
  }

  chocieClickHandler = (obj) => {
    this.props.saveQuestionPoint(obj);
  }

  render() {
    const { index, questions, points } = this.props;
    if (questions && questions.length > 0) {
      const { content, choices, id } = questions[index];
      return (
        <div className="assessment">
          <Steps step={index} totalSteps={questions.length} />
          <div className="clear-right">
            <PrevNext clickHandler={this.prevClickHandler} type="prev" value="<--" />
            <PrevNext clickHandler={this.nextClickHandler} type="next" value="-->" />
          </div>
          <Questions
            questionId={id}
            points={points}
            content={content}
            choices={choices}
            clickHandler={this.chocieClickHandler}
          />
        </div>
      );
    }
    return (<div className="assessment">Loading...</div>);
  }
}

Assessment.defaultProps = {
  questions: undefined,
  points: undefined,
};

// if you are reusing eslint-plugin-react:
// destructuring the propTypes will result eslint error in the console,
// details can be found at https://github.com/yannickcr/eslint-plugin-react/issues/1389
const { func, number, arrayOf, objectOf, object } = PropTypes;

Assessment.propTypes = {
  questions: arrayOf(object),
  points: objectOf(object),
  fetchQuestions: func.isRequired,
  index: number.isRequired,
  setCurrentIndex: func.isRequired,
  saveQuestionPoint: func.isRequired,
};

function mapStateToProps({ assessment, points }) {
  return {
    questions: assessment.questions,
    index: assessment.index,
    points,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchQuestions,
      setCurrentIndex,
      saveQuestionPoint,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Assessment);
