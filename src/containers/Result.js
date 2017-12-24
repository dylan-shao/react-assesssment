import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ScoreResult from '../components/ScoreResult';

class Result extends Component {
  componentDidMount() {
    console.log(222);
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

function mapStateToProps({ questions, points }) {
  return { 
  	questions: questions.questions, 
    points, 
  };
}

export default connect(mapStateToProps)(Result);
