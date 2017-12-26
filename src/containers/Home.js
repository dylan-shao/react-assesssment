import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createUserName, clearData } from '../store/actions';
import LoginForm from '../components/LoginForm';

class Home extends Component {
  componentDidMount() {
    this.props.clearData();
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.createUserName(e.target.username.value);
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

const { func } = PropTypes;
Home.propTypes = {
  clearData: func.isRequired,
  createUserName: func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createUserName, clearData }, dispatch);
}

export default connect(null, mapDispatchToProps)(Home);
