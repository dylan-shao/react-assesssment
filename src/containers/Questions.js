import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Choices from '../components/Choices';
import { saveQuestionPoint } from '../store/actions';

class Questions extends Component {
  shouldComponentUpdate(nextProps) {
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

    if (content && choices) {
      return (
        <div className="questions clear-both">
          <h2 className="question-content">{content}</h2>
          <Choices questionId={questionId} choices={choices} clickHandler={this.clickHandler} />
        </div>
      );
    }
    return (
      <div>Loading</div>
    );
  }
}

Questions.defaultProps = {
  focusId: '',
};

Questions.propTypes = {
  questionId: PropTypes.number.isRequired,
  focusId: PropTypes.string,
  saveQuestionPoint: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  choices: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveQuestionPoint }, dispatch);
}

export default connect(null, mapDispatchToProps)(Questions);
