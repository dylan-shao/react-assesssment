import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { createUserName, clearData, setHeaderMsg } from '../store/actions';
import LoginForm from '../components/LoginForm';

/**
 * Home page
 * container for LoginForm, used to login into app with username
 */
class Home extends Component {
  componentDidMount() {
    this.props.clearData();
    this.props.setHeaderMsg('Welcome');
  }

  //save userName and do navigation
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

Home.propTypes = {
  clearData: func.isRequired,
  createUserName: func.isRequired,
  setHeaderMsg: func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      createUserName,
      clearData,
      setHeaderMsg,
    },
    dispatch,
  );
}

export default connect(null, mapDispatchToProps)(Home);
