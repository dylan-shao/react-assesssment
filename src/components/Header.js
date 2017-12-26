import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { headerMessage, userName } = props;

  return (
    <header className="common-header">
      <h1>{headerMessage} {userName}</h1>
    </header>
  );
};

Header.defaultProps = {
  headerMessage: 'welcome',
  userName: '',
};

const { string } = PropTypes;

Header.propTypes = {
  headerMessage: string,
  userName: string,
};

export default Header;
