import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ScoreResult from '../components/ScoreResult';

/**
 * this can be just a stateless component,
 * I am tring to set every independent page as seperate container
 * so it will be easy to add more features to the result page
 */
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

const { arrayOf, objectOf, object } = PropTypes;
Result.propTypes = {
  questions: arrayOf(object),
  points: objectOf(object),
};

function mapStateToProps({ assessment, points }) {
  return {
    questions: assessment.questions,
    points,
  };
}

export default connect(mapStateToProps)(Result);
