import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ScoreResult from '../components/ScoreResult';

class Result extends Component {
  render() {
    return (
      <div className="result">
        <ScoreResult points={this.props.points} questions={this.props.questions} maxScore={3} />
        <div>
          <Link to="/" className="link">Home Page</Link>
        </div>
      </div>
    );
  }
}

Result.defaultProps = {
  questions: [],
  points: {},
};

Result.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object),
  points: PropTypes.objectOf(PropTypes.object),
};

function mapStateToProps({ questions, points }) {
  return {
    questions: questions.questions,
    points,
  };
}

export default connect(mapStateToProps)(Result);
