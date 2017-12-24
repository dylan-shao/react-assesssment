import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserName, clearData } from '../store/actions';
import LoginForm from '../components/LoginForm';

class Home extends Component {
  componentDidMount() {
    this.props.clearData();
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.getUserName(e.target.username.value);
    this.props.history.push('/assessment');
  }

  render() {
    return (
      <div className="home">
        <LoginForm onFormSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getUserName, clearData }, dispatch);
}

export default connect(null, mapDispatchToProps)(Home);
