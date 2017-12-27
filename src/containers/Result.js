import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ScoreResult from '../components/ScoreResult';
import { setHeaderMsg } from '../store/actions';

/**
 * Result page
 * container for ScoreResult
 */
class Result extends Component {
  componentDidMount() {
    this.props.setHeaderMsg('Below is your result');
  }

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

const { arrayOf, objectOf, object, func } = PropTypes;
Result.propTypes = {
  questions: arrayOf(object),
  points: objectOf(object),
  setHeaderMsg: func.isRequired,
};

function mapStateToProps({ assessment, points }) {
  return {
    questions: assessment.questions,
    points,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setHeaderMsg }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);
