import React from 'react';
import PropTypes from 'prop-types';

const CommonHeader = ({ headerMessage, userName }) => (
  <header className="common-header">
    <h1>{headerMessage} {userName}</h1>
  </header>
);

CommonHeader.defaultProps = {
  headerMessage: 'Welcome',
  userName: '',
};

CommonHeader.propTypes = {
  headerMessage: PropTypes.string,
  userName: PropTypes.string,
};

export default CommonHeader;
