import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/**
 * this can be just a stateless component,
 * I am connecting to store and using as container component here is easy to add
 * more features, functionalities to Header
 */
class Header extends Component {
  render() {
    const { headerMessage, userName } = this.props;

    // headerMessage should be coming from cq5 or other content management system
    // but I just hard code it for convenience
    return (
      <header className="common-header">
        <h1>{headerMessage} {userName}</h1>
      </header>
    );
  }
}

Header.defaultProps = {
  headerMessage: 'welcome',
  userName: '',
};

const { string } = PropTypes;

Header.propTypes = {
  headerMessage: string,
  userName: string,
};

function mapStateToProps({ header }) {
  return {
    headerMessage: header.headerMessage,
    userName: header.userName,
  };
}

export default connect(mapStateToProps)(Header);
