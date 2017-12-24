import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CommonHeader from '../components/CommonHeader';

/**
 * this can be just a stateless component,
 * using a container component here is easy to add
 * more features to Header
 */
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerMessage: 'Welcome',
    };
  }

  render() {
    return (
      <CommonHeader headerMessage={this.state.headerMessage} userName={this.props.userName} />
    );
  }
}

Header.defaultProps = {
  userName: '',
};

Header.propTypes = {
  userName: PropTypes.string,
};

function mapStateToProps({ header }) {
  return {
    userName: header.userName,
  };
}

export default connect(mapStateToProps)(Header);
