import React from 'react';

const CommonHeader = ({ headerMessage, userName }) => (
  <header className="common-header">
    <h1>{headerMessage} {userName}</h1>
  </header>
);

export default CommonHeader;
