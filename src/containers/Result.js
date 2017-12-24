import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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

function mapStateToProps({ points, questions }) {
  return { points, questions };
}

export default connect(mapStateToProps)(Result);
