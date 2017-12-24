import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getUserName } from '../store/actions';
import LoginForm from '../components/LoginForm';

class Home extends Component {
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
  return bindActionCreators({ getUserName }, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(Home));
